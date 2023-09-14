package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.DesignerModel.PromotionEarnings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface DesignerPromotionEarningsRepository extends JpaRepository<PromotionEarnings, Long> {
}
