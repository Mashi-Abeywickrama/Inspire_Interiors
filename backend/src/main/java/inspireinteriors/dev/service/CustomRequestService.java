package inspireinteriors.dev.service;

import inspireinteriors.dev.model.DesignerModel.CustomerRequests;
import inspireinteriors.dev.repository.Designer.DesignerCustomerRequestsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomRequestService {

    @Autowired
    private DesignerCustomerRequestsRepository designerCustomerRequestsRepository;


    public List<CustomerRequests> getAllRequests() {
        return designerCustomerRequestsRepository.findAll();
    }

    public CustomerRequests addRequest(CustomerRequests customerRequests) {
        return designerCustomerRequestsRepository.save(customerRequests);
    }

    public CustomerRequests getCustomRequestById(Long requestid) {
        return designerCustomerRequestsRepository.findById(requestid).orElse(null);
    }

    public void updateRequestImage(CustomerRequests customerRequests) {
        designerCustomerRequestsRepository.save(customerRequests);
    }
}
