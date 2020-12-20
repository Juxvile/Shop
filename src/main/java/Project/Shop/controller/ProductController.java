package Project.Shop.controller;

import Project.Shop.config.NotFoundException;
import Project.Shop.model.Product;
import Project.Shop.repository.ProductRepository;
import Project.Shop.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {
    public final ProductRepository productRepository;
    public final ProductService productService;

    @GetMapping
    public List <Product> products(){
        return productService.getAllProduct();
    }

    @GetMapping("{id}")
    public List <Product> getOneProduct(@PathVariable long id) {
        return Collections.singletonList(products().stream()
                .filter(product -> product.getId().equals(id))
                .findFirst()
                .orElseThrow(NotFoundException::new));
    }


    @PostMapping
    public void addProduct (@RequestParam String name,
                            @RequestParam String description,
                            @RequestParam Integer count,
                            @Valid Product product
    ) throws IOException {
        productService.saveProduct(product, name, description, count);
    }
}
