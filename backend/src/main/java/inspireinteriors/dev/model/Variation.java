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

    @Column(name="variation_img")
    private String variationImg;

    @Column(name = "product_id")
    private int product_id;

//    @ManyToOne
//    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
//    private Product product;


    public Variation() {
    }

    public Variation(String color, String material, int quantity, String variationImg, int product_id) {
        this.color = color;
        this.material = material;
        this.quantity = quantity;
        this.variationImg = variationImg;
        this.product_id = product_id;
    }

    public Variation(int variation_id, String color, String material, int quantity, int product_id) {
        this.variation_id = variation_id;
        this.color = color;
        this.material = material;
        this.quantity = quantity;
        this.product_id = product_id;
    }

    public Variation(int variation_id, String color, String material, int quantity, String variationImg) {
        this.variation_id = variation_id;
        this.color = color;
        this.material = material;
        this.quantity = quantity;
        this.variationImg = variationImg;
    }

    public Variation(int variation_id, String color, String material, int quantity, String variationImg, int product_id) {
        this.variation_id = variation_id;
        this.color = color;
        this.material = material;
        this.quantity = quantity;
        this.variationImg = variationImg;
        this.product_id = product_id;
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

    public String getVariationImg() {return variationImg;}

    public void setVariationImg(String variationImg) {
        this.variationImg = variationImg;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }
}