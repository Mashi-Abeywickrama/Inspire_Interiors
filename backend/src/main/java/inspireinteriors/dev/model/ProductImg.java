package inspireinteriors.dev.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@IdClass(ProductImg.ProductImgId.class) // Specify the composite key class
@Table(name = "product_imgs")
public class ProductImg {

    @Id
    @Column(name = "product_id")
    private int productId;

    @Id
    @Column(name = "product_img")
    private String productImg;

    public ProductImg() {
    }

    public ProductImg(int productId, String productImg) {
        this.productId = productId;
        this.productImg = productImg;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductImg() {
        return productImg;
    }

    public void setProductImg(String productImg) {
        this.productImg = productImg;
    }

    // Inner class for composite key
    public static class ProductImgId implements Serializable {

        private int productId;
        private String productImg;

        public ProductImgId() {
        }

        public ProductImgId(int productId, String productImg) {
            this.productId = productId;
            this.productImg = productImg;
        }

        public int getProductId() {
            return productId;
        }

        public void setProductId(int productId) {
            this.productId = productId;
        }

        public String getProductImg() {
            return productImg;
        }

//        public void setProductImg(String productImg) {
//            this.productImg = productImg;
//        }

        // Override hashCode and equals methods
    }

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

//    public Product getProduct_id() {
//        return product_id;
//    }
//
//    public void setProduct_id(Product product_id) {
//        this.product_id = product_id;
//    }
}
