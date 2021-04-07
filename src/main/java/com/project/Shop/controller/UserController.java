package com.project.Shop.controller;

import com.project.Shop.dto.UserDto;
import com.project.Shop.model.User;
import com.project.Shop.repository.UserRepository;
import com.project.Shop.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequiredArgsConstructor
@RequestMapping(value = "/users")
public class UserController {
    public final UserRepository userRepository;

    public final UserService userService;


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
        userService.register(user);
    }


    @RequestMapping("/dashboard")
    public String firstPage() {
        return "success";
    }


}
