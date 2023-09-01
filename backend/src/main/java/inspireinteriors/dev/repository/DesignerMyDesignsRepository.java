package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.DesignerMyDesigns;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DesignerMyDesignsRepository extends JpaRepository<DesignerMyDesigns, Long> {

    List<DesignerMyDesigns> findAll();
}
