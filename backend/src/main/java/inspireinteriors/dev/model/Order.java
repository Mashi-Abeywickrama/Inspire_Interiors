package inspireinteriors.dev.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor

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

    @Column(name = "variation_id")
    private String variation_id;

    @Column(name = "shipping_address")
    private String shipping_address;

// constructor

    public Order(int ref_no, String product, String design, int quantity, String customer, String vendor, String designer, double price, double commission, String status, String date, String variation_id, String shipping_address) {
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
        this.variation_id = variation_id;
        this.shipping_address = shipping_address;
    }

    public Order(int ref_no, String product, String design, int quantity, String customer, String vendor, String designer, double price, double commission, String status, String date, String variation_id) {
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
        this.variation_id = variation_id;
    }

    public Order(int ref_no, String product, String design, int quantity, String customer, String vendor, String designer, double price, double commission, String status, String date) {
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

    public Order(int ref_no, String product, String design, int quantity, String customer, String vendor, String designer, double price, double commission, String status) {
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
    }

    public Order(int ref_no, String product, String design, int quantity, String customer, String vendor, String designer, double price, double commission) {
        this.ref_no = ref_no;
        this.product = product;
        Design = design;
        this.quantity = quantity;
        this.customer = customer;
        this.vendor = vendor;
        this.designer = designer;
        this.price = price;
        this.commission = commission;
    }

    public Order(int ref_no, String product, String design, int quantity, String customer, String vendor, String designer, double price) {
        this.ref_no = ref_no;
        this.product = product;
        Design = design;
        this.quantity = quantity;
        this.customer = customer;
        this.vendor = vendor;
        this.designer = designer;
        this.price = price;
    }

    public Order(int ref_no, String product, String design, int quantity, String customer, String vendor, String designer) {
        this.ref_no = ref_no;
        this.product = product;
        Design = design;
        this.quantity = quantity;
        this.customer = customer;
        this.vendor = vendor;
        this.designer = designer;
    }

    public Order(int ref_no, String product, String design, int quantity, String customer, String vendor) {
        this.ref_no = ref_no;
        this.product = product;
        Design = design;
        this.quantity = quantity;
        this.customer = customer;
        this.vendor = vendor;
    }

    public Order(int ref_no, String product, String design, int quantity, String customer) {
        this.ref_no = ref_no;
        this.product = product;
        Design = design;
        this.quantity = quantity;
        this.customer = customer;
    }

    public Order(int ref_no, String product, String design, int quantity) {
        this.ref_no = ref_no;
        this.product = product;
        Design = design;
        this.quantity = quantity;
    }

    public Order(int ref_no, String product, String design) {
        this.ref_no = ref_no;
        this.product = product;
        Design = design;
    }

    public Order(int ref_no, String product) {
        this.ref_no = ref_no;
        this.product = product;
    }

    public Order(int ref_no) {
        this.ref_no = ref_no;
    }

    public Order(String product) {
        this.product = product;
    }

    public Order(String product, String design) {
        this.product = product;
        Design = design;
    }

    public Order(String product, String design, int quantity) {
        this.product = product;
        Design = design;
        this.quantity = quantity;
    }

    public Order(String product, String design, int quantity, String customer) {
        this.product = product;
        Design = design;
        this.quantity = quantity;
        this.customer = customer;
    }

    public Order(String product, String design, int quantity, String customer, String vendor) {
        this.product = product;
        Design = design;
        this.quantity = quantity;
        this.customer = customer;
        this.vendor = vendor;
    }

    public Order( String customer,String product, int quantity, int price,String variation_id ,String status, String vendor,String shipping_address) {
        this.product = product;
        this.quantity = quantity;
        this.price = price;
        this.variation_id = variation_id;
        this.status = status;
        this.customer = customer;
        this.vendor = vendor;
        this.shipping_address = shipping_address;

    }

    public Order(String product, String design, int quantity, String customer, String vendor, String designer, double price) {
        this.product = product;
        Design = design;
        this.quantity = quantity;
        this.customer = customer;
        this.vendor = vendor;
        this.designer = designer;
        this.price = price;
    }

    public Order(String product, String design, int quantity, String customer, String vendor, String designer, double price, double commission) {
        this.product = product;
        Design = design;
        this.quantity = quantity;
        this.customer = customer;
        this.vendor = vendor;
        this.designer = designer;
        this.price = price;
        this.commission = commission;
    }

    public Order(String product, String design, int quantity, String customer, String vendor, String designer, double price, double commission, String status) {
        this.product = product;
        Design = design;
        this.quantity = quantity;
        this.customer = customer;
        this.vendor = vendor;
        this.designer = designer;
        this.price = price;
        this.commission = commission;
        this.status = status;
    }

    public Order(String product, String design, int quantity, String customer, String vendor, String designer, double price, double commission, String status, String date) {
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

    public Order(String product, String design, int quantity, String customer, String vendor, String designer, double price, double commission, String status, String date, String variation_id) {
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
        this.variation_id = variation_id;
    }

    public Order(String product, String design, int quantity, String customer, String vendor, String designer, double price, double commission, String status, String date, String variation_id, String shipping_address) {
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
        this.variation_id = variation_id;
        this.shipping_address = shipping_address;
    }

    public Order(int orderid, int ref_no, String product, String design, int quantity, String customer, String vendor, String designer, double price, double commission, String status, String date, String variation_id) {
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
        this.variation_id = variation_id;
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

    public String getVariation_id() {
        return variation_id;
    }

    public void setVariation_id(String variation_id) {
        this.variation_id = variation_id;
    }

    public String getshipping_address() {
        return shipping_address;
    }

    public void setshipping_address(String shipping_address) {
        this.shipping_address = shipping_address;
    }
}
