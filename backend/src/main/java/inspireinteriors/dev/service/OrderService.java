package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Order;
import inspireinteriors.dev.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getOrders() { return this.orderRepository.findAll();}

    public Order getOrder(int orderid) {
        return this.orderRepository.findById(orderid).orElse(null);
    }
}
