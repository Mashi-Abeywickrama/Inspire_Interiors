package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.CustomizedOrder;
import inspireinteriors.dev.service.CustomizedOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:5173")
@RestController
public class CustomizedOrderController {
    @Autowired
    private CustomizedOrderService customizedOrderService;

    @PostMapping("/addcustomizedorder")
    public ResponseEntity<CustomizedOrder> createCustomizedOrder(@RequestBody CustomizedOrder customizedOrder){
        System.out.println(customizedOrder.getAdditionalnotes());
        customizedOrderService.createCustomizedOrder(customizedOrder);
        return new ResponseEntity<>(customizedOrder, HttpStatus.OK);
    }

    @GetMapping("/customizedorder")
    public ResponseEntity<List<CustomizedOrder>> getCustomizedOrder(){
        List<CustomizedOrder> customizedOrder = customizedOrderService.getCustomizedOrder();
        return ResponseEntity.ok(customizedOrder);
    }

    @GetMapping("/customizedorder/{customerid}")
    public ResponseEntity<List<CustomizedOrder>> getCustomizedOrderById(@PathVariable("customerid") int customerid){
        List<CustomizedOrder> customizedOrder = customizedOrderService.getCustomizedOrderByCustomerid(customerid);
        return ResponseEntity.ok(customizedOrder);
    }
}
