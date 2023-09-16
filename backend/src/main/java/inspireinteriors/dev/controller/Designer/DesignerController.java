package inspireinteriors.dev.controller.Designer;


import inspireinteriors.dev.model.DesignerModel.*;
import inspireinteriors.dev.service.Designer.DesignerMyDesignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/designer")
public class DesignerController {

    //inject service
    @Autowired
    private DesignerMyDesignService designerMyDesignService;



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
    @GetMapping("/customerrequests/d/{id}/")
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

}
