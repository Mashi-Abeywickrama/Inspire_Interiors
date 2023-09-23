package inspireinteriors.dev.service;

import inspireinteriors.dev.model.EmailDetails;
import org.springframework.web.multipart.MultipartFile;

public interface EmailService {

    // Method
    // To send a simple email
    String sendSimpleMail(EmailDetails details);

    // Method
    // To send an email with attachment
    String sendMailWithAttachment(EmailDetails details, MultipartFile file);
}

