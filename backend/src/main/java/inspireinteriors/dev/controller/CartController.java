package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Cart;
import inspireinteriors.dev.model.Product;
import inspireinteriors.dev.service.CartService;
import inspireinteriors.dev.service.ProductService;
import org.json.JSONException;
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

    @PostMapping("/addtocart")
    public ResponseEntity<String> saveInCart(@RequestBody Cart cart) throws JSONException {
        System.out.println(cart);
        boolean cartSaved = cartService.saveInCart(cart);

        if (cartSaved) {
            JSONObject jsonResponse = new JSONObject();
            jsonResponse.put("message", "Cart Item Added Successfully!");

            return ResponseEntity.ok(jsonResponse.toString());
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Cart Not Added!");
        }
    }

    @DeleteMapping(value = "/remove_cart/{cart_id}")
    public ResponseEntity<String> deleteCartItem(@PathVariable Integer cart_id) {
        try {
            // Call the service method to delete the Cart item by its ID
            boolean deleted = cartService.deletecartById(cart_id);
            if (deleted) {
                return ResponseEntity.ok("Cart item deleted successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cart item  not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting cart item ");
        }
    }
}
