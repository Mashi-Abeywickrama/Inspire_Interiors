package inspireinteriors.dev.model;

import jakarta.persistence.*;

@Table(name = "armodels")
@Entity
public class ARModels {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use GenerationType.IDENTITY for identity columns
    @Column(name = "model_id")
    private int modelId;

    @Column(name = "product_id")
    private String productId;

    @Column(name = "model_file")
    private String modelFile;

    ARModels() {
    }

    public ARModels(int modelId, String productId, String modelFile) {
        this.modelId = modelId;
        this.productId = productId;
        this.modelFile = modelFile;
    }

    public int getModelId() {
        return modelId;
    }

    public void setModelId(int modelId) {
        this.modelId = modelId;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getModelFile() {
        return modelFile;
    }

    public void setModelFile(String modelFile) {
        this.modelFile = modelFile;
    }


}
