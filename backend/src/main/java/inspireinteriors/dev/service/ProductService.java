package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Product;
import inspireinteriors.dev.model.Variation;
import inspireinteriors.dev.repository.ProductImgRepository;
import inspireinteriors.dev.repository.ProductRepository;
import inspireinteriors.dev.repository.VariationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductImgRepository productImgRepository;

    @Autowired
    private VariationRepository variationRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Integer id) {
        return productRepository.findById(id).orElse(null);
    }

    //Create product
    public Product createProduct(Product product) {
        product.setProduct_status("Instock");
        return productRepository.save(product);
    }

    public Variation createvariation(Variation variation) {
        return variationRepository.save(variation);
    }

    public void saveProduct(Product product) {
        productRepository.save(product);
    }

    public Iterable<Product> getAllProductsByType(String type) {
        return productRepository.findAllByType(type);
    }

    public Iterable<Product> getAllProductsByRoomType(String roomType) {
        return productRepository.findAllByRoomType(roomType);
    }

    public List<String> getDistinctRoomTypes() {
        return productRepository.findDistinctRoomTypes();
    }

    public Iterable<Variation> getAllVariations() {
        return variationRepository.findAll();
    }


    public List<Variation> getByProductId(int product_id) {
        return variationRepository.findBYProductId(product_id);
    }

    //update variations
    public Variation updateVariation(Variation variation) {
        return variationRepository.save(variation);
    }
}
