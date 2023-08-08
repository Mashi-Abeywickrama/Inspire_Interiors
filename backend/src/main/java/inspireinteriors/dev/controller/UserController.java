package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.User;
import inspireinteriors.dev.service.UserService;
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
}
