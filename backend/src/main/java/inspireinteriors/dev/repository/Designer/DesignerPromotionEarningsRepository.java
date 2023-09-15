package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.DesignerModel.PromotionEarnings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface DesignerPromotionEarningsRepository extends JpaRepository<PromotionEarnings, Long> {
    @Query(value = "SELECT * FROM promotion_earnings WHERE designerID = :dId", nativeQuery = true)
    List<PromotionEarnings> findPromotionEarningsByDesignerID(@Param("dId") int designerID);
}
