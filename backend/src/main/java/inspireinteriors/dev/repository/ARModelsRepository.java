package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.ARModels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ARModelsRepository extends JpaRepository<ARModels, Integer> {

    ARModels findByProductId(String productId);
}
