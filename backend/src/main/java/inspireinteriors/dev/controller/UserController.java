package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Customer;
import inspireinteriors.dev.model.Designer;
import inspireinteriors.dev.model.User;
import inspireinteriors.dev.model.Vendor;
import inspireinteriors.dev.service.CustomerService;
import inspireinteriors.dev.service.DesignerService;
import inspireinteriors.dev.service.UserService;
import inspireinteriors.dev.service.VendorService;
import jakarta.servlet.http.HttpSession;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private VendorService vendorService;

    @Autowired
    private DesignerService designerService;

        @GetMapping("/users")
    @ResponseBody
    public Iterable<User> fetchUsers() {
        return userService.getAllUsers();
    }
    public String fetchUsers( HttpSession session) {
        Integer user_id = (Integer) session.getAttribute("userid");

        return user_id.toString();
    }

    @GetMapping("/username-check")
    public ResponseEntity<Integer> checkUsernameExists(@RequestParam String username) {
        User user = userService.findByUsername(username);

        if (user != null) {
            return ResponseEntity.ok(1);
        } else {
            return ResponseEntity.ok(0);
        }
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest, HttpSession session) throws JSONException {
        User user = userService.authenticateUser(loginRequest.getUsername(), loginRequest.getPassword());

        if (user == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Invalid credentials");

        }
        session.setAttribute("userid", user.getUserid());
        session.setAttribute("username", user.getName());
        session.setAttribute("userType", user.getType());
        session.setAttribute("loggedIn", true);
        // Create a response object that includes user type
        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("message", "Login successful");
        jsonResponse.put("username", user.getName());
        jsonResponse.put("userType", user.getType());
        jsonResponse.put("userId", user.getUserid());
        
        return ResponseEntity.ok(jsonResponse.toString());
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserRegistrationRequest registrationRequest, HttpSession session) throws JSONException {
        String name = registrationRequest.getName();
        String email = registrationRequest.getEmail();
        String username = registrationRequest.getUsername();
        String password = registrationRequest.getPassword();
        String userType = registrationRequest.getUserType();

        User newUser = userService.createUser(name, email, username, password, userType);
        int userId = newUser.getUserid();

        if ("customer".equalsIgnoreCase(userType)) {
            // Create a customer entry for the user
            String laneNo = registrationRequest.getLaneNo();
            String city = registrationRequest.getCity();
            String district = registrationRequest.getDistrict();
            String province = registrationRequest.getProvince();

            Customer newCustomer = customerService.createCustomer(userId, laneNo, city, district, province);
        } else if ("vendor".equalsIgnoreCase(userType)) {
            // Create a vendor entry for the user
            String laneNo = registrationRequest.getLaneNo();
            String city = registrationRequest.getCity();
            String district = registrationRequest.getDistrict();
            String province = registrationRequest.getProvince();

            Vendor newVendor = vendorService.createVendor(userId, laneNo, city, district, province);

        }

        else if ("designer".equalsIgnoreCase(userType)) {
            // Create a vendor entry for the user
            String laneNo = registrationRequest.getLaneNo();
            String city = registrationRequest.getCity();
            String district = registrationRequest.getDistrict();
            String province = registrationRequest.getProvince();
            String bio = registrationRequest.getBio();
            String specialities = registrationRequest.getSpecialities();
            double averageoverview = registrationRequest.getAveragereview();

            Designer newDesigner = designerService.createDesigner(userId, laneNo, city, district, province, bio, specialities, averageoverview);

        }

        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("message", "Registration successful");
        jsonResponse.put("userId", newUser.getUserid());

        return ResponseEntity.ok(jsonResponse.toString());
    }

    @GetMapping("/getuser")
    public List<User> getUser() {return this.userService.getUsers();}

    @GetMapping("/getuser/{userid}")
    public User getUserById(@PathVariable ("userid") int userid)
    {
        return this.userService.getUserById(userid);
    }

    @GetMapping("/getuserbyname/{username}")
    public User getUserByUsername(@PathVariable ("username") String username)
    {
        System.out.println(username);
        return this.userService.getUserByUserName(username);
    }


    @PostMapping("/adduser")
    public User addValues(@RequestBody User adduser)
    {
        return this.userService.addUser(adduser);
    }

    @PutMapping("/getuser/{userid}")
    public User updateUser(@PathVariable ("userid") int userid, @RequestBody User user)
    {
        return this.userService.updateUser(userid,user);
    }

    @GetMapping("/filtertype/{type}")
    public List<User> getUsersByUserType(@PathVariable String type) {
        List<User> users = userService.getUsersByUserType(type);
        return users;
    }

    @GetMapping("/usercount")
    public int getUserCount() {
        return userService.getUserCount();
    }

    @GetMapping("/usercountType")
    public List getUserCountType() {
        return userService.getUserCountByUserTypes();
    }

    @GetMapping("/usercountbyusertype/{type}")
    public int getUserCountByUserType(@PathVariable String type) {
        return userService.getUserCountByUserType(type);
    }

    @PostMapping("/profile")
    public ResponseEntity<String> getProfile(@RequestBody UserIDRequest userIDRequest,HttpSession session) throws JSONException {


        Integer userId = userIDRequest.getUserId();
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User not logged in");
        }

        User user = userService.getUserById(userId);


        if (user == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User not found");
        }

        // Create a response object that includes user data
        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("name", user.getName());
        jsonResponse.put("email", user.getEmail());
        jsonResponse.put("dob", user.getDob());
        jsonResponse.put("username", user.getUsername());
        jsonResponse.put("password", user.getPassword());
        jsonResponse.put("userType", user.getType());
        jsonResponse.put("profile_pic", user.getProfile_pic());
        jsonResponse.put("contact_no", user.getContact_no());
        jsonResponse.put("status", user.getStatus());


        return ResponseEntity.ok(jsonResponse.toString());
    }

    @PutMapping("/update-account")
    public ResponseEntity<String> updateAccount(@RequestBody UserAccountRequest updatedProfile) {
        Integer userId = updatedProfile.getUserId();
        String name = updatedProfile.getName();
        String email = updatedProfile.getEmail();
        String username = updatedProfile.getUsername();
        String contact_no = updatedProfile.getContact_no();

        boolean profileUpdated = userService.updateProfile(
                userId,
                name,
                email,
                username,
                contact_no
        );

        if (profileUpdated) {
            return ResponseEntity.ok("Profile updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Profile update failed");
        }
    }

    @PutMapping ("/update-password")
    public ResponseEntity<String> updatePassword(
            @RequestBody UpdatePasswordRequest updatePasswordRequest,
            HttpSession session) throws JSONException {
        JSONObject jsonResponse = new JSONObject();

        Integer userId = updatePasswordRequest.userId;


        boolean passwordUpdated = userService.updatePassword(
                userId,
                updatePasswordRequest.getCurrentPassword(),
                updatePasswordRequest.getNewPassword()
        );

        if (passwordUpdated) {
            jsonResponse.put("message", "Password updated successfully");
            return ResponseEntity.ok(jsonResponse.toString());
        } else {
            jsonResponse.put("message", "Password update failed");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(jsonResponse.toString());
        }
    }


    // Nested static class for the login request
    private static class LoginRequest {
        private String username;
        private String password;

        // Getters and setters
        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    private static class UserIDRequest {

        private Integer userId;

        public UserIDRequest() {
        }
        public UserIDRequest(Integer userId) {
            this.userId = userId;
        }

        public Integer getUserId() {
            return userId;
        }

        public void setUserId(Integer userId) {
            this.userId = userId;
        }

    }

    // Nested static class for the registration request
    private static class UserRegistrationRequest {
        private String name;
        private String email;
        private String username;
        private String password;
        private String userType;

        // Additional fields for usertype registration
        private String laneNo;
        private String city;
        private String district;

        private String province;
        private String bio;
        private String specialities;
        private double averagereview;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public String getUserType() {
            return userType;
        }

        public void setUserType(String userType) {
            this.userType = userType;
        }

        public String getLaneNo() {
            return laneNo;
        }

        public void setLaneNo(String laneNo) {
            this.laneNo = laneNo;
        }

        public String getCity() {
            return city;
        }

        public String getDistrict() {
            return district;
        }

        public void setDistrict(String district) {
            this.district = district;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public String getProvince() {
            return province;
        }

        public void setProvince(String province) {
            this.province = province;
        }

        public String getBio() {
            return bio;
        }

        public String getSpecialities() {
            return specialities;
        }

        public double getAveragereview() {
            return averagereview;
        }

        public void setBio(String bio) {
            this.bio = bio;
        }

        public void setSpecialities(String specialities) {
            this.specialities = specialities;
        }

        public void setAveragereview(double averagereview) {
            this.averagereview = averagereview;
        }
    }

    // Nested static class for the user data response
    private static class UserDataResponse {
        private String firstName;
        private String email;
        // Add other fields you want to include in the response

        public UserDataResponse(String firstName, String email) {
            this.firstName = firstName;
            this.email = email;
            // Initialize other fields here
        }

        // Include getters for other fields
    }

    private static class UpdatePasswordRequest {

        private Integer userId;
        private String currentPassword;
        private String newPassword;

        //constructor

        public UpdatePasswordRequest(Integer userId,String currentPassword, String newPassword) {
            this.userId = userId;
            this.currentPassword = currentPassword;
            this.newPassword = newPassword;
        }

        //getters and setters

        public Integer getUserId() {
            return userId;
        }

        public void setUserId(Integer userId) {
            this.userId = userId;
        }

        public String getCurrentPassword() {
            return currentPassword;
        }

        public void setCurrentPassword(String currentPassword) {
            this.currentPassword = currentPassword;
        }

        public String getNewPassword() {
            return newPassword;
        }

        public void setNewPassword(String newPassword) {
            this.newPassword = newPassword;
        }




    }

    private static class UserAccountRequest{
        private Integer userId;
        private String name;
        private String email;
        private String username;
        private String contact_no;

        public UserAccountRequest(Integer userId, String name, String email, String username, String contact_no) {
            this.userId = userId;
            this.name = name;
            this.email = email;
            this.username = username;
            this.contact_no = contact_no;
        }


        public UserAccountRequest(Integer userId, String name, String email, String username, String password, String userType, String profile_pic, String contact_no, String status) {
            this.userId = userId;
            this.name = name;
            this.email = email;
            this.username = username;
            this.contact_no = contact_no;
        }

        public UserAccountRequest() {
        }

        //getters and setters

        public Integer getUserId() {
            return userId;
        }

        public void setUserId(Integer userId) {
            this.userId = userId;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }



        public String getContact_no() {
            return contact_no;
        }

        public void setContact_no(String contact_no) {
            this.contact_no = contact_no;
        }



    }


    @GetMapping("/topdesigners")
    public List<Designer> getTopDesigners() {
        List<Designer> designers = designerService.getTopDesigners();
        return designers;
    }

}
