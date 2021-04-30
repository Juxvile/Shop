package com.project.shop.controller;

import com.project.shop.model.User;
import com.project.shop.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/registration")
public class RegistrationController {

    public final UserServiceImpl userServiceImpl;

    @PostMapping
    public void registrationUser(@RequestBody User user) {
        userServiceImpl.register(user);
    }

}
