package com.project.shop.service;

import com.project.shop.controller.dto.AuthenticationRequestDto;
import com.project.shop.model.User;

import java.util.List;

public interface UserService {
    User register(User user);

    AuthenticationRequestDto login(String username, String password);

    List<User> getAll();

    User findByUsername(String username);

    User findById(Long id);

    void delete(Long id);
}
