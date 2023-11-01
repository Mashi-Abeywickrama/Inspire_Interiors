package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.DesignerModel.PromotionRequests;
import inspireinteriors.dev.model.VendorOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DesignerPromotionRequestsRepository extends JpaRepository<VendorOffer, Long> {

    @Query(value = "SElECT * FROM vendor_offer WHERE designerid = :dId", nativeQuery = true)
    List<VendorOffer> findPromotionRequestsByDesignerID(@Param("dId") int designerid);
}
