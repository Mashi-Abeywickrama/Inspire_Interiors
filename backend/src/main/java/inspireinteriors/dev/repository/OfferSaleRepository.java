package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.OfferSale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OfferSaleRepository extends JpaRepository<OfferSale,Integer> {
    @Query(value="SELECT * FROM offersale WHERE vendorid = :vId", nativeQuery = true)
    List<OfferSale> findByVendorId(@Param("vId") int vendorid);

}

