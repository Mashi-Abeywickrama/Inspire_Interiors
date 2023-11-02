package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.DesignerModel.CustomerRequests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface DesignerCustomerRequestsRepository extends JpaRepository<CustomerRequests, Long> {


    //status 0 - Accept or Reject, 1 - Accept, 2 - Reject

    @Query(value = "SELECT * FROM customer_requests WHERE designer_id = :dId", nativeQuery = true)
    List<CustomerRequests> findCustomerRequestsByDesigner_id(@Param("dId") int designer_id);

    @Query(value = "SELECT * FROM customer_requests WHERE customer_id = :cId", nativeQuery = true)
    List<CustomerRequests> findDetailsCustomer_id(@Param("cId") int customer_id);
}
