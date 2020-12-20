package Project.Shop.controller;

import Project.Shop.model.Product;
import Project.Shop.repository.ProductRepository;
import Project.Shop.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ProductController {
    public final ProductRepository productRepository;
    public final ProductService productService;

    @GetMapping("/product")
    public List <Product> products(){
        return productService.getAllProduct();
    }
}
