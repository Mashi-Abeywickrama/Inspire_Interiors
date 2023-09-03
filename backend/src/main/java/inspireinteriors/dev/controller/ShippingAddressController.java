package inspireinteriors.dev.controller;


import inspireinteriors.dev.model.ShippingAddress;
import inspireinteriors.dev.service.ShippingAddressService;
import jakarta.servlet.http.HttpSession;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @PostMapping("/shippingaddresses")
    public ResponseEntity<List> getShippingAddresses(@RequestBody UserIDRequest userIDRequest, HttpSession session) throws JSONException {
        Integer userId = userIDRequest.getUserId();
//        System.out.println("User ID: " + userId);

//        if (userId == null) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User not logged in");
//        }

        List<ShippingAddress> shippingAddresses = shippingAddressService.getShippingAddressesByCustomerid(userId);

//        if (shippingAddresses.isEmpty()) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Addresses not found");
//        }
        System.out.println("Shipping Addresses: " + shippingAddresses);
        return ResponseEntity.ok(new ShippingAddressResponse(shippingAddresses).getAddresses());
    }

    @DeleteMapping("/delete_address/{addressId}")
    public ResponseEntity<String> deleteAddress(@PathVariable Integer addressId) {
        System.out.println(addressId);
        try {
            // Call the service method to delete the address by its ID
            boolean deleted = shippingAddressService.deleteAddressById(addressId);
            if (deleted) {
                return ResponseEntity.ok("Address deleted successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Address not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting address");
        }
    }


    @PutMapping("/update-address")
    public ResponseEntity<String> updateAddress(@RequestBody AddressRequest updatedAddress) {
        try {
            System.out.println(updatedAddress.getAddressId());
            shippingAddressService.updateAddress(updatedAddress);
            return ResponseEntity.ok("Address updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Address update failed");
        }
    }

    private static class UserIDRequest {

        private Integer userId;

        public UserIDRequest() {
        }
        public UserIDRequest(Integer userId) {
            this.userId = userId;
        }

        public Integer getUserId() {
            return userId;
        }

        public void setUserId(Integer userId) {
            this.userId = userId;
        }

    }
    public static class ShippingAddressResponse {
        private List<ShippingAddress> addresses;

        public ShippingAddressResponse(List<ShippingAddress> addresses) {
            this.addresses = addresses;
        }
        //constructor
        public ShippingAddressResponse() {
        }
        // getters
        public List<ShippingAddress> getAddresses() {
            return addresses;
        }

        // setters
        public void setAddresses(List<ShippingAddress> addresses) {
            this.addresses = addresses;
        }


    }

    public static class AddressRequest {

        private Integer addressId;
        private String tag;
        private String addressTitle;
        private String lane;
        private String city;
        private String district;
        private String province;

        public AddressRequest() {
        }

        public AddressRequest(Integer addressId, String tag, String addressTitle, String lane, String city, String district, String province) {
            this.addressId = addressId;
            this.tag = tag;
            this.addressTitle = addressTitle;
            this.lane = lane;
            this.city = city;
            this.district = district;
            this.province = province;
        }

        public Integer getAddressId() {
            return addressId;
        }

        public void setAddressId(Integer addressId) {
            this.addressId = addressId;
        }

        public String getTag() {
            return tag;
        }

        public void setTag(String tag) {
            this.tag = tag;
        }

        public String getAddressTitle() {
            return addressTitle;
        }

        public void setAddressTitle(String addressTitle) {
            this.addressTitle = addressTitle;
        }

        public String getLane() {
            return lane;
        }

        public void setLane(String lane) {
            this.lane = lane;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public String getDistrict() {
            return district;
        }

        public void setDistrict(String district) {
            this.district = district;
        }

        public String getProvince() {
            return province;
        }

        public void setProvince(String province) {
            this.province = province;
        }
    }

    //


}
