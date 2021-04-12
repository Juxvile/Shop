package com.project.shop.controller;


import com.project.shop.config.NotFoundException;
import com.project.shop.model.Product;
import com.project.shop.repository.ProductRepository;
import com.project.shop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;


@RestController
@RequestMapping(value = "/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    public final ProductRepository productRepository;
    public final ProductService productService;

    @Autowired
    public ProductController(ProductRepository productRepository, ProductService productService) {
        this.productRepository = productRepository;
        this.productService = productService;
    }

    @GetMapping
    public List<Product> products() {
        return productService.getAllProduct();
    }

    @GetMapping("{id}")
    public List<Product> getOneProduct(@PathVariable String id) {
        return Collections.singletonList(products().stream()
                .filter(product -> product.getId().equals(id))
                .findFirst()
                .orElseThrow(NotFoundException::new));
    }

    @PostMapping("/add")
    @ResponseBody
    public void newProduct(@RequestBody Product product) {
        productRepository.save(product);
    }

}
