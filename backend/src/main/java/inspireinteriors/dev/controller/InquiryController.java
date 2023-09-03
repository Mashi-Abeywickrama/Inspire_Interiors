package inspireinteriors.dev.controller;

import inspireinteriors.dev.service.InquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class InquiryController {

    @Autowired
    private InquiryService inquiryService;
}
