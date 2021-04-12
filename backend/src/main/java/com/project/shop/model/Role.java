package com.project.shop.model;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "roles")
@Data
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @ToString.Exclude
    @ManyToMany(mappedBy = "roles",fetch = FetchType.LAZY)
    private List<User> users;

}
