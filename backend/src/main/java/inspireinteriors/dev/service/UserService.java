    package inspireinteriors.dev.service;

    import inspireinteriors.dev.model.User;
    import inspireinteriors.dev.repository.UserRepository;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
    import org.springframework.stereotype.Service;

    import java.util.Date;


    @Service
    public class UserService {


        @Autowired
        private UserRepository userRepository;

        @Autowired
        private BCryptPasswordEncoder passwordEncoder;

        public User createUser(String name, String email, String username, String password, String type) {
            // Hash the password before saving
            String hashedPassword = passwordEncoder.encode(password);

            User user = new User(name, email, new Date(), username, hashedPassword, type);
            return userRepository.save(user);
        }

        public Iterable<User> getAllUsers() {
            return userRepository.findAll();
        }

        public User authenticateUser(String username, String password) {
            User user = userRepository.findByUsername(username);

            if (user != null && passwordEncoder.matches(password, user.getPassword())) {
                return user;
            }

            return null;
        }
        public boolean updatePassword(int userId, String currentPassword, String newPassword) {
            User user = userRepository.findById((long) userId).orElse(null);


            if (user == null) {
                return false;
            }

            if (!passwordEncoder.matches(currentPassword, user.getPassword())) {
                return false;
            }

            String hashedNewPassword = passwordEncoder.encode(newPassword);
            user.setPassword(hashedNewPassword);
            userRepository.save(user);

            return true;
        }
        public User getUserById(int userId) {
            return userRepository.findProfileByUserid(userId);
        }

    }
