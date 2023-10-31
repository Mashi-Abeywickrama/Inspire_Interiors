package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.Designer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DesignerRepository extends JpaRepository<Designer, Long> {


    @Query(value="SELECT * FROM designers d WHERE designer_id = :dId", nativeQuery = true)
    Designer findDesignerByDesigner_id(@Param("dId") int designer_id);
}
