package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.DesignerModel.DesignEarning;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface DesignerDesignEarningsRepository extends JpaRepository<DesignEarning, Long> {
}
