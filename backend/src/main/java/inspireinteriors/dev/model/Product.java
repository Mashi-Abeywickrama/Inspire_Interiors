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

    @Column(name = "shipping_fee")
    private int shipping_fee;

    @Column(name="product_description")
    private String product_description;

    @Column(name="discount")
    private int discount;

    @Column(name="product_status")
    private String product_status;

//    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
//    private List<Variation> variations = new ArrayList<>();

    public Product() {
    }


    public Product(int product_id, String type, String roomType, String product_name, String entry_price, String productImg, int vendor_id, int shipping_fee, String product_description, int discount, String product_status) {
        this.product_id = product_id;
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.productImg = productImg;
        this.vendor_id = vendor_id;
        this.shipping_fee = shipping_fee;
        this.product_description = product_description;
        this.discount = discount;
        this.product_status = product_status;
    }

    public Product(int product_id, String type, String product_name, String entry_price, int vendor_id, String product_description, int discount) {
        this.product_id = product_id;
        this.type = type;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.vendor_id = vendor_id;
        this.product_description = product_description;
        this.discount = discount;
    }

    public Product(String type, String roomType, String product_name, String entry_price, String productImg, int vendor_id) {
        this.type = type;
        this.roomType = roomType;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.productImg = productImg;
        this.vendor_id = vendor_id;
    }

    public Product(Integer productId) {
        this.product_id = productId;
    }


    public long getProduct_id() {
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

    public int getShipping_fee() {return shipping_fee;}

    public void setShipping_fee(int shipping_fee) {
        this.shipping_fee = shipping_fee;
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

    public void setProduct_description(String product_description) {
        this.product_description = product_description;
    }

    public String getProduct_description() {return product_description;}

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

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public int getDiscount() {return discount;}


    public String getProduct_status() {return product_status;}

    public void setProduct_status(String product_status) {
        this.product_status = product_status;
    }

}
