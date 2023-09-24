package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.DesignerModel.DesigntoolFiles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DesignerDesigntoolFilesRepository extends JpaRepository<DesigntoolFiles, Long> {
}
