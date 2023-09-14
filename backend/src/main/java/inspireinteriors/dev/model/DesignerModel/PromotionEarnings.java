package inspireinteriors.dev.model.DesignerModel;


import jakarta.persistence.*;
import java.util.Date;

@Table(name = "PromotionEarnings")
@Entity

public class PromotionEarnings {
    //Attributes
    @Id
    @GeneratedValue
    private int promotionEarningsID;
    private int designerID;
    private int vendorID;
    private int productID;
    @Temporal(TemporalType.DATE)
    Date date;
    private String Price;
    private String Commission;
    private String Earnings;
    private int Status;

    //Constructors

    public PromotionEarnings(int promotionEarningsID, int designerID, int vendorID, int productID, Date date, String price, String commission, String earnings, int status) {
        this.promotionEarningsID = promotionEarningsID;
        this.designerID = designerID;
        this.vendorID = vendorID;
        this.productID = productID;
        this.date = date;
        Price = price;
        Commission = commission;
        Earnings = earnings;
        Status = status;
    }

    //Getters and Setters

    public int getPromotionEarningsID() {
        return promotionEarningsID;
    }

    public void setPromotionEarningsID(int promotionEarningsID) {
        this.promotionEarningsID = promotionEarningsID;
    }

    public int getDesignerID() {
        return designerID;
    }

    public void setDesignerID(int designerID) {
        this.designerID = designerID;
    }

    public int getVendorID() {
        return vendorID;
    }

    public void setVendorID(int vendorID) {
        this.vendorID = vendorID;
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getPrice() {
        return Price;
    }

    public void setPrice(String price) {
        Price = price;
    }

    public String getCommission() {
        return Commission;
    }

    public void setCommission(String commission) {
        Commission = commission;
    }

    public String getEarnings() {
        return Earnings;
    }

    public void setEarnings(String earnings) {
        Earnings = earnings;
    }

    public int getStatus() {
        return Status;
    }

    public void setStatus(int status) {
        Status = status;
    }

    //toString

    @Override
    public String toString() {
        return "PromotionEarnings{" +
                "promotionEarningsID=" + promotionEarningsID +
                ", designerID=" + designerID +
                ", vendorID=" + vendorID +
                ", productID=" + productID +
                ", date=" + date +
                ", Price='" + Price + '\'' +
                ", Commission='" + Commission + '\'' +
                ", Earnings='" + Earnings + '\'' +
                ", Status=" + Status +
                '}';
    }
}
