package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Order;
import inspireinteriors.dev.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;


@RestController
public class OrderController {
   @Autowired
    private OrderService orderService;

    @GetMapping("/getorder")
    public List<Order> getOrder() {return this.orderService.getOrders();}



    @GetMapping("/getorder/{orderid}")
public Order getOrder(@PathVariable ("orderid") int orderid) {
        return this.orderService.getOrder(orderid);
    }

    @GetMapping("/totalcommission")
    public double getTotalCommission() {
        List<Order> orders = this.orderService.getOrders();

        double totalCommission = orders.stream()
                .filter(order -> "completed".equals(order.getStatus())) // Filter completed orders
                .mapToDouble(Order::getCommission)
                .sum();

        return totalCommission;
    }

    @GetMapping("/totalpencommission")
    public double getTotalpenCommission() {
        List<Order> orders = this.orderService.getOrders();

        double totalpenCommission = orders.stream()
                .filter(order -> "pending".equals(order.getStatus())) // Filter completed orders
                .mapToDouble(Order::getCommission)
                .sum();

        return totalpenCommission;
    }
    @GetMapping("/filterDesigner")
    public List<Order> getDesigner() {
        List<Order> orders = this.orderService.getOrders();

        List<Order> designerOrders = orders.stream()
                .filter(order -> order.getDesigner() != null) // Filter orders where designer is not null
                .collect(Collectors.toList());

        return designerOrders;
    }


    @GetMapping("/filterVendor")
    public List<Order> getVendor() {
        List<Order> orders = this.orderService.getOrders();

        List<Order> vendorOrders = orders.stream()
                .filter(order -> order.getVendor() != null) // Filter orders where designer is not null
                .collect(Collectors.toList());

        return vendorOrders;
    }

    @GetMapping("/filtercompleted")
    public List<Order> getCompletedOrders() {
        List<Order> completedOrders = orderService.getOrderByStatus("completed");
        return completedOrders;
    }


}
