package Project.Shop.controller;

import Project.Shop.config.NotFoundException;
import Project.Shop.model.User;
import Project.Shop.repository.UserRepository;
import Project.Shop.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequiredArgsConstructor
@RequestMapping(value = "/users")
public class UserController {
    public final UserRepository userRepository;

    public final UserService userService;

    @GetMapping
    public List<User> users (){
        return userService.getAllUsers();
    }


    @GetMapping("{id}")
    public List<User> getOneUser(@PathVariable String id) {
        return Collections.singletonList(users().stream()
                .filter(product -> product.getId().equals(id))
                .findFirst()
                .orElseThrow(NotFoundException::new));
    }


    @PostMapping("/add")
    @ResponseBody
    public void addUser(
            @RequestBody User user
    ) {
        userService.addUser(user);
    }

    @PostMapping("/login")
    @ResponseBody
    public void loginUser(@RequestBody User user) {

    }
    @RequestMapping("/dashboard")
    public String firstPage() {
        return "success";
    }


}
