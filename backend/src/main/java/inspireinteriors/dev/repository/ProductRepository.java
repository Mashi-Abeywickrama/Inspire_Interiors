package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("SELECT p FROM Product p")
    Iterable<Product> findAllWithoutEagerLoading();

    Iterable<Product> findAllByType(String type);

    Iterable<Product> findAllByRoomType(String roomType);
    List<Product> findByRoomType(String roomType);
    @Query("SELECT DISTINCT p.roomType FROM Product p")
    List<String> findDistinctRoomTypes();
}
