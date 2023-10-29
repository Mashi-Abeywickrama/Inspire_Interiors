package inspireinteriors.dev.model;

import jakarta.persistence.*;

@Table(name="customized_order")
@Entity
public class CustomizedOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="customizedorderid")
    private int customizedorderid;

    @Column(name="productdescription", columnDefinition = "VARCHAR(200)")
    private String productdescription;

    @Column(name="productspecification", columnDefinition = "VARCHAR(200)")
    private String productspecification;

    @Column(name="budget")
    private String budget;

    @Column(name="additionalnotes", columnDefinition = "VARCHAR(200)")
    private String additionalnotes;

    @Column(name="productimage")
    private String productimage;

    @Column(name="customerid")
    private int customerid;

    @Column(name="vendorid")
    private int vendorid;

    @Column(name="status")
    private String status;

    @Column(name="productname")
    private String productname;

    public CustomizedOrder() {
    }

    public CustomizedOrder (int customizedorderid, String productdescription, String productspecification, String budget, String additionalnotes, String productimage, int customerid, int vendorid, String status, String productname) {
        this.customizedorderid = customizedorderid;
        this.productdescription = productdescription;
        this.productspecification = productspecification;
        this.budget = budget;
        this.additionalnotes = additionalnotes;
        this.productimage = productimage;
        this.customerid = customerid;
        this.vendorid = vendorid;
        this.status = status;
        this.productname = productname;
    }
    public CustomizedOrder(int customizedorderid, String productdescription, String productspecification, String budget, String additionalnotes, String productimage, int customerid, int vendorid, String status) {
        this.customizedorderid = customizedorderid;
        this.productdescription = productdescription;
        this.productspecification = productspecification;
        this.budget = budget;
        this.additionalnotes = additionalnotes;
        this.productimage = productimage;
        this.customerid = customerid;
        this.vendorid = vendorid;
        this.status = status;
    }

    public CustomizedOrder(String productdescription, String productspecification, String budget, String additionalnotes, String productimage, int customerid, int vendorid, String status) {
        this.productdescription = productdescription;
        this.productspecification = productspecification;
        this.budget = budget;
        this.additionalnotes = additionalnotes;
        this.productimage = productimage;
        this.customerid = customerid;
        this.vendorid = vendorid;
        this.status = status;
    }

    public CustomizedOrder(String productdescription, String productspecification, String budget, String additionalnotes, String productimage, int customerid, int vendorid) {
        this.productdescription = productdescription;
        this.productspecification = productspecification;
        this.budget = budget;
        this.additionalnotes = additionalnotes;
        this.productimage = productimage;
        this.customerid = customerid;
        this.vendorid = vendorid;
    }

    public CustomizedOrder(String productdescription, String productspecification, String budget, String additionalnotes, String productimage, int customerid) {
        this.productdescription = productdescription;
        this.productspecification = productspecification;
        this.budget = budget;
        this.additionalnotes = additionalnotes;
        this.productimage = productimage;
        this.customerid = customerid;
    }

    public CustomizedOrder(String productdescription, String productspecification, String budget, String additionalnotes, String productimage) {
        this.productdescription = productdescription;
        this.productspecification = productspecification;
        this.budget = budget;
        this.additionalnotes = additionalnotes;
        this.productimage = productimage;
    }

    public CustomizedOrder(String productdescription, String productspecification, String budget, String additionalnotes) {
        this.productdescription = productdescription;
        this.productspecification = productspecification;
        this.budget = budget;
        this.additionalnotes = additionalnotes;
    }

    public CustomizedOrder(String productdescription, String productspecification, String budget) {
        this.productdescription = productdescription;
        this.productspecification = productspecification;
        this.budget = budget;
    }

    public CustomizedOrder(String productdescription, String productspecification) {
        this.productdescription = productdescription;
        this.productspecification = productspecification;
    }

    public CustomizedOrder(String productdescription) {
        this.productdescription = productdescription;
    }

    public CustomizedOrder(int customizedorderid) {
        this.customizedorderid = customizedorderid;
    }

    public CustomizedOrder(int customerid,String productdescription, String productspecification, String budget, String additionalnotes, String productimage) {
        this.productdescription = productdescription;
        this.productspecification = productspecification;
        this.budget = budget;
        this.additionalnotes = additionalnotes;
        this.productimage = productimage;
        this.customerid = customerid;
    }

    public int getCustomizedorderid() {
        return customizedorderid;
    }

    public void setCustomizedorderid(int customizedorderid) {
        this.customizedorderid = customizedorderid;
    }

    public String getProductdescription() {
        return productdescription;
    }

    public void setProductdescription(String productdescription) {
        this.productdescription = productdescription;
    }

    public String getProductspecification() {
        return productspecification;
    }

    public void setProductspecification(String productspecification) {
        this.productspecification = productspecification;
    }

    public String getBudget() {
        return budget;
    }

    public void setBudget(String budget) {
        this.budget = budget;
    }

    public String getAdditionalnotes() {
        return additionalnotes;
    }

    public void setAdditionalnotes(String additionalnotes) {
        this.additionalnotes = additionalnotes;
    }

    public String getProductimage() {
        return productimage;
    }

    public void setProductimage(String productimage) {
        this.productimage = productimage;
    }

    public int getCustomerid() {
        return customerid;
    }

    public void setCustomerid(int customerid) {
        this.customerid = customerid;
    }

    public int getVendorid() {
        return vendorid;
    }

    public void setVendorid(int vendorid) {
        this.vendorid = vendorid;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getProductname() {
        return productname;
    }

    public void setProductname(String productname) {
        this.productname = productname;
    }
}