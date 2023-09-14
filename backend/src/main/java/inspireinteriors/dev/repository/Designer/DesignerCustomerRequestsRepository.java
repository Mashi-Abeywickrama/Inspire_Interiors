package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.DesignerModel.CustomerRequests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface DesignerCustomerRequestsRepository extends JpaRepository<CustomerRequests, Long> {
}
