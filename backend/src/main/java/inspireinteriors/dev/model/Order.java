package inspireinteriors.dev.model;

import jakarta.persistence.*;

@Table(name = "orders")
@Entity
public class Order{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use GenerationType.IDENTITY for identity columns
    @Column(name = "orderid")
    private int orderid;

    @Column(name = "ref_no")
    private int ref_no;

    @Column(name = "product")
    private String product;

    @Column(name = "Design")
    private String Design;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "customer")
    private String customer;

    @Column(name = "vendor")
    private String vendor;

    @Column(name = "designer")
    private String designer;

    @Column(name = "price")
    private double price;

    @Column(name = "commission")
    private double commission;

    @Column(name = "status")
    private String status;

    @Column(name = "date")
    private String date;

// constructor


    public Order(int orderid, int ref_no, String product, String design, int quantity, String customer, String vendor, String designer, double price, double commission, String status, String date) {
        this.orderid = orderid;
        this.ref_no = ref_no;
        this.product = product;
        Design = design;
        this.quantity = quantity;
        this.customer = customer;
        this.vendor = vendor;
        this.designer = designer;
        this.price = price;
        this.commission = commission;
        this.status = status;
        this.date = date;
    }

    public Order() {

    }

    //getters and setters

    public int getOrderid() {
        return orderid;
    }

    public void setOrderid(int orderid) {
        this.orderid = orderid;
    }

    public int getRef_no() {
        return ref_no;
    }

    public void setRef_no(int ref_no) {
        this.ref_no = ref_no;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getDesign() {
        return Design;
    }

    public void setDesign(String design) {
        Design = design;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public String getDesigner() {
        return designer;
    }

    public void setDesigner(String designer) {
        this.designer = designer;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getCommission() {
        return commission;
    }

    public void setCommission(double commission) {
        this.commission = commission;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
