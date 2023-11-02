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

    @Query(value = "SELECT * FROM vendor_offer WHERE designerid = :dId", nativeQuery = true)
    List<VendorOffer> findPromotionByDesigner_id(@Param("dId") int designerid);

    @Query(value = "SELECT * FROM vendor_offer WHERE vendorid = :vId", nativeQuery = true)
    List<VendorOffer> findPromotionByVendor_id(@Param("vId") int vendorid);

    @Query(value = "SELECT * FROM vendor_offer WHERE designerid = :dId AND offerstatus = :status", nativeQuery = true)
    List<VendorOffer> findPromotionByDesigner_idAccepted(@Param("dId") int designerid,@Param("status") String status);

    @Query(value = "SELECT * FROM vendor_offer WHERE vendorid = :vId AND designerid = :dID", nativeQuery = true)
    List<VendorOffer> findPromotionByVendor_idAndDesigner_id(@Param("vId") int vendorid,@Param("dID") int designerid);
}
