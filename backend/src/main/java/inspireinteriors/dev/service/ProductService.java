package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Product;
import inspireinteriors.dev.repository.ProductImgRepository;
import inspireinteriors.dev.repository.ProductRepository;
import inspireinteriors.dev.repository.VariationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductImgRepository productImgRepository;

    @Autowired
    private VariationRepository variationRepository;

    public Iterable<Product> getAllProducts() {
        return productRepository.findAllWithoutEagerLoading();
    }

    public Product getProductById(Integer id) {
        return productRepository.findById(id).orElse(null);
    }

    //Create product
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }




    public void saveProduct(Product product) {
        productRepository.save(product);
    }
}
