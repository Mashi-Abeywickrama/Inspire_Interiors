package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository <Review, Integer> {
    List<Review> findByProductId(Long productId);

    // Count the number of reviews by product ID
    long countByProductId(Long productId);
}