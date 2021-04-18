package com.project.shop.service;


import com.project.shop.model.Product;

import java.util.List;

public interface ProductService {

    void add (Product Product);

    List<Product> getAll();

    Product findById (Long id);

    void delete (Long id);
}
