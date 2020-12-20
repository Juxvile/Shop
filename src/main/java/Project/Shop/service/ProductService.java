package Project.Shop.service;

import Project.Shop.model.Product;
import Project.Shop.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    public final ProductRepository productRepository;

    public List<Product> getAllProduct(){
        return productRepository.findAll();
    }

    public void saveProduct(Product product, String name, String description, Integer count) throws IOException {
        productRepository.save(product);
    }

}
