package com.project.Shop.service;

import com.project.Shop.model.Product;
import com.project.Shop.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    public final ProductRepository productRepository;

    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }
}
