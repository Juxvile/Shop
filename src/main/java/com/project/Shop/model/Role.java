package com.project.Shop.model;

import lombok.Data;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import java.util.List;


@Document(collection = "Roles")
@Data
public class Role {

    private String name;

    @ToString.Exclude
    @ManyToMany(mappedBy = "roles",fetch = FetchType.LAZY)
    private List<User> users;
}
