package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Order;
import inspireinteriors.dev.repository.OrderRepository;
import inspireinteriors.dev.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.text.DateFormatSymbols;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

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

    public void updateOrderStatus(Long orderId, String status) {
        Order order = this.orderRepository.findById(Math.toIntExact(orderId)).orElse(null);
        assert order != null;
        order.setStatus(status);
        this.orderRepository.save(order);
    }

    public Order getOrderByRefNo(int refNo) {
        return this.orderRepository.findByRef_No(refNo);
    }

    public List<Object> getOrdersCountByCustomerID(String userid) {
        return this.orderRepository.findOrdersCountByCustomerID(userid);
    }

    public List<Object[]> getCountOfOrdersByDateForLast7Days() {
        // Calculate the date 7 days ago from today
        Date sevenDaysAgo = new Date(System.currentTimeMillis() - 7 * 24 * 60 * 60 * 1000);

        // Execute the repository query to get counts
        List<Object[]> counts = orderRepository.getCountOfOrdersByDateForLast7Days(sevenDaysAgo);

        // Create a map to store the counts by date
        Map<String, Object[]> countsMap = new HashMap<>();
        for (Object[] row : counts) {
            countsMap.put((String) row[0], row);
        }

        // Generate a list of dates for the last 7 days, including today
        List<Date> dateList = IntStream.range(0, 7)
                .mapToObj(i -> new Date(sevenDaysAgo.getTime() + TimeUnit.DAYS.toMillis(i)))
                .collect(Collectors.toList());

        // Create the result list, filling in missing dates with 0 counts
        List<Object[]> resultList = new ArrayList<>();
        DateFormatSymbols dateFormatSymbols = new DateFormatSymbols();
        for (Date date : dateList) {
            String dateString = new SimpleDateFormat("yyyy-MM-dd").format(date);

            // Convert java.sql.Date to LocalDate
            java.time.LocalDate localDate = date.toLocalDate();

            String dayName = dateFormatSymbols.getShortWeekdays()[localDate.getDayOfWeek().getValue()];

            if (countsMap.containsKey(dateString)) {
                // Add the day name and count to the result
                Object[] row = countsMap.get(dateString);
                row[0] = dayName;
                resultList.add(row);
            } else {
                // Add a row with the day name and 0 count for missing dates
                resultList.add(new Object[]{dayName, 0});
            }
        }

        return resultList;
    }
}
