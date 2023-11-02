package inspireinteriors.dev.model;

import jakarta.persistence.*;

@Table(name = "offersale")
@Entity
public class OfferSale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use GenerationType.IDENTITY for identity columns
    @Column(name = "offersaleid")
    private int offersaleid;

    @Column(name = "designerid")
    private int designerid;

    @Column(name = "vendorid")
    private int vendorid;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "totalprice")
    private int totalprice;

    @Column(name = "commission")
    private int commission;

    @Column(name = "profit")
    private int profit;

    @Column(name = "productid")
    private int productid;

    @Column(name = "date")
    private String date;

    public OfferSale() {
    }

    public OfferSale(int offersaleid, int designerid, int vendorid, int quantity, int totalprice, int commission, int profit, int productid, String date) {
        this.offersaleid = offersaleid;
        this.designerid = designerid;
        this.vendorid = vendorid;
        this.quantity = quantity;
        this.totalprice = totalprice;
        this.commission = commission;
        this.profit = profit;
        this.productid = productid;
        this.date = date;
    }

    public int getProductid() {
        return productid;
    }

    public void setProductid(int productid) {
        this.productid = productid;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public OfferSale(int offersaleid, int designerid, int vendorid, int quantity, int totalprice, int commission, int profit) {
        this.offersaleid = offersaleid;
        this.designerid = designerid;
        this.vendorid = vendorid;
        this.quantity = quantity;
        this.totalprice = totalprice;
        this.commission = commission;
        this.profit = profit;
    }

    public int getOffersaleid() {
        return offersaleid;
    }

    public void setOffersaleid(int offersaleid) {
        this.offersaleid = offersaleid;
    }

    public int getDesignerid() {
        return designerid;
    }

    public void setDesignerid(int designerid) {
        this.designerid = designerid;
    }

    public int getVendorid() {
        return vendorid;
    }

    public void setVendorid(int vendorid) {
        this.vendorid = vendorid;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getTotalprice() {
        return totalprice;
    }

    public void setTotalprice(int totalprice) {
        this.totalprice = totalprice;
    }

    public int getCommission() {
        return commission;
    }

    public void setCommission(int commission) {
        this.commission = commission;
    }

    public int getProfit() {
        return profit;
    }

    public void setProfit(int profit) {
        this.profit = profit;
    }



}
