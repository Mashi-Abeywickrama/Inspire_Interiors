package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart,Integer> {

    List<Cart> findCartByUserId(int userId);
}

