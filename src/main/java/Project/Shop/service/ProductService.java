package Project.Shop.service;

import Project.Shop.model.Product;
import Project.Shop.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductService {

    @Value("${upload.path}")
    private String uploadPath;

    public final ProductRepository productRepository;

    public List<Product> getAllProduct(){
        return productRepository.findAll();
    }

    public void addProduct(Product product, String price)  {
            product.setPrice(new BigDecimal(price));
            productRepository.save(product);
        }
    }
//    public void addProduct(Product product, MultipartFile file, String price) throws IOException {
//        if (file != null && !Objects.requireNonNull(file.getOriginalFilename()).isEmpty()) {
//            File uploadDirectory = new File(uploadPath);
//            if (!uploadDirectory.exists()) {
//                uploadDirectory.mkdir();
//            }
//            String uuidFile = UUID.randomUUID().toString();
//            String resultFilename = uuidFile + "." + file.getOriginalFilename();
//
//            file.transferTo(new File(uploadPath + "/" + resultFilename));
//
//            product.setFilename(resultFilename);
//            product.setPrice(new BigDecimal(price));
//            productRepository.save(product);
//        }
//    }


//}
