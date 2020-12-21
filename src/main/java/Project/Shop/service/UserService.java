package Project.Shop.service;

import Project.Shop.model.Product;
import Project.Shop.model.User;
import Project.Shop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    public final UserRepository userRepository;


    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
}
