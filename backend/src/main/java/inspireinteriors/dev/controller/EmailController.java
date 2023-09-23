package inspireinteriors.dev.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import inspireinteriors.dev.model.EmailDetails;
import inspireinteriors.dev.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

// Annotation
@RestController
// Class
public class EmailController {

    @Autowired private EmailService emailService;

    @Autowired
    private ObjectMapper objectMapper;

    // Sending a simple Email
    @PostMapping("/sendMail")
    public String
    sendMail(@RequestBody EmailDetails details)
    {
        String status
                = emailService.sendSimpleMail(details);

        return status;
    }

    // Sending email with attachment
    @PostMapping("/sendMailWithAttachment")
    public String sendMailWithAttachment(
            @RequestParam("details") String details,@RequestParam("file") MultipartFile file) throws JsonProcessingException

    {
        EmailDetails emailDetails = objectMapper.readValue(details, EmailDetails.class);
        String Subject = "Quotation as requested";
        String Body = "Please find the attached quotation";
        emailDetails.setSubject(Subject);
        emailDetails.setMsgBody(Body);

        String status
                = emailService.sendMailWithAttachment(emailDetails, file);
//        String status = "Email Sent Successfully";

        return status;
    }
}