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

    @Column(name = "bio")
    private String bio;

    @Column(name = "specialities")
    private String specialities;

    @Column(name = "averagereview")
    private double averagereview;


    public Designer() {
    }

    public Designer(int designer_id, String lane_no, String city, String district, String province, String bio, String specialities, double averagereview) {
        this.designer_id = designer_id;
        this.lane_no = lane_no;
        this.city = city;
        this.district = district;
        this.province = province;
        this.bio = bio;
        this.specialities = specialities;
        this.averagereview = averagereview;
    }

    public Designer(String lane_no, String city, String district, String province, String bio, String specialities, double averagereview) {
        this.lane_no = lane_no;
        this.city = city;
        this.district = district;
        this.province = province;
        this.bio = bio;
        this.specialities = specialities;
        this.averagereview = averagereview;
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

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getSpecialities() {
        return specialities;
    }

    public void setSpecialities(String specialities) {
        this.specialities = specialities;
    }

    public double getAveragereview() {
        return averagereview;
    }

    public void setAveragereview(double averagereview) {
        this.averagereview = averagereview;
    }
}
