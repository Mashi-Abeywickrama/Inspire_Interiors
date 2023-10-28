package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Order;
import inspireinteriors.dev.model.User;
import inspireinteriors.dev.service.OrderService;
import inspireinteriors.dev.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@RestController
public class OrderController {
   @Autowired
    private OrderService orderService;
   @Autowired
   private UserService userService;

    @GetMapping("/getorder")
    public List<Order> getOrder() {return this.orderService.getOrders();}

    @GetMapping("/getorder/vendor/{vendorid}")
    public List<Order> getOrdersByVendorId(@PathVariable ("vendorid") String vendor) {return this.orderService.getOrdersByVendorId(vendor);}

    @GetMapping("/getorder/customer/{customerid}")
    public List<Order> getOrdersByCustomerID(@PathVariable ("customerid") String customer){
        return this.orderService.getOrdersByCustomerID(customer);
    }

    @GetMapping("/getvendor/{vendorid}")
    public User getNameById(@PathVariable ("vendorid") int vendorid)
    {
        return this.userService.getUserById(vendorid);
    }

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

    @PostMapping("/addorder")
    public Order addOrder(@RequestBody Order order) {
        System.out.println(order.getCustomer());
        int reff_no = generateRandomNumber();
        LocalDate currentDate = LocalDate.now();

        // Store the full current date in a variable
        LocalDate myDate = currentDate;
        order.setDate(String.valueOf(myDate));
        order.setRef_no(reff_no);  // Set reference number
        return this.orderService.addOrder(order);
    }

    public int generateRandomNumber() {
        Random random = new Random();
        int min = 10000000; // Smallest 8-digit number
        int max = 99999999; // Largest 8-digit number
        return random.nextInt((max - min) + 1) + min;
    }
}
