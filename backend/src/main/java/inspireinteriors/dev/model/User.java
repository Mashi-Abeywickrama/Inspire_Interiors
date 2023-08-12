package inspireinteriors.dev.model;


import jakarta.persistence.*;

import java.util.Date;

@Table(name = "users")
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use GenerationType.IDENTITY for identity columns
    @Column(name = "userid")
    private int userid;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "dob")
    private Date dob;

    @Column(name="username")
    private String username;

    @Column(name="password")
    private String password;

    @Column(name="type")
    private String type;

    public User() {
    }

    public User(String name, String email, Date dob, String username, String password, String type) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.username = username;
        this.password = password;
        this.type = type;
    }

    public User(int userid, String name, String email, Date dob, String username, String password, String type) {
        this.userid = userid;
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.username = username;
        this.password = password;
        this.type = type;
    }

    //need getters
    public int getUserid() {
        return userid;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Date getDob() {
        return dob;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getType() {
        return type;
    }

    //need setters

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email= email;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password= password;
    }

    public void setType(String type) {
        this.type = type;
    }









}