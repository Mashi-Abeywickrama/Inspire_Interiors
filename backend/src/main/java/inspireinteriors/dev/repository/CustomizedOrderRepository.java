package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.CustomizedOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomizedOrderRepository extends JpaRepository<CustomizedOrder, Long> {
    @Query(value = "SELECT * FROM customized_order WHERE vendorid = :vId", nativeQuery = true)
    List<CustomizedOrder> findPromotionByVendor_id(@Param("vId") int vendorid);

    Iterable<CustomizedOrder> findByCustomerid(int customerid);
}
