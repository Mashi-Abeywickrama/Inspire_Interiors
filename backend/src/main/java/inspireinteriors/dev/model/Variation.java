package inspireinteriors.dev.model;


import jakarta.persistence.*;

@Table(name = "variations")
@Entity
public class Variation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use GenerationType.IDENTITY for identity columns
    @Column(name = "variation_id")
    private int variation_id;

    @Column(name = "color")
    private String color;

    @Column(name = "material")
    private String material;

    @Column(name = "quantity")
    private int quantity;

//    @Column(name = "product_id")
//    private int product_id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    public Variation(Product product) {
        this.product = product;
    }

    public Variation() {
    }

    public Variation( String color, String material, int quantity, Product product) {
        this.color = color;
        this.material = material;
        this.quantity = quantity;
        this.product = product;
    }



    public Variation(int variation_id, String color, String material, int product_id) {

        this.variation_id = variation_id;
        this.color = color;
        this.material = material;
        this.quantity = quantity;

    }

    public Variation(String color, String material, int quantity, Integer productId) {
        this.color = color;
        this.material = material;
        this.quantity = quantity;
        this.product = new Product(productId);
    }

    public int getVariation_id() {
        return variation_id;
    }

    public void setVariation_id(int variation_id) {
        this.variation_id = variation_id;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMaterial() {
        return material;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity=quantity;
    }

    public void setMaterial(String material) {
        this.material = material;
    }






}