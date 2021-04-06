package com.project.Shop.repository;

import com.project.Shop.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, Long> {
    Role findByName(String name);
}
