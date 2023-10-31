package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Cart;
import inspireinteriors.dev.model.Product;
import inspireinteriors.dev.repository.CartRepository;
import inspireinteriors.dev.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public boolean saveInCart(Cart cart) {
        try {
            this.cartRepository.save(cart);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean deletecartById(Integer cartId) {
        Cart existingAddress = cartRepository.findBycartId(cartId);
        if (existingAddress != null) {
            // If it exists, delete it
            cartRepository.delete(existingAddress);
            return true;
        }
        return false;
    }

    public boolean updateCartQuantity(Cart cart) {
        try {

            cartRepository.save(cart);
            return true;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public Cart getCartById(int cartId) {
        return this.cartRepository.findBycartId(cartId);
    }
}
