package inspireinteriors.dev.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "variations")
@Entity
public class Variation {

    @Id
    @Column(name = "variation_id")
    private int variation_id;

    @Column(name = "color")
    private String color;

    @Column(name = "material")
    private String material;

    @Column(name = "product_id")
    private int product_id;

    public Variation() {
    }

    public Variation(int variation_id, String color, String material, int product_id) {
        this.variation_id = variation_id;
        this.color = color;
        this.material = material;
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

    public void setMaterial(String material) {
        this.material = material;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }





}