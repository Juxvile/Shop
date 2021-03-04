package Project.Shop.repository;

import Project.Shop.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, Long> {
    User findByUsername(String username);

//    public List<User> findAll() {
//        return mongoTemplate.findAll(User.class);
//    }

}
