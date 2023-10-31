package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
    public interface OrderRepository extends JpaRepository<Order,Integer> {
        Order findByOrderid(int orderid);

        List<Order> findByStatus(String status);

        @Query(value = "SELECT * FROM orders WHERE vendor = :vId", nativeQuery = true)
        List<Order> findOrdersByVendor_id(@Param("vId") String vendor);

    @Query(value = "SELECT * FROM orders WHERE customer = :cId", nativeQuery = true)
    List<Order> findOrdersByCustomerID(@Param("cId") String customer);

    @Query(value = "SELECT * FROM orders WHERE ref_no = :refNo", nativeQuery = true)
    Order findByRef_No(@Param("refNo") int refNo);
}

