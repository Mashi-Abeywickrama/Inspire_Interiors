package inspireinteriors.dev.model;

import jakarta.persistence.*;

@Table(name = "products")
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use GenerationType.IDENTITY for identity columns
    @Column(name = "product_id")
    private int product_id;

    @Column(name = "type")
    private String type;

    @Column(name = "product_name")
    private String product_name;

    @Column(name = "entry_price")
    private int entry_price;

    @Column(name = "vendor_id")
    private int vendor_id;

    public Product() {
    }

    public Product(int product_id, String type, String product_name, int entry_price, int vendor_id) {
        this.product_id = product_id;
        this.type = type;
        this.product_name = product_name;
        this.entry_price = entry_price;
        this.vendor_id = vendor_id;
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

    public void setType(String type) {
        this.type = type;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public int getEntry_price() {
        return entry_price;
    }

    public void setEntry_price(int entry_price) {
        this.entry_price = entry_price;
    }

    public int getVendor_id() {
        return vendor_id;
    }

    public void setVendor_id(int vendor_id) {
        this.vendor_id = vendor_id;
    }


}
