package Project.Shop.controller;

import Project.Shop.config.NotFoundException;
import Project.Shop.model.Product;
import Project.Shop.repository.ProductRepository;
import Project.Shop.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.ParseException;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(value = "/product")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ProductController {
    public final ProductRepository productRepository;
    public final ProductService productService;
    @Value("${upload.path}")
    private String uploadPath;

    @GetMapping
    public List<Product> products() {
        return productService.getAllProduct();
    }

    @GetMapping("{id}")
    public List<Product> getOneProduct(@PathVariable long id) {
        return Collections.singletonList(products().stream()
                .filter(product -> product.getId().equals(id))
                .findFirst()
                .orElseThrow(NotFoundException::new));
    }

//    @PostMapping("/add")
//    public void newProduct(@Valid Product product,
//                           @RequestParam MultipartFile file,
//                           @RequestParam String price
//    ) throws IOException {
//        productService.addProduct(product, file, price);
//    }
    @PostMapping("/add")
    @ResponseBody
    public void newProduct(@RequestBody Product product) {
        productRepository.save(product);
    }

}
