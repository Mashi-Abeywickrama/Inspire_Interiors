package inspireinteriors.dev.controller;


import inspireinteriors.dev.model.ShippingAddress;
import inspireinteriors.dev.service.ShippingAddressService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ShippingAddressController {

    @Autowired
    private ShippingAddressService shippingAddressService;

    @PostMapping("/shippingaddress")
    public ResponseEntity<String> shippingaddress(@RequestBody ShippingAddress shippingAddress) throws JSONException {

        String response = String.valueOf(shippingAddressService.createAddress( shippingAddress.getTag(), shippingAddress.getAddress_title(), shippingAddress.getLane(), shippingAddress.getCity(), shippingAddress.getDistrict(), shippingAddress.getProvince(), shippingAddress.getCustomer_id()));

        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("message", "Shipping Address Created Successfully");
        jsonResponse.put("addressid", response);
        return ResponseEntity.ok(jsonResponse.toString());
    }



}
