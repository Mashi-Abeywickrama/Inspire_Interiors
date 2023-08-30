package inspireinteriors.dev.model;

import jakarta.persistence.*;

@Table(name = "shipping_address")
@Entity
public class ShippingAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "addressid")
    private int addressid;

    @Column(name = "tag")
    private String tag;

    @Column(name = "address_title")
    private String address_title;

    @Column(name = "lane")
    private String lane;

    @Column(name = "city")
    private String city;

    @Column(name = "district")
    private String district;

    @Column(name = "province")
    private String province;

    @Column(name = "customer_id")
    private int customer_id;

    public ShippingAddress() {
    }

    public ShippingAddress(int addressid, String tag, String lane, String city, String district, String province, int customer_id) {
        this.addressid = addressid;
        this.tag = tag;
        this.lane = lane;
        this.city = city;
        this.district = district;
        this.province = province;
        this.customer_id = customer_id;
    }

    public ShippingAddress(String tag, String lane, String city, String district, String province, int customer_id) {
        this.tag = tag;
        this.lane = lane;
        this.city = city;
        this.district = district;
        this.province = province;
        this.customer_id = customer_id;
    }

    public ShippingAddress(String tag, String address_title, String lane, String city, String district, String province, int customer_id) {
        this.tag = tag;
        this.address_title = address_title;
        this.lane = lane;
        this.city = city;
        this.district = district;
        this.province = province;
        this.customer_id = customer_id;
    }

    public ShippingAddress(int addressid, String tag, String address_title, String lane, String city, String district, String province, int customer_id) {
        this.addressid = addressid;
        this.tag = tag;
        this.address_title = address_title;
        this.lane = lane;
        this.city = city;
        this.district = district;
        this.province = province;
        this.customer_id = customer_id;
    }

    //getters
    public int getAddressid() {
        return addressid;
    }

    public String getTag() {
        return tag;
    }

    public String getAddress_title() {
        return address_title;
    }

    public String getLane() {
        return lane;
    }
    public String getCity() {
        return city;
    }
    public String getDistrict() {
        return district;
    }
    public String getProvince() {
        return province;
    }
    public int getCustomer_id() {
        return customer_id;
    }

    //setters
    public void setAddressid(int addressid) {
        this.addressid = addressid;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public void setAddress_title(String address_title) {
        this.address_title = address_title;
    }

    public void setLane_no(String lane) {
        this.lane = lane;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

}

