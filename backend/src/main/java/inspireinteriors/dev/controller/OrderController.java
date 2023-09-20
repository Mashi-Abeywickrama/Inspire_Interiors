package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Order;
import inspireinteriors.dev.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


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

}
