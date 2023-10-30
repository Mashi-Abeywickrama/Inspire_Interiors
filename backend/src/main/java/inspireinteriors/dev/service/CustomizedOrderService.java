package inspireinteriors.dev.service;

import inspireinteriors.dev.model.CustomizedOrder;
import inspireinteriors.dev.repository.CustomizedOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomizedOrderService {
    @Autowired
    private CustomizedOrderRepository customizedOrderRepository;

    public CustomizedOrder createCustomizedOrder(CustomizedOrder customizedOrder){
        return customizedOrderRepository.save(customizedOrder);
    }

    public List<CustomizedOrder> getCustomizedOrder() {
        List<CustomizedOrder> orderList = new ArrayList<>();

        customizedOrderRepository.findAll().forEach(CustomizedOrder -> orderList.add(CustomizedOrder));
        return orderList;
    }

    public List<CustomizedOrder> getCustomizedOrderByCustomerid(int customerid) {
        List<CustomizedOrder> orderList = new ArrayList<>();

        customizedOrderRepository.findByCustomerid(customerid).forEach(CustomizedOrder -> orderList.add(CustomizedOrder));
        return orderList;
    }
}
