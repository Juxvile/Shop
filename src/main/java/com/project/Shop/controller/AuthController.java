package com.project.Shop.controller;

import com.project.Shop.dto.AuthenticationRequestDto;
import com.project.Shop.model.JwtTokenProvider;
import com.project.Shop.model.User;
import com.project.Shop.repository.UserRepository;
import com.project.Shop.service.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.Map;

public class AuthController {


    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserServiceImpl userServiceImpl;
    private final UserRepository userRepository;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserServiceImpl userServiceImpl, UserRepository userRepository) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userServiceImpl = userServiceImpl;
        this.userRepository = userRepository;
    }


    @PostMapping("login")
    public ResponseEntity login (@RequestBody AuthenticationRequestDto requestDto){
        try{
            String username = requestDto.getUsername();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,requestDto.getPassword()));
            User user = userRepository.findByUsername(username);

            if(user == null){
                throw new UsernameNotFoundException("User with username " + username + " not found");
            }
            String token = jwtTokenProvider.createToken(username, user.getRoles());

            Map<Object, Object> response = new HashMap<>();
            response.put("username", username);
            response.put("token", token);
            return ResponseEntity.ok(response);
        }catch (AuthenticationException e){
            throw new BadCredentialsException("Invalid username or password");
        }
    }
}
