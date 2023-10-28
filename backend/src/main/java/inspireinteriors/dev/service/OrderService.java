package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Order;
import inspireinteriors.dev.repository.OrderRepository;
import inspireinteriors.dev.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    private UserRepository userRepository;

    public List<Order> getOrders() { return this.orderRepository.findAll();}

    //orders by vendorid
    public List<Order> getOrdersByVendorId(String vendor) { return this.orderRepository.findOrdersByVendor_id(vendor);}

    //orders by customerid
    public List<Order> getOrdersByCustomerID(String customer) { return this.orderRepository.findOrdersByCustomerID(customer);}


    public Order getOrder(int orderid) {
        return this.orderRepository.findById(orderid).orElse(null);
    }

    public List<Order> getOrderByStatus(String status) { return this.orderRepository.findByStatus(status); }

    public Order addOrder(Order order) {
        return this.orderRepository.save(order);
    }
}
