package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.DesignerModel.DesignEarning;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface DesignerDesignEarningsRepository extends JpaRepository<DesignEarning, Long> {
    @Query(value = "SELECT * FROM design_earning WHERE designerID = :dId", nativeQuery = true)
    List<DesignEarning> findDesignEarningByDesignerID (@Param("dId") int designer_id);
}
