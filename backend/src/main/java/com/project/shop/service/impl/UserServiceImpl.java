package com.project.shop.service.impl;


import com.project.shop.controller.dto.TokenResponseDto;
import com.project.shop.model.Role;
import com.project.shop.model.Status;
import com.project.shop.model.User;
import com.project.shop.repository.RoleRepository;
import com.project.shop.repository.UserRepository;
import com.project.shop.security.jwt.JwtTokenProvider;
import com.project.shop.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final BCryptPasswordEncoder passwordEncoder;
    
    // TODO: 27.04.2021 Переписать под Optional 
    @Override
    public User register(User user) {
        Role roleUser = roleRepository.findByName("ROLE_USER");
        List<Role> userRoles = new ArrayList<>();

        userRoles.add(roleUser);

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(userRoles);
        user.setStatus(Status.ACTIVE);

        User registeredUser = userRepository.save(user);
        log.info("IN register - user: {} successfully registered", registeredUser);

        return registeredUser;
    }

    @Override
    public TokenResponseDto login(String username, String password) throws Exception {
        User user = this.findByUsername(username);

        String token = jwtTokenProvider.createToken(username, user.getRoles())
                .orElseThrow(() -> new Exception("Token didn't created"));

        return TokenResponseDto.of(username,token);
    }

    @Override
    public List<User> getAll() {
        List<User> result = userRepository.findAll();
        log.info("IN getAll - {} users found", result.size());
        return result;
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> generateException(
                        String.format("IN findByUsername - user: {} found by username: {}", username),
                        String.format("User with username = {} not found", username)));
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> generateException(
                        String.format("IN findById - no user found by id {}", id),
                        String.format("User with id {} not found", id)));
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
        log.info("IN delete - user with id: {} successfully deleted");
    }

    private UsernameNotFoundException generateException(String loggerMessage, String exceptionMessage) {
        log.warn(loggerMessage);
        return new UsernameNotFoundException(exceptionMessage);
    }
}
