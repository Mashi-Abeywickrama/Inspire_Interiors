package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.OfferSale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferSaleRepository extends JpaRepository<OfferSale,Integer> {

}

