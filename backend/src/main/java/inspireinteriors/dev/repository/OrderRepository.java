package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

    @Repository
    public interface OrderRepository extends JpaRepository<Order,Integer> {
        Order findByOrderid(int orderid);
    }

