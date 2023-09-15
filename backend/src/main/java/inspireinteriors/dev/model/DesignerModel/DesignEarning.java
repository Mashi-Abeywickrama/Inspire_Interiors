package inspireinteriors.dev.model.DesignerModel;


import jakarta.persistence.*;
import java.util.Date;

@Table(name = "DesignEarning")
@Entity

public class DesignEarning {
    //Attributes
    @Id
    @GeneratedValue
    private int DesignEarningID;
    private int DesignID;
    private int CustomerID;
    private int DesignerID;
    private String price;
    private String Earning;
    @Temporal(TemporalType.DATE)
    Date date;
    private int Status;

    //Constructors


    public DesignEarning(int designEarningID, int designID, int customerID, int designerID, String price, String earning, Date date, int status) {
        DesignEarningID = designEarningID;
        DesignID = designID;
        CustomerID = customerID;
        DesignerID = designerID;
        this.price = price;
        Earning = earning;
        this.date = date;
        Status = status;
    }

    public DesignEarning() {

    }

    //Getters and Setters

    public int getDesignEarningID() {
        return DesignEarningID;
    }

    public void setDesignEarningID(int designEarningID) {
        DesignEarningID = designEarningID;
    }

    public int getDesignID() {
        return DesignID;
    }

    public void setDesignID(int designID) {
        DesignID = designID;
    }

    public int getCustomerID() {
        return CustomerID;
    }

    public void setCustomerID(int customerID) {
        CustomerID = customerID;
    }

    public int getDesignerID() {
        return DesignerID;
    }

    public void setDesignerID(int designerID) {
        DesignerID = designerID;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getEarning() {
        return Earning;
    }

    public void setEarning(String earning) {
        Earning = earning;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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
        return "DesignEarning{" +
                "DesignEarningID=" + DesignEarningID +
                ", DesignID=" + DesignID +
                ", CustomerID=" + CustomerID +
                ", DesignerID=" + DesignerID +
                ", price='" + price + '\'' +
                ", Earning='" + Earning + '\'' +
                ", date=" + date +
                ", Status=" + Status +
                '}';
    }
}
