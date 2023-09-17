package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.VendorOffer;
import inspireinteriors.dev.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VendorOfferRepository extends JpaRepository<VendorOffer, Long> {

    @Query("SELECT v FROM VendorOffer v")
    List<VendorOffer> findAllWithoutEagerLoading();

    VendorOffer findByOfferid(int offerid);
}
