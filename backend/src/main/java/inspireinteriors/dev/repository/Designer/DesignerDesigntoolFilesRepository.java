package inspireinteriors.dev.repository.Designer;

import inspireinteriors.dev.model.DesignerModel.DesigntoolFiles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DesignerDesigntoolFilesRepository extends JpaRepository<DesigntoolFiles, Long> {

@Query(value = "SELECT * FROM designtool_files WHERE request_id = :rId", nativeQuery = true)
    DesigntoolFiles findByRequest_id(@Param("rId") int request_id);

    @Query(value = "select * from designtool_files where request_id = 0  and designer_id =:dId", nativeQuery = true)
    List<DesigntoolFiles> getAllDra(@Param("dId") int designer_id);

    @Query(value = "select * from designtool_files where request_id != 0 and designer_id = :dId", nativeQuery = true)
    List<DesigntoolFiles> getAllReq(@Param("dId") int designer_id);
}


