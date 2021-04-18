package com.project.shop.controller;


import com.project.shop.dto.UserDto;
import com.project.shop.model.User;
import com.project.shop.repository.UserRepository;
import com.project.shop.service.UserService;
import com.project.shop.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping(value = "/users")
public class UserController {
    public final UserRepository userRepository;
    public final UserService userService;
    public final UserServiceImpl userServiceImpl;

    @Autowired
    public UserController(UserRepository userRepository, UserService userService, UserServiceImpl userServiceImpl) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.userServiceImpl = userServiceImpl;
    }


    @GetMapping
    public List<User> users (){
        return userService.getAll();
    }


    @GetMapping(value = "{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable(name = "id") Long id){
        User user = userService.findById(id);

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        UserDto result = UserDto.fromUser(user);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


    @PostMapping("/add")
    public void addUser(
            @RequestBody User user
    ) {
        userServiceImpl.register(user);
    }


    @RequestMapping("/dashboard")
    public String firstPage() {
        return "success";
    }


}
