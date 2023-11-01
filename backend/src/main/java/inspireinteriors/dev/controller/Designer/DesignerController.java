package inspireinteriors.dev.controller.Designer;


import inspireinteriors.dev.model.Designer;
import inspireinteriors.dev.model.DesignerModel.*;
import inspireinteriors.dev.model.VendorOffer;
import inspireinteriors.dev.service.Designer.DesignerMyDesignService;
import inspireinteriors.dev.service.DesignerService;
import inspireinteriors.dev.service.VendorOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:8000",})
@RestController
@RequestMapping("/designer")
public class DesignerController {

    //inject service
    @Autowired
    private DesignerMyDesignService designerMyDesignService;

    @Autowired
    private DesignerService designerService;

    @Autowired
    private VendorOfferService vendorOfferService;



//MyDesigns endpoints
//get all designs
    @GetMapping("/mydesigns")
    @ResponseBody
    public List<MyDesigns> getAllDesigns(){
        return designerMyDesignService.getAllDesigns();
    }
    @GetMapping("mydesigns/{id}")
    public ResponseEntity<MyDesigns> getDesignById(@PathVariable(value = "id") int design_id){
        MyDesigns design = designerMyDesignService.getDesignById(design_id);
        return ResponseEntity.ok().body(design);
    }
    //By Designer Id

    @GetMapping("mydesigns/d/{id}")
    public ResponseEntity<List<MyDesigns>> getDesignByDesignerId(@PathVariable(value = "id") int designer_id) {
        List<MyDesigns> myDesigns = designerMyDesignService.getDesignByDesignerId(designer_id);
       return ResponseEntity.ok(myDesigns);
    }

    @GetMapping("designCount")
    public ResponseEntity<List> getCountsOfDesigns(){
        List counts = designerMyDesignService.getCountsOfDesigns();
        return ResponseEntity.ok(counts);
    }
    

    @GetMapping("/{designerId}")
    public ResponseEntity<Designer> getDesignerById(@PathVariable(value = "designerId") int designer_id){
        Designer designer = designerService.getDesignerByID(designer_id);
        return ResponseEntity.ok(designer);
    }

    @GetMapping("/d")
    public ResponseEntity<List<Designer>> getAllDesigners(){
        List<Designer> designers = designerService.getAllDesigners();
        return ResponseEntity.ok(designers);
    }



    @PostMapping("/adddesign")
    public MyDesigns createDesign(@RequestBody MyDesigns design){
        designerMyDesignService.addDesign(design);
        return (design);




    }

    //customer requests endpoints
    @GetMapping("/customerrequests/{id}")
    public ResponseEntity<CustomerRequests> getCusomerRequestsbyId(@PathVariable(value = "id") int designer_id){
        CustomerRequests customerRequests = designerMyDesignService.getCustomerRequestsById(designer_id);
        return ResponseEntity.ok().body(customerRequests);
    }

    //By Designer ID
    @GetMapping("/customerrequests/d/{id}")
    public ResponseEntity<List<CustomerRequests>> getCusomerRequestsbyDesignerId(@PathVariable(value = "id") int designer_id){
        List<CustomerRequests> customerRequests = designerMyDesignService.getCustomerRequestsByDesignerId(designer_id);
        return ResponseEntity.ok(customerRequests);
    }

    //Update Customer Request by id

    @PutMapping("/customerrequests/u/{id}/setstatus")
    public ResponseEntity<CustomerRequests> updateStatus(@PathVariable(value = "id") int request_id, @RequestParam(value = "newStatus") String status){
        CustomerRequests customerRequestsUpdate = designerMyDesignService.updateStatus(request_id, status);
        return ResponseEntity.ok(customerRequestsUpdate);
    }


    //promotion requests endpoints

    @GetMapping("/promotionrequests/{id}")
    public ResponseEntity<VendorOffer> getPromotionRequestsbyId(@PathVariable(value = "id") int designer_id){
        VendorOffer vendorOffer = designerMyDesignService.getPromotionRequestsById(designer_id);
        return ResponseEntity.ok().body(vendorOffer);
    }
    //By Designer ID
    @GetMapping("/promotionrequests/d/{id}")
    public ResponseEntity<List<VendorOffer>> getPromotionRequestsByDesignerId(@PathVariable(value = "id") int designerid) {
        List<VendorOffer> vendorOffers = designerMyDesignService.getPromotionRequestsByDesignerId(designerid);
        return ResponseEntity.ok(vendorOffers);
    }

    //design earnings endpoints
    @GetMapping("/designearnings/{id}")
    public ResponseEntity<DesignEarning> getDesignEarningsbyId(@PathVariable(value = "id") int designer_id){
        DesignEarning designEarning = designerMyDesignService.getDesignEarningsById(designer_id);
        return ResponseEntity.ok().body(designEarning);
    }

    //By Designer ID
    @GetMapping("/designearnings/d/{id}")
    public ResponseEntity<List<DesignEarning>> getDesignerEarningsByDesignerId(@PathVariable(value = "id") int designer_id){
        List<DesignEarning> designerEarnings = designerMyDesignService.getDesignEarningsByDesignerId(designer_id);
        return ResponseEntity.ok(designerEarnings);
    }

    //promotion earnings endpoints
    @GetMapping("/promotionearnings/{id}")
    public ResponseEntity<PromotionEarnings> getPromotionEarningsbyId(@PathVariable(value = "id") int designer_id){
        PromotionEarnings promotionEarnings = designerMyDesignService.getPromotionEarningsById(designer_id);
        return ResponseEntity.ok().body(promotionEarnings);
    }
//By Designer ID
    @GetMapping("/promotionearnings/d/{id}")
    public ResponseEntity<List<PromotionEarnings>> getPromotionEarningsByDesignerId(@PathVariable(value = "id") int designer_id) {
        List<PromotionEarnings> promotionEarnings = designerMyDesignService.getPromotionEarningsByDesignerId(designer_id);
        return ResponseEntity.ok(promotionEarnings);
    }


    //Designtool Endpoints

    //Save Designs
    @PostMapping("/designtool/savedesign")
   public String saveData(@RequestBody String data) {
       DesigntoolFiles file = new DesigntoolFiles();
       file.setData(data);
      designerMyDesignService.saveFiles(file);
      return "Successfully Saved";

    }

    @PutMapping("/designtool/savedesign/{id}")
    public String updateData(@PathVariable("id") int id, @RequestBody String data) {
//        DesigntoolFiles designtoolFiles = new DesigntoolFiles();

        designerMyDesignService.updateFiles(id, data);
        return "Successfully Updated";

    }

    @GetMapping ("/designtool/req/{did}/{id}")
    public String saveRequest_id(@PathVariable("id") int request_id, @PathVariable("did") int designer_id) {
        designerMyDesignService.saveRequest_id(request_id, designer_id);
        return "Successfully Saved";

    }

    @GetMapping("/designtool/getdesigns/req/{id}")
    public ResponseEntity<DesigntoolFiles> getFilesByRequestID(@PathVariable("id") int request_id){
        DesigntoolFiles designtoolFiles =  designerMyDesignService.GetByReqid(request_id);
        return ResponseEntity.ok(designtoolFiles);
    }

    @GetMapping("/designtool/getdesign/{id}")
    public ResponseEntity<DesigntoolFiles> getFilesByID(@PathVariable("id") int id){
    DesigntoolFiles designtoolFiles =  designerMyDesignService.Getdetails(id);
      return ResponseEntity.ok(designtoolFiles);
    }


}
