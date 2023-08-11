package inspireinteriors.dev.model;

import jakarta.persistence.*;

@Table(name = "customers")
@Entity
public class Customer {

    @Id
    @Column(name = "customer_id")
    private int customer_id;

    @Column(name = "lane_no")
    private String lane_no;

    @Column(name = "city")
    private String city;

    @Column(name = "district")
    private String district;

    @Column(name = "province")
    private String province;

//    @Column(name = "user_id")
//    private int user_id;


    public Customer() {
    }

    public Customer(int customer_id, String lane_no, String city, String district,String province) {
        this.customer_id = customer_id;
        this.lane_no = lane_no;
        this.city = city;
        this.district = district;
        this.province = province;
    }

    public Customer(String laneNo, String city, String district, String province) {
        this.lane_no = laneNo;
        this.city = city;
        this.district = district;
        this.province = province;
    }

    //getters

    public int getCustomer_id() {
        return customer_id;
    }

    public String getLane_no() {
        return lane_no;
    }

    public String getCity() {
        return city;
    }

    public String getProvince() {
        return province;
    }

    public String getDistrict() {
        return district;
    }



    //setters

public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public void setLane_no(String lane_no) {
        this.lane_no = lane_no;
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










}
