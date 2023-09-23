package inspireinteriors.dev.model;


import jakarta.persistence.*;

import java.util.Date;

@Table(name = "Salary")
@Entity
public class Salary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use GenerationType.IDENTITY for identity columns
    @Column(name = "salary_id")
    private int salary_id;

    @Column(name = "total_sales")
    private int total_sale;

    @Column(name = "earnings")
    private double earnings;

    @Column(name="commission")
    private double commission;

    @Column(name="salary")
    private double salary;

    @Column(name="year")
    private int year;

    @Column(name="month")
    private String month;

    @Column(name="status")
    private String status;

    @Column(name="userid")
    private int userid;

    public Salary() {
    }

    public Salary(int salary_id, int total_sale, double earnings, double commission, double salary, int year, String month, String status, int userid) {
        this.salary_id = salary_id;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.salary = salary;
        this.year = year;
        this.month = month;
        this.status = status;
        this.userid = userid;
    }

    public Salary(int total_sale, double earnings, double commission, double salary, int year, String month, String status, int userid) {
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.salary = salary;
        this.year = year;
        this.month = month;
        this.status = status;
        this.userid = userid;
    }

    public int getSalary_id() {
        return salary_id;
    }

    public void setSalary_id(int salary_id) {
        this.salary_id = salary_id;
    }

    public int getTotal_sale() {
        return total_sale;
    }

    public void setTotal_sale(int total_sale) {
        this.total_sale = total_sale;
    }

    public double getEarnings() {
        return earnings;
    }

    public void setEarnings(double earnings) {
        this.earnings = earnings;
    }

    public double getCommission() {
        return commission;
    }

    public void setCommission(double commission) {
        this.commission = commission;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }
}