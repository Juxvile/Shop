package com.project.shop.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.project.shop.model.Product;
import lombok.Data;

import java.math.BigDecimal;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductDto {
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

    public Product toProduct(){
        Product product = new Product();
        product.setId(id);
        product.setName(name);
        product.setDescription(description);
        product.setCount(count);
        product.setFilename(filename);
        product.setPrice(price);
        product.setGenre(genre);
        product.setTrailer(trailer);
        product.setPlatform(platform);
        product.setDeveloper(developer);
        product.setReleaseDate(releaseDate);
        product.setDescription2(description2);
        product.setSysReq(sysReq);
        product.setScreenshot1(screenshot1);
        product.setScreenshot2(screenshot2);
        product.setScreenshot3(screenshot3);
        return product;
    }

    public static ProductDto fromProduct (Product product){
        ProductDto productDto = new ProductDto();
        productDto.setId(product.getId());
        productDto.setName(product.getName());
        productDto.setDescription(product.getDescription());
        productDto.setCount(product.getCount());
        productDto.setFilename(product.getFilename());
        productDto.setPrice(product.getPrice());
        productDto.setGenre(product.getGenre());
        productDto.setTrailer(product.getTrailer());
        productDto.setPlatform(product.getPlatform());
        productDto.setDeveloper(product.getDeveloper());
        productDto.setReleaseDate(product.getReleaseDate());
        productDto.setDescription2(product.getDescription2());
        productDto.setSysReq(product.getSysReq());
        productDto.setScreenshot1(product.getScreenshot1());
        productDto.setScreenshot2(product.getScreenshot2());
        productDto.setScreenshot3(product.getScreenshot3());
        return productDto;
    }
}
