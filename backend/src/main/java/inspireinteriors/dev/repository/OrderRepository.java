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
    }

