package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.VendorOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VendorOfferRepository extends JpaRepository<VendorOffer, Long> {

    @Query("SELECT v FROM VendorOffer v")
    List<VendorOffer> findAllWithoutEagerLoading();

    VendorOffer findByOfferid(int offerid);

    @Query(value = "SELECT * FROM vendor_offer WHERE vendorid = :vId", nativeQuery = true)
    List<VendorOffer> findPromotionByVendor_id(@Param("vId") int vendorid);
}
