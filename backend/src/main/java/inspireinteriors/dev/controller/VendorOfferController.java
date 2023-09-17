package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Vendor;
import inspireinteriors.dev.model.VendorOffer;
import inspireinteriors.dev.service.DesignerService;
import inspireinteriors.dev.service.VendorOfferService;
import inspireinteriors.dev.service.VendorService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<VendorOffer> createOffer(@RequestBody VendorOffer vendorOffer, HttpSession session){

//        Integer vendorId = (Integer) session.getAttribute("vendorid");
//
//        Vendor vendor = new Vendor();
//        vendor.setVendor_id(vendorId);
//        vendorOffer.setVendor(vendor);

        vendorOfferService.createOffer(vendorOffer);
        return new ResponseEntity<>(vendorOffer, HttpStatus.OK);

    }

    @GetMapping("/promotion")
    @ResponseBody
    public List<VendorOffer> getAllOffers(){
        return vendorOfferService.getOffers();
    }

    @GetMapping("/promotion/{offerid}")
    public ResponseEntity<VendorOffer> getOffer(@PathVariable("offerid") int offerid){
        VendorOffer vendorOffer = vendorOfferService.getOffer(offerid);
        return new ResponseEntity<>(vendorOffer, HttpStatus.OK);
    }

    @PutMapping("/updatepromotion/{offerid}")
    public ResponseEntity<VendorOffer> updateOffer(
            @PathVariable ("offerid") int offerid,
            @RequestBody VendorOffer updatedOffer
    ) {
        VendorOffer vendorOffer = vendorOfferService.findById(offerid);

        if (vendorOffer == null) {
            return ResponseEntity.notFound().build();
        }

        if(updatedOffer.getOfferoverview() != null){
            vendorOffer.setOfferoverview(updatedOffer.getOfferoverview());
        }

        if(updatedOffer.getOfferdescription() != null){
            vendorOffer.setOfferdescription(updatedOffer.getOfferdescription());
        }

        if(updatedOffer.getZerotothousand() != 0){
            vendorOffer.setZerotothousand(updatedOffer.getZerotothousand());
        }

        if(updatedOffer.getThousandtofivethousand() != 0){
            vendorOffer.setThousandtofivethousand(updatedOffer.getThousandtofivethousand());
        }

        if(updatedOffer.getFivethousandtotenthousand() != 0){
            vendorOffer.setFivethousandtotenthousand(updatedOffer.getFivethousandtotenthousand());
        }

        if(updatedOffer.getTenthousandtofiftythousand() != 0){
            vendorOffer.setTenthousandtofiftythousand(updatedOffer.getTenthousandtofiftythousand());
        }

        if(updatedOffer.getFiftythousandtohundredthousand() != 0){
            vendorOffer.setFiftythousandtohundredthousand(updatedOffer.getFiftythousandtohundredthousand());
        }

        if(updatedOffer.getMorethanhundredthousand() != 0){
            vendorOffer.setMorethanhundredthousand(updatedOffer.getMorethanhundredthousand());
        }

        if(updatedOffer.getOfferstatus() != null){
            vendorOffer.setOfferstatus(updatedOffer.getOfferstatus());
        }

        if(updatedOffer.getVendor() != 0){
            vendorOffer.setVendor(updatedOffer.getVendor());
        }

        if(updatedOffer.getDesigner() != 0){
            vendorOffer.setDesigner(updatedOffer.getDesigner());
        }

        VendorOffer updated = vendorOfferService.updateOffer(vendorOffer);

        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/deletepromotion/{id}")
    public ResponseEntity<VendorOffer> deleteOffer(@PathVariable("id") int offerid){
        vendorOfferService.deleteOffer(offerid);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
