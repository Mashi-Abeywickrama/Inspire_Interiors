package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.CustomizedOrder;
import inspireinteriors.dev.service.CustomizedOrderService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins="http://localhost:5173")
@RestController
public class CustomizedOrderController {
    @Autowired
    private CustomizedOrderService customizedOrderService;

    @PostMapping("/addcustomizedorder")
    public ResponseEntity<CustomizedOrder> createCustomizedOrder(CustomizedOrder customizedOrder, HttpSession session){
        customizedOrderService.createCustomizedOrder(customizedOrder);
        return new ResponseEntity<>(customizedOrder, HttpStatus.OK);
    }

    @GetMapping("/customizedorder")
    public ResponseEntity<List<CustomizedOrder>> getCustomizedOrder(){
        List<CustomizedOrder> customizedOrder = customizedOrderService.getCustomizedOrder();
        return ResponseEntity.ok(customizedOrder);
    }
}
