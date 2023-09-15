package inspireinteriors.dev.model.DesignerModel;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "PromotionRequests")
@Entity
public class PromotionRequests {
    //Attributes
    @Id
    @GeneratedValue
    private int promotionRequestID;
    private int designerID;
    private int vendorID;

    private int productID;
    private int status;
    private String Overview;
    private String Details;
    private String RangeCommitions;
    private String Negotiation;

    //Constructors

    public PromotionRequests(int promotionRequestID, int designerID, int vendorID, int status, String overview, String details, String rangeCommitions, String negotiation) {
        this.promotionRequestID = promotionRequestID;
        this.designerID = designerID;
        this.vendorID = vendorID;
        this.productID = productID;
        this.status = status;
        Overview = overview;
        Details = details;
        RangeCommitions = rangeCommitions;
        Negotiation = negotiation;
    }

    public PromotionRequests() {

    }

    //Getters and Setters

    public int getPromotionRequestID() {
        return promotionRequestID;
    }

    public void setPromotionRequestID(int promotionRequestID) {
        this.promotionRequestID = promotionRequestID;
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

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getOverview() {
        return Overview;
    }

    public void setOverview(String overview) {
        Overview = overview;
    }

    public String getDetails() {
        return Details;
    }

    public void setDetails(String details) {
        Details = details;
    }

    public String getRangeCommitions() {
        return RangeCommitions;
    }

    public void setRangeCommitions(String rangeCommitions) {
        RangeCommitions = rangeCommitions;
    }

    public String getNegotiation() {
        return Negotiation;
    }

    public void setNegotiation(String negotiation) {
        Negotiation = negotiation;
    }

    //toString

    @Override
    public String toString() {
        return "PromotionRequests{" +
                "promotionRequestID=" + promotionRequestID +
                ", designerID=" + designerID +
                ", vendorID=" + vendorID +
                ", productID=" + productID +
                ", status=" + status +
                ", Overview='" + Overview + '\'' +
                ", Details='" + Details + '\'' +
                ", RangeCommitions='" + RangeCommitions + '\'' +
                ", Negotiation='" + Negotiation + '\'' +
                '}';
    }
}
