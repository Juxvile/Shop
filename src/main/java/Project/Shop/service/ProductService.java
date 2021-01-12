package Project.Shop.service;

import Project.Shop.model.Product;
import Project.Shop.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    @Value("${upload.path}")
    private String uploadPath;

    public final ProductRepository productRepository;

    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }
}
