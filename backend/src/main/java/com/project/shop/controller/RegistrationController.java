package com.project.shop.controller;

import com.project.shop.model.User;
import com.project.shop.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/registration")
public class RegistrationController {
    
    private final UserService userService;

    @PostMapping
    public void registrationUser(@RequestBody User user) {
        userService.register(user);
    }

}
