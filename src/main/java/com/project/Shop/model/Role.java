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


@Document(collection = "Roles")
@Data
public class Role {
    @Id
    @Field("_id")
    @JsonIgnore
    private String id;

    private String name;

    @DBRef
    private List<User> users;
}
