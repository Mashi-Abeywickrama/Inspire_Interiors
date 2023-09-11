package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.DesignerModel.MyDesigns;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DesignerMyDesignsRepository extends JpaRepository<MyDesigns, Long> {

    List<MyDesigns> findAll();
}
