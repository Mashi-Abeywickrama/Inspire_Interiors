package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Variation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VariationRepository extends JpaRepository<Variation, Long> {

    @Query(value = "SELECT * FROM variations WHERE product_id = :id", nativeQuery = true)
    List<Variation> findBYProductId(@Param("id") int product_id);
}
