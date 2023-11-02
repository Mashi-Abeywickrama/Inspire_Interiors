package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Product;
import inspireinteriors.dev.model.Variation;
import inspireinteriors.dev.repository.ProductImgRepository;
import inspireinteriors.dev.repository.ProductRepository;
import inspireinteriors.dev.repository.ReviewRepository;
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

    @Autowired
    private ReviewRepository reviewRepository;
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

    //get product with specific vendor id
    public List<Product> getProductsByVendorId(int vendor_id) {
        return productRepository.findProductsByVendor_id(vendor_id);
    }

    public List<Variation> getVariationsByProductId(int product_id) {
        return variationRepository.findBYProductId(product_id);
    }

    public Variation getVariationById(int variation_id) {
        return variationRepository.findById((long) variation_id).orElse(null);
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
    public boolean updateVariation(int variation_id, String material, String color, int quantity) {
        Variation variation = variationRepository.findById((long) variation_id).orElse(null);

        if (variation == null) {
            return false;
        }

        variation.setMaterial(material);
        variation.setColor(color);
        variation.setQuantity(quantity);

        variationRepository.save(variation);

        return true;
    }

    public List<String> getDistinctTypes() {
        return productRepository.findDistinctTypes();
    }


    public void updateProfilePic(Product product) {
        productRepository.save(product);
    }

    public Variation getVariationById(Integer variationId) {
        return variationRepository.findById(Long.valueOf(variationId)).orElse(null);
    }

    public void updateVariationImage(Variation variation) {
        variationRepository.save(variation);
    }


    public Object getPopularItems() {
        return reviewRepository.getPopularItems();
    }

    public Object getAllPopularItems() {
        return reviewRepository.getAllPopularItems();
    }

    //get product type and count
    public List<Object> getProductsTypeByVendor_id(int vendor_id) {
        return productRepository.findProductsTypeByVendor_id(vendor_id);
    }

}
