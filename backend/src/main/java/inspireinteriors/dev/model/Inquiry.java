package inspireinteriors.dev.model;

import jakarta.persistence.*;

@Table(name = "inquiry")
@Entity
public class Inquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use GenerationType.IDENTITY for identity columns
    @Column(name = "inquiry_id")
    private int inquiry_id;

    @Column(name = "inquiry_reference")
    private String inquiry_reference;

    @Column(name = "inquiry_date")
    private String inquiry_date;

    @Column(name = "inquiry_status")
    private String inquiry_status;

    @Column(name = "inquiry_type")
    private String inquiry_type;

    @Column(name = "username")
    private String username;

    @Column(name = "remarks")
    private String remarks;

    @Column(name = "order_no")
    private String order_no;

    @Column(name = "order_date")
    private String order_date;

    @Column(name = "reason")
    private String reason;

    @Column(name = "addional_remarks")
    private String addional_remarks;

    @Column(name = "evidence")
    private String evidence;

    public Inquiry() {
    }

    public Inquiry(int inquiry_id, String inquiry_reference, String inquiry_date, String inquiry_status, String inquiry_type, String username, String remarks, String order_no, String order_date, String reason, String addional_remarks, String evidence) {
        this.inquiry_id = inquiry_id;
        this.inquiry_reference = inquiry_reference;
        this.inquiry_date = inquiry_date;
        this.inquiry_status = inquiry_status;
        this.inquiry_type = inquiry_type;
        this.username = username;
        this.remarks = remarks;
        this.order_no = order_no;
        this.order_date = order_date;
        this.reason = reason;
        this.addional_remarks = addional_remarks;
        this.evidence = evidence;
    }

    public Inquiry(String inquiry_reference, String inquiry_date, String inquiry_status, String inquiry_type, String username, String remarks, String order_no, String order_date, String reason, String addional_remarks, String evidence) {
        this.inquiry_reference = inquiry_reference;
        this.inquiry_date = inquiry_date;
        this.inquiry_status = inquiry_status;
        this.inquiry_type = inquiry_type;
        this.username = username;
        this.remarks = remarks;
        this.order_no = order_no;
        this.order_date = order_date;
        this.reason = reason;
        this.addional_remarks = addional_remarks;
        this.evidence = evidence;
    }

    public int getInquiry_id() {
        return inquiry_id;
    }

    public void setInquiry_id(int inquiry_id) {
        this.inquiry_id = inquiry_id;
    }

    public String getInquiry_reference() {
        return inquiry_reference;
    }

    public void setInquiry_reference(String inquiry_reference) {
        this.inquiry_reference = inquiry_reference;
    }

    public String getInquiry_date() {
        return inquiry_date;
    }

    public void setInquiry_date(String inquiry_date) {
        this.inquiry_date = inquiry_date;
    }

    public String getInquiry_status() {
        return inquiry_status;
    }

    public void setInquiry_status(String inquiry_status) {
        this.inquiry_status = inquiry_status;
    }

    public String getInquiry_type() {
        return inquiry_type;
    }

    public void setInquiry_type(String inquiry_type) {
        this.inquiry_type = inquiry_type;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getOrder_no() {
        return order_no;
    }

    public void setOrder_no(String order_no) {
        this.order_no = order_no;
    }

    public String getOrder_date() {
        return order_date;
    }

    public void setOrder_date(String order_date) {
        this.order_date = order_date;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getAddional_remarks() {
        return addional_remarks;
    }

    public void setAddional_remarks(String addional_remarks) {
        this.addional_remarks = addional_remarks;
    }

    public String getEvidence() {
        return evidence;
    }

    public void setEvidence(String evidence) {
        this.evidence = evidence;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }


}
