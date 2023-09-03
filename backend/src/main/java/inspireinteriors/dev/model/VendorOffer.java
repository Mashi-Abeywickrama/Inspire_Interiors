package inspireinteriors.dev.model;


import jakarta.persistence.*;
import lombok.Getter;

@Table(name = "vendor_offer")
@Entity
public class VendorOffer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "offerid")
    private int offerid;

    @Column(name = "offeroverview")
    private String offeroverview;

    @Column(name = "offerdescription")
    private String offerdescription;

    @Column(name = "zerotothousand")
    private int zerotothousand;

    @Column(name = "thousandtofivethousand")
    private int thousandtofivethousand;

    @Column(name = "fivethousandtotenthousand")
    private int fivethousandtotenthousand;

    @Column(name = "tenthousandtofiftythousand")
    private int tenthousandtofiftythousand;

    @Column(name = "fiftythousandtohundredthousand")
    private int fiftythousandtohundredthousand;

    @Column(name = "morethanhundredthousand")
    private int morethanhundredthousand;

    @Column(name = "offerstatus")
    private String offerstatus;

    @Column(name = "vendorid")
    private int vendorid;

    @Column(name = "designerid")
    private int designerid;

    public VendorOffer() {

    }

    public VendorOffer(int offerid, String offeroverview, String offerdescription, int zerotothousand, int thousandtofivethousand, int fivethousandtotenthousand, int tenthousandtofiftythousand, int fiftythousandtohundredthousand, int morethanhundredthousand, int vendorid, int designerid) {
        this.offerid = offerid;
        this.offeroverview = offeroverview;
        this.offerdescription = offerdescription;
        this.zerotothousand = zerotothousand;
        this.thousandtofivethousand = thousandtofivethousand;
        this.fivethousandtotenthousand = fivethousandtotenthousand;
        this.tenthousandtofiftythousand = tenthousandtofiftythousand;
        this.fiftythousandtohundredthousand = fiftythousandtohundredthousand;
        this.morethanhundredthousand = morethanhundredthousand;
        this.vendorid = vendorid;
        this.designerid = designerid;
        this.offerstatus = "New";
    }

    public static VendorOffer ok(VendorOffer createOffer) {
        return createOffer;
    }

    public int getOfferid() {
        return offerid;
    }

    public void setOfferid(int offerid) {
        this.offerid = offerid;
    }

    public String getOfferoverview() {
        return offeroverview;
    }

    public void setOfferoverview(String offeroverview) {
        this.offeroverview = offeroverview;
    }

    public String getOfferdescription() {
        return offerdescription;
    }

    public void setOfferdescription(String offerdescription) {
        this.offerdescription = offerdescription;
    }

    public int getZerotothousand() {
        return zerotothousand;
    }

    public void setZerotothousand(int zerotothousand) {
        this.zerotothousand = zerotothousand;
    }

    public int getThousandtofivethousand() {
        return thousandtofivethousand;
    }

    public void setThousandtofivethousand(int thousandtofivethousand) {
        this.thousandtofivethousand = thousandtofivethousand;
    }

    public int getFivethousandtotenthousand() {
        return fivethousandtotenthousand;
    }

    public void setFivethousandtotenthousand(int fivethousandtotenthousand) {
        this.fivethousandtotenthousand = fivethousandtotenthousand;
    }

    public int getTenthousandtofiftythousand() {
        return tenthousandtofiftythousand;
    }

    public void setTenthousandtofiftythousand(int tenthousandtofiftythousand) {
        this.tenthousandtofiftythousand = tenthousandtofiftythousand;
    }

    public int getFiftythousandtohundredthousand() {
        return fiftythousandtohundredthousand;
    }

    public void setFiftythousandtohundredthousand(int fiftythousandtohundredthousand) {
        this.fiftythousandtohundredthousand = fiftythousandtohundredthousand;
    }

    public int getMorethanhundredthousand() {
        return morethanhundredthousand;
    }

    public void setMorethanhundredthousand(int morethanhundredthousand) {
        this.morethanhundredthousand = morethanhundredthousand;
    }

    public int getVendorid() { return vendorid; }

    public void setVendorId(int vendorid) {
        this.vendorid = vendorid;
    }

    public int getDesignerId() {
        return designerid;
    }

    public void setDesignerId(int designerid) {
        this.designerid = designerid;
    }

    public String getOfferstatus() {
        return offerstatus;
    }

    public void setOfferstatus(String offerstatus) {
        this.offerstatus = offerstatus;
    }
}
