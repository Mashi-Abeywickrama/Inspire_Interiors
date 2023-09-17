package inspireinteriors.dev.model;


import jakarta.persistence.*;

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

    public VendorOffer(int offerid, String offeroverview, String offerdescription, int zerotothousand, int thousandtofivethousand, int fivethousandtotenthousand, int tenthousandtofiftythousand, int fiftythousandtohundredthousand, int morethanhundredthousand, String offerstatus, int vendorid, int designerid) {
        this.offerid = offerid;
        this.offeroverview = offeroverview;
        this.offerdescription = offerdescription;
        this.zerotothousand = zerotothousand;
        this.thousandtofivethousand = thousandtofivethousand;
        this.fivethousandtotenthousand = fivethousandtotenthousand;
        this.tenthousandtofiftythousand = tenthousandtofiftythousand;
        this.fiftythousandtohundredthousand = fiftythousandtohundredthousand;
        this.morethanhundredthousand = morethanhundredthousand;
        this.offerstatus = offerstatus;
        this.vendorid = vendorid;
        this.designerid = designerid;
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

    public String getOfferstatus() {
        return offerstatus;
    }

    public void setOfferstatus(String offerstatus) {
        this.offerstatus = offerstatus;
    }

    public int getVendor() {
        return vendorid;
    }

    public int getDesigner() {
        return designerid;
    }

    public void setVendorid(int vendorid) {
        this.vendorid = vendorid;
    }

    public void setDesignerid(int designerid) {
        this.designerid = designerid;
    }

    public int setVendor(int vendorId) {
        return vendorId;
    }

    public int setDesigner(int designerId) {
        return designerId;
    }

    public void setVendorid(Vendor vendor) {
        this.vendorid = vendor.getVendor_id();
    }

    public Object getVendorid() {
        return vendorid;
    }

    public void setVendor(Vendor vendor) {
        this.vendorid = vendor.getVendor_id();
    }

    public Object getDesignerid() {
        return designerid;
    }

    public void setVendor(Object vendor) {
        this.vendorid = (int) vendor;
    }

    public void setDesigner(Object designer) {
        this.designerid = (int) designer;
    }

    @Override
    public String toString() {
        return "VendorOffer{" +
                "offerid=" + offerid +
                ", offeroverview='" + offeroverview + '\'' +
                ", offerdescription='" + offerdescription + '\'' +
                ", zerotothousand=" + zerotothousand +
                ", thousandtofivethousand=" + thousandtofivethousand +
                ", fivethousandtotenthousand=" + fivethousandtotenthousand +
                ", tenthousandtofiftythousand=" + tenthousandtofiftythousand +
                ", fiftythousandtohundredthousand=" + fiftythousandtohundredthousand +
                ", morethanhundredthousand=" + morethanhundredthousand +
                ", offerstatus='" + offerstatus + '\'' +
                ", vendorid=" + vendorid +
                ", designerid=" + designerid +
                '}';
    }
}
