package inspireinteriors.dev.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Table(name = "products")
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use GenerationType.IDENTITY for identity columns
    @Column(name = "product_id")
    private int product_id;

    @Column(name = "type")
    private String type;

    @Column (name = "room_type")
    private String roomType;

    @Column(name = "product_name")
    private String product_name;

    @Column(name = "entry_price")
    private String entry_price;

    @Column(name = "product_img")
    private String productImg;

    @Column(name = "vendor_id")
    private int vendor_id;
    public Product() {
    }

    public Product(int product_id, String type, String roomType, String product_name, String entry_price, String productImg, int vendor_id) {
        this.product_id = product_id;
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.productImg = productImg;
        this.vendor_id = vendor_id;
    }

    public Product(String type, String roomType, String product_name, String entry_price, String productImg, int vendor_id) {
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.productImg = productImg;
        this.vendor_id = vendor_id;
    }

    public Product(String type, String roomType, String product_name, String entry_price, String productImg) {
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.productImg = productImg;
    }

    public Product(String type, String roomType, String product_name, String entry_price) {
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
    }

    public Product(String type, String roomType, String product_name) {
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
    }

    public Product(String type, String roomType) {
        this.type = type;
        this.roomType = roomType;
    }

    public Product(String type) {
        this.type = type;
    }

    public Product(int product_id) {
        this.product_id = product_id;
    }

    public Product(int product_id, String type) {
        this.product_id = product_id;
        this.type = type;
    }

    public Product(int product_id, String type, String roomType) {
        this.product_id = product_id;
        this.type = type;
        this.roomType = roomType;
    }

    public Product(int product_id, String type, String roomType, String product_name) {
        this.product_id = product_id;
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
    }

    public Product(int product_id, String type, String roomType, String product_name, String entry_price) {
        this.product_id = product_id;
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
    }

    public Product(int product_id, String type, String roomType, String product_name, String entry_price, String productImg) {
        this.product_id = product_id;
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.productImg = productImg;
    }

    public Product(int product_id, String type, String roomType, String product_name, String entry_price, String productImg, int vendor_id, List<Variation> variations) {
        this.product_id = product_id;
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.productImg = productImg;
        this.vendor_id = vendor_id;
        this.variations = variations;
    }

    public Product(String type, String roomType, String product_name, String entry_price, String productImg, int vendor_id, List<Variation> variations) {
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.productImg = productImg;
        this.vendor_id = vendor_id;
        this.variations = variations;
    }

    public Product(String type, String roomType, String product_name, String entry_price, String productImg, List<Variation> variations) {
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.productImg = productImg;
        this.variations = variations;
    }

    public Product(String type, String roomType, String product_name, String entry_price, List<Variation> variations) {
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.variations = variations;
    }

    public Product(String type, String roomType, String product_name, List<Variation> variations) {
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.variations = variations;
    }

    public Product(String type, String roomType, List<Variation> variations) {
        this.type = type;
        this.roomType = roomType;
        this.variations = variations;
    }

    public Product(String type, List<Variation> variations) {
        this.type = type;
        this.variations = variations;
    }

    public Product(int product_id, String type, String roomType, List<Variation> variations) {
        this.product_id = product_id;
        this.type = type;
        this.roomType = roomType;
        this.variations = variations;
    }

    public Product(int product_id, String type, String roomType, String product_name, List<Variation> variations) {
        this.product_id = product_id;
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.variations = variations;
    }

    public Product(int product_id, String type, String roomType, String product_name, String entry_price, List<Variation> variations) {
        this.product_id = product_id;
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.variations = variations;
    }

    public Product(int product_id, String type, String roomType, String product_name, String entry_price, String productImg, List<Variation> variations) {
        this.product_id = product_id;
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.productImg = productImg;
        this.variations = variations;
    }

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Variation> variations = new ArrayList<>();

    public Product(Integer productId) {
        this.product_id = productId;
    }


    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public String getType() {
        return type;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }



    public void setType(String type) {
        this.type = type;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public String getEntry_price() {
        return entry_price;
    }

    public void setEntry_price(String entry_price) {
        this.entry_price = entry_price;
    }

    public int getVendor_id() {
        return vendor_id;
    }

    public void setVendor_id(int vendor_id) {
        this.vendor_id = vendor_id;
    }


    public void setProductImg(String productImg) {
        this.productImg = productImg;
    }

    public String getProductImg() {
        return productImg;
    }






}
