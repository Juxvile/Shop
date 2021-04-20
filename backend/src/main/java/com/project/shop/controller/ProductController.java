package com.project.shop.controller;


import com.project.shop.dto.ProductDto;
import com.project.shop.model.Product;
import com.project.shop.repository.ProductRepository;
import com.project.shop.service.ProductService;
import com.project.shop.service.impl.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    public final ProductRepository productRepository;
    public final ProductService productService;
    public final ProductServiceImpl productServiceImpl;

    @Autowired
    public ProductController(ProductRepository productRepository, ProductService productService, ProductServiceImpl productServiceImpl) {
        this.productRepository = productRepository;
        this.productService = productService;
        this.productServiceImpl = productServiceImpl;
    }

    @GetMapping
    public List<Product> products() {
        return productService.getAll();
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<ProductDto> getUserById(@PathVariable(name = "id") Long id){
        Product product = productServiceImpl.findById(id);

        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        ProductDto result = ProductDto.fromProduct(product);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("/add")
    @ResponseBody
    public void newProduct(@RequestBody Product product) {
        productServiceImpl.add(product);
    }

}
