package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.DesignerModel.PromotionRequests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DesignerPromotionRequestsRepository extends JpaRepository<PromotionRequests, Long> {
}
