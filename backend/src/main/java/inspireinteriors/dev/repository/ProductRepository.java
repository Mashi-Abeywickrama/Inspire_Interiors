package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

import java.util.Optional;


@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("SELECT p FROM Product p")
    Iterable<Product> findAllWithoutEagerLoading();


    Iterable<Product> findAllByType(String type);

    Iterable<Product> findAllByRoomType(String roomType);
    List<Product> findByRoomType(String roomType);
    @Query("SELECT DISTINCT p.roomType FROM Product p")
    List<String> findDistinctRoomTypes();

    @Query("SELECT DISTINCT p.type FROM Product p")
    List<String> findDistinctTypes();

    List<Product> findAll();

    @Query(value = "SELECT * FROM products WHERE vendor_id = :vId", nativeQuery = true)
    List<Product> findProductsByVendor_id(@Param("vId") int vendor_id);

    @Query(value = "SELECT * FROM products WHERE product_id = :pId", nativeQuery = true)
    List<Product>  getProductById(@Param("pId") int product_id);



//    @Query("SELECT p FROM Product p JOIN FETCH p.variations")
//    List<Product> findAllWithVariations();
//
//    @Query("SELECT p FROM Product p JOIN FETCH p.variations WHERE p.product_id = :id")
//    Optional<Product> findByIdWithVariations(@Param("id") Long id);

}
