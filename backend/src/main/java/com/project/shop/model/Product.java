package com.project.shop.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String description;

    private Integer count;

    private String filename;

    private BigDecimal price;

    private String genre;

    private String trailer;

    private String platform;

    private String developer;

    private String releaseDate;

    private String description2;

    private String sysReq;

    private String screenshot1;

    private String screenshot2;

    private String screenshot3;

}
