package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Inquiry;
import inspireinteriors.dev.repository.InquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InquiryService {

    @Autowired
    private InquiryRepository inquiryRepository;



    public Inquiry getInquiryByReference(String referenceNo) {
        return inquiryRepository.findByInquiryReference(referenceNo);
    }

    public boolean saveInquiry(Inquiry inquiry) {
        inquiryRepository.save(inquiry);
        return true;
    }


    public Iterable<Inquiry> getAllInquiries() {
        return inquiryRepository.findAll();

    }
}
