package Project.Shop.controller;

import Project.Shop.model.User;
import Project.Shop.repository.UserRepository;
import Project.Shop.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/add") // Нужно пофиксить мейлсендер сервер, он не работает!!!
    @ResponseBody
    public void addUser(
            @RequestBody User user
    ) {
        userService.addUser(user);
    }


    @PostMapping("/login") // Не уверен что логин должен работать именно так
    public User loginUser(
            @AuthenticationPrincipal User user
    ) {
        return user;
    }


}
