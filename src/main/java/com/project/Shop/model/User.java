package com.project.Shop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.persistence.*;
import java.util.List;


@Data
@Document(collection = "Users")
public class User {
    @Id
    @Field("_id")
    @JsonIgnore
    private String id;

    private String username;

    private String password;

    private String email;

    @Enumerated(EnumType.STRING)
    private Status status;

    @DBRef
    private List<Role> roles;

}
