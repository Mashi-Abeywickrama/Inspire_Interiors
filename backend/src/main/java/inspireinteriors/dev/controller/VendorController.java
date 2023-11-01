package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Designer;
import inspireinteriors.dev.model.Vendor;
import inspireinteriors.dev.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:5173")
@RestController
public class VendorController {

        @Autowired
        private VendorService vendorService;

        @GetMapping("/vendor/{vendorId}")
        public Optional<Vendor> getVendor(@PathVariable("vendorId") int vendor_id){
            Optional<Vendor> vendornew = vendorService.getVendor(vendor_id);
            return vendornew;
        }


        @GetMapping("/vendors")
        public ResponseEntity<List<Vendor>> getAllVendors(){
            List<Vendor> vendors = vendorService.getAllVendors();
            return ResponseEntity.ok(vendors);
        }



}
