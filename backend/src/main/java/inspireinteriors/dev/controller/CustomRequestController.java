package inspireinteriors.dev.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import inspireinteriors.dev.model.DesignerModel.CustomerRequests;
import inspireinteriors.dev.service.CustomRequestService;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@CrossOrigin(origins="http://localhost:5173")
@RestController
public class CustomRequestController {
    @Autowired
    private CustomRequestService customRequestService;

    @GetMapping("/customrequest")
    public List<CustomerRequests> getCustomRequest(){
        return customRequestService.getAllRequests();
    }

    @GetMapping("/customrequest/{customerid}")
    public List<CustomerRequests> getCustomRequestByCustomerId(@PathVariable int customerid){
        return customRequestService.getCustomRequestByCustomerId(customerid);
    }

    @PostMapping("/customrequest")
    public CustomerRequests addCustomRequest(@RequestBody CustomerRequests customerRequests){
        return customRequestService.addRequest(customerRequests);
    }

    @PutMapping("/setcustomrequestimg")
    public ResponseEntity<String> updateCustomRequestImg(
            @RequestParam("requestid") Long requestid,
            @RequestParam("file") MultipartFile imageFile
    ) throws JsonProcessingException, IOException, JSONException {

//         Handle image upload
        String uploadedFileName = handleImageUpload(imageFile, requestid);
//        System.out.println("Variation ID: " + imageFile.getOriginalFilename());


//
        CustomerRequests customerRequests = customRequestService.getCustomRequestById(requestid);
        customerRequests.setImages(requestid+".jpg");
        customRequestService.updateRequestImage(customerRequests);
//
        return ResponseEntity.ok(requestid+".jpg");
    }


    private String handleImageUpload(MultipartFile imageFile, Long productID) {




        if (imageFile == null || imageFile.isEmpty()) {
            return null; // No image provided
        }

        String fileName = productID + ".jpg";


        String currentWorkingDirectory = System.getProperty("user.dir");

        // Construct the relative path to the parent folder
        String parentFolderRelativePath = ".." + File.separator + "Inspire Interiors";

// Combine with the current working directory to get the absolute path
        String parentFolderAbsolutePath = currentWorkingDirectory + File.separator + parentFolderRelativePath;

        System.out.println(parentFolderAbsolutePath);

        String filePath =parentFolderAbsolutePath +"/src/assets/img/customerdesignerrequest"+  File.separator  + fileName;

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


}
