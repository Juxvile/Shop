package Project.Shop.controller;

import Project.Shop.model.User;
import Project.Shop.repository.UserRepository;
import Project.Shop.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
    public final UserRepository userRepository;
    public final UserService userService;

    @GetMapping
    public List<User> users (){
        return userService.getAllUsers();
    }
}
