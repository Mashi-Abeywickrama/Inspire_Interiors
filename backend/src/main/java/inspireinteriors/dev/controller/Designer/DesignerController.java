package inspireinteriors.dev.controller.Designer;


import inspireinteriors.dev.model.Designer;
import inspireinteriors.dev.model.DesignerModel.*;
import inspireinteriors.dev.service.Designer.DesignerMyDesignService;
import inspireinteriors.dev.service.DesignerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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

//    @GetMapping("designCount")
//    public ResponseEntity<List> getCountsOfDesigns(){
//        List counts = designerMyDesignService.getCountsOfDesigns();
//        return ResponseEntity.ok(counts);
//    }
    

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
    public ResponseEntity<PromotionRequests> getPromotionRequestsbyId(@PathVariable(value = "id") int designer_id){
        PromotionRequests promotionRequests = designerMyDesignService.getPromotionRequestsById(designer_id);
        return ResponseEntity.ok().body(promotionRequests);
    }
    //By Designer ID
    @GetMapping("/promotionrequests/d/{id}")
    public ResponseEntity<List<PromotionRequests>> getPromotionRequestsByDesignerId(@PathVariable(value = "id") int designer_id) {
        List<PromotionRequests> promotionRequests = designerMyDesignService.getPromotionRequestsByDesignerId(designer_id);
        return ResponseEntity.ok(promotionRequests);
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
    @PostMapping("/designtool/savedesign/did/{dId}")
   public String saveData(@RequestBody String data, @PathVariable("dId") int dId) {
       DesigntoolFiles file = new DesigntoolFiles();
       LocalDate date =  LocalDate.now();
       file.setData(data);
       file.setCreatedOn(date);
       file.setDesigner_id(dId);
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

    @GetMapping("/designtool/getdesign/dra/{dId}")
    public ResponseEntity<List<DesigntoolFiles>> getDraFiles(@PathVariable("dId") int dId){
     List<DesigntoolFiles> designtoolFiles = designerMyDesignService.GetAllDra(dId);
     return ResponseEntity.ok(designtoolFiles);
    }

    @GetMapping("/designtool/getdesign/req/{dId}")
    public ResponseEntity<List<DesigntoolFiles>> getAllReq(@PathVariable("dId") int designer_id){
        List<DesigntoolFiles> designtoolFiles = designerMyDesignService.GetAllReq(designer_id);
        return ResponseEntity.ok(designtoolFiles);
    }


    // Customer Requests
    @GetMapping ("/CRequest/did/{did}/st/{st}")
    public ResponseEntity<List<CustomerRequests>> ReqFill(@PathVariable("did") int designer_id, @PathVariable("st") int status) {
        List<CustomerRequests> customerRequests = designerMyDesignService.ReqFill(designer_id, status);
                return ResponseEntity.ok(customerRequests);


    }
    //Set Amount
    @PutMapping("/CRequest/req/{req}/amount/{amt}")
    public String SetAmt(@PathVariable("req") int request_id, @PathVariable("amt") int amount) {
       designerMyDesignService.setAmt( request_id, amount);
        return "Amount updated Successfully";
    }


}
