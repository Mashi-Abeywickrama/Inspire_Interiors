package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.DesignerModel.PromotionRequests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DesignerPromotionRequestsRepository extends JpaRepository<PromotionRequests, Long> {

    @Query(value = "SElECT * FROM promotion_requests WHERE designerId = :dId", nativeQuery = true)
    List<PromotionRequests> findPromotionRequestsByDesignerID(@Param("dId") int designer_id);
}
