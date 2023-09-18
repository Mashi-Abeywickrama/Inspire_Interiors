package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsernameAndPassword(String username, String password);

    User findByUsername(String username);

    User findProfileByUserid(int userid); // get user by id

    List<User> findByType(String type);


}
