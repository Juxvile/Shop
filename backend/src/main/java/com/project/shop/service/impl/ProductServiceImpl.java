package com.project.shop.service.impl;

import com.project.shop.config.NoRequiredFieldException;
import com.project.shop.config.NotFoundException;
import com.project.shop.model.Product;
import com.project.shop.repository.ProductRepository;
import com.project.shop.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public void add(Product product) {
        if (product.getName() == null && product.getPrice() == null) throw new NoRequiredFieldException();
        productRepository.save(product);
    }

    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> generateException(
                String.format("IN findById - no product found by id {}",id),
                String.format("IN findById - product: {} found by id: {}", id)));
    }

    @Override
    public void delete(Long id) {
        productRepository.deleteById(id);
        log.info("IN delete - product with id: {} successfully deleted");
    }

    private NotFoundException generateException(String loggerMessage, String exceptionMessage) {
        log.warn(loggerMessage);
        return new NotFoundException(exceptionMessage);
    }
}
