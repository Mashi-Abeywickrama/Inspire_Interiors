package inspireinteriors.dev.model;

import jakarta.persistence.*;

@Table(name = "cart")
@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cartId")
    private int cartId;

    @Column(name = "productId")
    private int productId;

    @Column(name = "userId")
    private int userId;

    @Column(name = "quantity")
    private int quantity;


    @Column(name = "totalPrice")
    private double totalPrice;


//Constructors
    public Cart() {
    }

    public Cart(int cartId, int productId, int userId, int quantity, double totalPrice) {
        this.cartId = cartId;
        this.productId = productId;
        this.userId = userId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

    public Cart(int productId, int userId, int quantity, double totalPrice) {
        this.productId = productId;
        this.userId = userId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

    public Cart(int productId, int userId, int quantity) {
        this.productId = productId;
        this.userId = userId;
        this.quantity = quantity;
    }

    public Cart(int productId, int userId) {
        this.productId = productId;
        this.userId = userId;
    }

    public Cart(int productId) {
        this.productId = productId;
    }

    public Cart(int productId, int userId, double totalPrice) {
        this.productId = productId;
        this.userId = userId;
        this.totalPrice = totalPrice;
    }

    public Cart(int productId, int userId, int quantity, double totalPrice, int cartId) {
        this.productId = productId;
        this.userId = userId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.cartId = cartId;
    }

    public Cart(int productId, int userId, int quantity, int cartId) {
        this.productId = productId;
        this.userId = userId;
        this.quantity = quantity;
        this.cartId = cartId;
    }

// getters and setters

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }


    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "cartId=" + cartId +
                ", productId=" + productId +
                ", userId=" + userId +
                ", quantity=" + quantity +
                ", totalPrice=" + totalPrice +
                '}';
    }



}
