package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Inquiry;
import inspireinteriors.dev.model.Product;
import inspireinteriors.dev.service.InquiryService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.time.LocalDate;
import java.util.List;
import java.util.Random;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class InquiryController {

    @Autowired
    private InquiryService inquiryService;

    @GetMapping("/inquiry")
    @ResponseBody
    public Iterable<Inquiry> fetchInquiry() {
        return inquiryService.getAllInquiries();
    }
    @PostMapping("/inquiry")
    public ResponseEntity<String> saveInquiry(@RequestBody Inquiry inquiry) throws JSONException {
        LocalDate currentDate = LocalDate.now();
        inquiry.setInquiry_date(String.valueOf(currentDate));

        Random random = new Random();
        long randomNumber = random.nextLong(); // Generates a random long number
        String referenceNo = String.format("%010d", Math.abs(randomNumber));
        inquiry.setInquiry_reference(referenceNo);

        inquiry.setInquiry_status("Ongoing");


        boolean inquirySaved = inquiryService.saveInquiry(inquiry);
        System.out.println(inquiry);


        if (inquirySaved) {
            JSONObject jsonResponse = new JSONObject();
            jsonResponse.put("reference", referenceNo);

            return ResponseEntity.ok(jsonResponse.toString());
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Inquiry Not Added!");
        }
    }

    @PutMapping("/upload-evidence")
    public ResponseEntity<String> updateImage(
            @RequestParam("reference") String reference_no,
            @RequestParam("evidence") MultipartFile evidence
    ){
        String uploadedFileName = handleImageUpload(evidence);
        System.out.println(uploadedFileName);
        Inquiry existingInquire = inquiryService.getInquiryByReference(reference_no);
        System.out.println(existingInquire);
        existingInquire.setEvidence(uploadedFileName);
        boolean inquirySaved = inquiryService.saveInquiry(existingInquire);


        if (inquirySaved) {
            return ResponseEntity.ok("Inquiry Updated!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Inquiry Not Updated!");
        }



    }

    private String handleImageUpload(MultipartFile imageFile) {
        if (imageFile == null || imageFile.isEmpty()) {
            return null; // No image provided
        }

        String fileName = imageFile.getOriginalFilename();
        String filePath = "C:\\Users\\shint\\Documents\\GitHub\\Inspire_Interiors_new\\Inspire Interiors\\src\\assets\\img\\inquiryEvidence\\" + fileName;

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

    @GetMapping("/inquiry-details/{inquiryId}")
    public ResponseEntity<Inquiry> fetchInquiryById(@PathVariable int inquiryId) {
        Inquiry inquiry = inquiryService.getInquiryById(inquiryId);
        if (inquiry != null) {
            return ResponseEntity.ok(inquiry);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/refund-inquiry")
    @ResponseBody
    public Iterable<Inquiry> fetchRefundInquiry() {
        return inquiryService.getRefundInquiries();
    }

    @PutMapping("/mark-as-canceled/{inquiryId}")
    public ResponseEntity<String> markAsCanceled(@PathVariable int inquiryId, @RequestBody Inquiry inquiry) {
        Inquiry existingInquiry = inquiryService.getInquiryById(inquiryId);
        existingInquiry.setInquiry_status("Canceled");
        existingInquiry.setAdditional_remarks(inquiry.getAdditional_remarks());
        boolean inquirySaved = inquiryService.saveInquiry(existingInquiry);
        if (inquirySaved) {
            return ResponseEntity.ok("Inquiry Updated!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Inquiry Not Updated!");
        }
    }

}
