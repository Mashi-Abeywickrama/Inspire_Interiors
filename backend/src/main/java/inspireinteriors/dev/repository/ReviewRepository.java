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

    @Query(value = "SELECT product_id, AVG(star_rating) AS avg_rating " +
            "FROM Review " +
            "GROUP BY product_id " +
            "ORDER BY avg_rating DESC " +
            "LIMIT 4", nativeQuery = true)
    List<Object[]> getPopularItems();

    @Query(value = "SELECT product_id, AVG(star_rating) AS avg_rating " +
            "FROM Review " +
            "GROUP BY product_id " +
            "ORDER BY avg_rating DESC ",
            nativeQuery = true)
    List<Object[]> getAllPopularItems();
}