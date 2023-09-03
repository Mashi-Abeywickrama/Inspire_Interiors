package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.VendorOffer;
import inspireinteriors.dev.service.DesignerService;
import inspireinteriors.dev.service.VendorOfferService;
import inspireinteriors.dev.service.VendorService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@CrossOrigin(origins="http://localhost:5174")
@RestController
public class VendorOfferController {

    @Autowired
    private VendorOfferService vendorOfferService;

    @Autowired
    private VendorService vendorService;

    @Autowired
    private DesignerService designerService;

    @PostMapping("/addpromotion")
    public ResponseEntity<VendorOffer> createOffer(@RequestBody VendorOffer vendorOffer){

        VendorOffer createdOffer = vendorOfferService.createOffer(vendorOffer);
        return new ResponseEntity<>(createdOffer, HttpStatus.OK);
    }

    @GetMapping("/promotion")
    @ResponseBody
    public List<VendorOffer> getAllOffers(){
        return vendorOfferService.getOffers();
    }

    @GetMapping("/promotion/{id}")
    public ResponseEntity<VendorOffer> getOffer(@PathVariable("id") int offerid){
        VendorOffer vendorOffer = vendorOfferService.getOffer(offerid);
        return new ResponseEntity<>(vendorOffer, HttpStatus.OK);
    }

    @PutMapping("/updatepromotion")
    public ResponseEntity<VendorOffer> updateOffer(@RequestBody VendorOffer vendorOffer){
        VendorOffer updatedOffer = vendorOfferService.updateOffer(vendorOffer);
        return new ResponseEntity<>(updatedOffer, HttpStatus.OK);
    }

    @DeleteMapping("/deletepromotion/{id}")
    public ResponseEntity<VendorOffer> deleteOffer(@PathVariable("id") int offerid){
        vendorOfferService.deleteOffer(offerid);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
