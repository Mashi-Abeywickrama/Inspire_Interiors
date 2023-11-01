package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Designer;
import inspireinteriors.dev.model.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Integer> {

    @Query("SELECT v FROM Vendor v WHERE v.vendor_id = :vendor_id")
    Vendor findVendorByVendor_id(@Param("vendor_id") int vendor_id);

}
