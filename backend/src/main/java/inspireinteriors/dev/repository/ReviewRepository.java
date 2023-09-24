package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository <Review, Integer> {
    List<Review> findByProductId(Long productId);

    // Count the number of reviews by product ID
    long countByProductId(Long productId);



    @Query("SELECT r FROM Review r INNER JOIN User u ON r.userId = u.userid WHERE r.productId = :productId")
    List<String> findByNameByProductId(Long productId);
}