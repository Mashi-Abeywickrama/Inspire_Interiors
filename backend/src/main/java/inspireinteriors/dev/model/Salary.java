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

    public Salary() {
    }

    public Salary(int userid, int total_sale, double earnings, double commission, int year, String month, String status) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.year = year;
        this.month = month;
        this.status = status;
    }

    public Salary(int userid, int total_sale, double earnings, double commission, double salary, int year, String month, String status) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.salary = salary;
        this.year = year;
        this.month = month;
        this.status = status;
    }

    public Salary(int userid, int total_sale, double earnings, double commission, double salary, int year, String month) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.salary = salary;
        this.year = year;
        this.month = month;
    }

    public Salary(int userid, int total_sale, double earnings, double commission, double salary, String month) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.salary = salary;
        this.month = month;
    }

    public Salary(int userid, int total_sale, double earnings, double commission, double salary) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.salary = salary;
    }

    public Salary(int userid, int total_sale, double earnings, double commission) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
    }

    public Salary(int userid, int total_sale, double earnings) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
    }

    public Salary(int userid, int total_sale) {
        this.userid = userid;
        this.total_sale = total_sale;
    }

    public Salary(int userid) {
        this.userid = userid;
    }


    public Salary(int userid, String month) {
        this.userid = userid;
        this.month = month;
    }

    public Salary(int userid, int total_sale, double earnings, double commission, int year, String month) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.year = year;
        this.month = month;
    }

    public Salary(int userid, int total_sale, double earnings, double commission, int year) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.year = year;
    }


    public Salary(int userid, int total_sale, double earnings, double commission, String month) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.month = month;
    }

    public Salary(int userid, int total_sale, double earnings, double commission, int year, String month, String status, double salary) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.year = year;
        this.month = month;
        this.status = status;
        this.salary = salary;
    }

    public Salary(int userid, int total_sale, double earnings, double commission, int year, String month, double salary) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.year = year;
        this.month = month;
        this.salary = salary;
    }

    public Salary(int userid, int total_sale, double earnings, double commission, int year, String month, String status, double salary, String username) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.year = year;
        this.month = month;
        this.status = status;
        this.salary = salary;
    }

    public Salary(int userid, int total_sale, double earnings, double commission, int year, String month, double salary, String username) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.year = year;
        this.month = month;
        this.salary = salary;
    }

    public Salary(int userid, int total_sale, double earnings, double commission, int year, String month, String status, double salary, String username, String name) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.year = year;
        this.month = month;
        this.status = status;
        this.salary = salary;
    }

    public Salary(int userid, int total_sale, double earnings, double commission, int year, String month, double salary, String username, String name) {
        this.userid = userid;
        this.total_sale = total_sale;
        this.earnings = earnings;
        this.commission = commission;
        this.year = year;
        this.month = month;
        this.salary = salary;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
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

    public void setCommission(long commission) {
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
}