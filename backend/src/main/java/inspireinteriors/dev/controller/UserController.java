package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Customer;
import inspireinteriors.dev.model.Designer;
import inspireinteriors.dev.model.User;
import inspireinteriors.dev.model.Vendor;
import inspireinteriors.dev.service.CustomerService;
import inspireinteriors.dev.service.DesignerService;
import inspireinteriors.dev.service.UserService;
import inspireinteriors.dev.service.VendorService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:5174")
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
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) throws JSONException {
        User user = userService.authenticateUser(loginRequest.getUsername(), loginRequest.getPassword());

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        // Create a response object that includes user type
        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("message", "Login successful");
        jsonResponse.put("userType", user.getType());

        return ResponseEntity.ok(jsonResponse.toString());
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserRegistrationRequest registrationRequest) throws JSONException {
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

            Designer newDesigner = designerService.createDesigner(userId, laneNo, city, district, province);

        }

        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("message", "Registration successful");
        jsonResponse.put("userId", newUser.getUserid());

        return ResponseEntity.ok(jsonResponse.toString());
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
    }
}
