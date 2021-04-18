package com.project.shop.service;


import com.project.shop.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {

    void add (Product Product);

    List<Product> getAll();

    Product findById (Long id);

    void delete (Long id);
}
