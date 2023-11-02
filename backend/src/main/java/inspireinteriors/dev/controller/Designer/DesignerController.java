package inspireinteriors.dev.controller.Designer;


import com.fasterxml.jackson.core.JsonProcessingException;
import inspireinteriors.dev.model.Designer;
import inspireinteriors.dev.model.DesignerModel.*;
import inspireinteriors.dev.model.VendorOffer;
import inspireinteriors.dev.service.Designer.DesignerMyDesignService;
import inspireinteriors.dev.service.DesignerService;
import inspireinteriors.dev.service.VendorOfferService;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.io.File;
import java.io.IOException;
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

    @GetMapping("/lastdesignid")
    public int getMaxDesignID(){
        return designerMyDesignService.getMaxDesignID();
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

    @GetMapping("/designtool/de/{id}")
    public DesigntoolFiles getFilesByDesignerID(@PathVariable("id") int id){
        DesigntoolFiles designtoolFiles =  designerMyDesignService.getDesignFileByID(id);
        return designtoolFiles;
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

    @GetMapping ("/CRequest/did/{did}")
    public ResponseEntity<List<CustomerRequests>> GetAllByDesignerid(@PathVariable("did") int designer_id) {
        List<CustomerRequests> customerRequests = (List<CustomerRequests>) designerMyDesignService.getByDesigner_id(designer_id);
        return ResponseEntity.ok(customerRequests);

    @PutMapping("/updatedesignfile")
    public ResponseEntity<String> updatedesignfile(
            @RequestParam("designid") Integer designid,
            @RequestParam("file") MultipartFile file
    ) throws JsonProcessingException, IOException, JSONException {
        System.out.println("designid: " + designid);

        // Handle image upload
        String uploadedFileName = handleImageUpload(file, designid);

        MyDesigns myDesigns = designerMyDesignService.getDesignById(designid);
        myDesigns.setImage(designid+".gltf");
        designerMyDesignService.updateImage(myDesigns);
//
        return ResponseEntity.ok(uploadedFileName);
    }

    private String handleImageUpload(MultipartFile imageFile, Integer productID) {




        if (imageFile == null || imageFile.isEmpty()) {
            return null; // No image provided
        }

        String fileName = productID + ".gltf";


        String currentWorkingDirectory = System.getProperty("user.dir");

        // Construct the relative path to the parent folder
        String parentFolderRelativePath = ".." + File.separator + "Inspire Interiors";

// Combine with the current working directory to get the absolute path
        String parentFolderAbsolutePath = currentWorkingDirectory + File.separator + parentFolderRelativePath;

        System.out.println(parentFolderAbsolutePath);

        String filePath =parentFolderAbsolutePath +"/src/assets/img/gltf"+  File.separator  + fileName;

        try {
            // Create the directory structure if it doesn't exist
            File directory = new File(filePath).getParentFile();
            if (!directory.exists()) {
                directory.mkdirs();
            }




            File destFile = new File(filePath);
            imageFile.transferTo(destFile);

            return fileName; // Return the absolute path of the saved image
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/d/{roomType}")
    public ResponseEntity<List<MyDesigns>> getDesignByRoomType(@PathVariable(value = "roomType") String roomType) {
        List<MyDesigns> myDesigns = designerMyDesignService.getDesignByRoomType(roomType);
        return ResponseEntity.ok(myDesigns);
    }

    @GetMapping("/d/distinctRoomTypes")
    public ResponseEntity<List<String>> getDistinctRoomTypes() {
        List<String> roomTypes = designerMyDesignService.getDistinctRoomTypes();
        return ResponseEntity.ok(roomTypes);

    }


}
