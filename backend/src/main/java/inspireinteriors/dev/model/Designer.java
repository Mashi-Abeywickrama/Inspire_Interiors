package inspireinteriors.dev.model;

import jakarta.persistence.*;

@Table(name = "designers")
@Entity
public class Designer {

    @Id
    @Column(name = "designer_id")
    private int designer_id;

    @Column(name = "lane_no")
    private String lane_no;

    @Column(name = "city")
    private String city;

    @Column(name = "district")
    private String district;

    @Column(name = "province")
    private String province;


    public Designer() {
    }

    public Designer(int designer_id, String lane_no, String city, String district,String province) {
        this.designer_id = designer_id;
        this.lane_no = lane_no;
        this.city = city;
        this.district = district;
        this.province = province;
    }

    public Designer(String laneNo, String city, String district, String province) {
        this.lane_no = laneNo;
        this.city = city;
        this.district = district;
        this.province = province;
    }

    //getters

    public int getDesigner_id() {
        return designer_id;
    }

    public String getLane_no() {
        return lane_no;
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

    //setters

    public void setDesigner_id(int designer_id) {
        this.designer_id = designer_id;
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
