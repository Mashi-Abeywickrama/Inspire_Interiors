package inspireinteriors.dev.model;


import jakarta.persistence.*;

import java.util.Date;

@Table(name = "Salary")
@Entity
public class Salary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use GenerationType.IDENTITY for identity columns
    @Column(name = "userid")
    private int userid;

    @Column(name = "name")
    private String name;

    @Column(name = "total_sale")
    private int total_sale;

    @Column(name = "earnings")
    private long earnings;

    @Column(name="commission")
    private long commission;

    public Salary() {
    }

    public Salary(int userid, String name, int total_sale, long earnings, long commission) {
        this.userid = userid;
        this.name = name;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
    }

    public Salary(String name, int total_sale, long earnings, long commission) {
        this.name = name;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
    }
    public Salary(int userid, String name, int total_sale, long earnings) {
        this.userid = userid;
        this.name = name;
        this.total_sale = total_sale;
        this.earnings = earnings;
    }

    public Salary(String name, int total_sale, long earnings) {
        this.name = name;
        this.total_sale = total_sale;
        this.earnings = earnings;
    }

    public Salary(int userid, String name, int total_sale) {
        this.userid = userid;
        this.name = name;
        this.total_sale = total_sale;
    }

    public Salary(String name, int total_sale) {
        this.name = name;
        this.total_sale = total_sale;
    }


    public Salary(int userid, String name) {
        this.userid = userid;
        this.name = name;
    }

    public Salary(String name) {
        this.name = name;
    }

    //need getters
    public int getUserid() {
        return userid;
    }

    public String getName() {
        return name;
    }

    public int getTotal_sale() {
        return total_sale;
    }

    public long getEarnings() {
        return earnings;
    }
    public long getCommission() {
        return commission;
    }





    //need setters

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTotal_sale(int total_sale) {
        this.total_sale = total_sale;
    }

    public void setEarnings(long earnings) {
        this.earnings = earnings;
    }

    public void setCommission(long commission) {
        this.commission = commission;
    }

}