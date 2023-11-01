package inspireinteriors.dev.repository.Designer;


import inspireinteriors.dev.model.DesignerModel.MyDesigns;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DesignerMyDesignsRepository extends JpaRepository<MyDesigns, Long> {

    List<MyDesigns> findAll();

    @Query(value= "SELECT * FROM my_designs WHERE designer_id= :dId", nativeQuery = true)
    List<MyDesigns> findMyDesignsByDesign_id(@Param("dId") int designer_id);


    @Query(value= "SELECT designer_id, COUNT(designer_id) as TotalCount FROM my_designs Group By designer_id", nativeQuery = true)
    List getCountsOfDesigns();

    @Query(value= "SELECT MAX(designs_id) FROM my_designs", nativeQuery = true)
    int getMaxDesignID();

    List<MyDesigns> findMyDesignsByRoomtype(String roomType);

    @Query(value= "SELECT DISTINCT roomtype FROM my_designs", nativeQuery = true)
    List<String> getDistinctRoomTypes();
}
