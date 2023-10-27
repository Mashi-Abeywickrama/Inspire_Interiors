package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Cart;
import inspireinteriors.dev.model.Product;
import inspireinteriors.dev.service.CartService;
import inspireinteriors.dev.service.ProductService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private ProductService productService;

    @GetMapping("/getcart/{userId}")
    public List<Cart> getCart(@PathVariable("userId") int userId) {
        return this.cartService.getCart(userId);
    }

    @GetMapping("/getproductdata/{productId}")
    public List<Product> getProductData(@PathVariable("productId") int productId) {
        return this.cartService.getProductData(productId);
    }

}
