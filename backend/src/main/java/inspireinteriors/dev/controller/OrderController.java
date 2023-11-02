package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Order;
import inspireinteriors.dev.model.User;
import inspireinteriors.dev.service.OrderService;
import inspireinteriors.dev.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    @GetMapping("/getorderbyref/{ref}")
    public Order getOrderbyrefno(@PathVariable ("ref") int ref_no) {
        return this.orderService.getOrderByRefNo(ref_no);
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
    @GetMapping("/commissionsum")
    public double getCommissionSum() {
        List<Order> orders = this.orderService.getOrders();

        double commissionSum = orders.stream()
                .mapToDouble(Order::getCommission)
                .sum();

        return commissionSum;
    }

    @GetMapping("/ordercount")
    public int getOrderCount() {
        List<Order> orders = this.orderService.getOrders();

        int orderCount = orders.size();

        return orderCount;
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

    @PutMapping("/update-status/{orderId}")
    public ResponseEntity<String> updateOrderStatus(
            @PathVariable Long orderId,
            @RequestBody OrderStatusUpdateDTO orderStatusUpdateDTO) {
        try {
            System.out.println(orderStatusUpdateDTO.getNewStatus());
            orderService.updateOrderStatus(orderId, orderStatusUpdateDTO.getNewStatus());
            return ResponseEntity.ok("Order status updated successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update order status.");
        }
    }

    public static class OrderStatusUpdateDTO {
        private String newStatus;

        public OrderStatusUpdateDTO(){}

        public OrderStatusUpdateDTO(String newStatus){
            this.newStatus = newStatus;
        }

        public String getNewStatus() {
            return newStatus;
        }

        public void setNewStatus(String newStatus) {
            this.newStatus = newStatus;
        }
    }

    @GetMapping("/getordercounttypes/{userid}")
    public List<Object> getOrderCountTypes(@PathVariable ("userid") String userid) {
        List<Object> orderCount = this.orderService.getOrdersCountByCustomerID(userid);
        return orderCount;

    }

    @GetMapping("/ordercountseven")
    public List<Map<String, Object>> getCountOfInquiriesByDateForLast7Days() {
        List<Object[]> data = orderService.getCountOfOrdersByDateForLast7Days();

        // Create a list of maps to store the data as key-value pairs
        List<Map<String, Object>> responseData = data.stream()
                .map(row -> {
                    Map<String, Object> entry = new HashMap<>();
                    entry.put("dayName", row[0]);
                    entry.put("OrderCount", row[1]);
                    return entry;
                })
                .collect(Collectors.toList());

        return responseData;
    }
}
