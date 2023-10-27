package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Cart;
import inspireinteriors.dev.model.Product;
import inspireinteriors.dev.repository.CartRepository;
import inspireinteriors.dev.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;


@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<Cart> getCart(int userId) {
        return this.cartRepository.findCartByUserId(userId);
    }

    public List<Product> getProductData(int productId) {
        return this.productRepository.getProductById(productId);
    }
}
