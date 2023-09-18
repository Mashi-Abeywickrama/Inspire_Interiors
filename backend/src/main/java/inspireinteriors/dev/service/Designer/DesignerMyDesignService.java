package inspireinteriors.dev.service.Designer;


import inspireinteriors.dev.model.DesignerModel.*;
import inspireinteriors.dev.repository.Designer.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class DesignerMyDesignService {

    //inject repository
    @Autowired
    //Mydesigns repository
    private DesignerMyDesignsRepository designerMyDesignsRepository;
    @Autowired
    //Customer requests repository
    private DesignerCustomerRequestsRepository designerCustomerRequestsRepository;

    @Autowired
    //Promotion requests repository
    private DesignerPromotionRequestsRepository designerPromotionRequestsRepository;

    @Autowired
    //Design Earnings repository
    private DesignerDesignEarningsRepository designerDesignEarningsRepository;

    @Autowired
    //Promotion Earnings repository
    private DesignerPromotionEarningsRepository designerPromotionEarningsRepository;

    @Autowired
    //Design tool files repository
    private DesignerDesigntoolFilesRepository designerDesigntoolFilesRepository;


//MyDesign Services
    public List<MyDesigns> getAllDesigns() {
      return designerMyDesignsRepository.findAll();


   }


    public DesignerMyDesignService(DesignerMyDesignsRepository designerMyDesignsRepository) {
        this.designerMyDesignsRepository = designerMyDesignsRepository;
    }

 public MyDesigns addDesign(MyDesigns design){
        return designerMyDesignsRepository.save(design);

 }


    public MyDesigns getDesignById(int design_id) {
        return designerMyDesignsRepository.findById((long) design_id).orElse(null);
    }

    public List<MyDesigns> getDesignByDesignerId(int designer_id) {
        return designerMyDesignsRepository.findMyDesignsByDesign_id(designer_id);
    }

    //Customer Requests Services

    public CustomerRequests getCustomerRequestsById(int designer_id) {
        return designerCustomerRequestsRepository.findById((long) designer_id).orElse(null);
    }


    public List<CustomerRequests> getCustomerRequestsByDesignerId(int designer_id) {
        return designerCustomerRequestsRepository.findCustomerRequestsByDesigner_id(designer_id);
    }

    public CustomerRequests updateStatus(int request_id, String status) {
        CustomerRequests existingRequest = designerCustomerRequestsRepository.findById((long) request_id).orElse(null);
        existingRequest.setStatus(Integer.parseInt(status));
        return designerCustomerRequestsRepository.save(existingRequest);
    }

    //Promotion Requests Services

    public PromotionRequests getPromotionRequestsById(int designer_id) {
        return designerPromotionRequestsRepository.findById((long) designer_id).orElse(null);
    }
    public List<PromotionRequests> getPromotionRequestsByDesignerId(int designer_id) {
        return designerPromotionRequestsRepository.findPromotionRequestsByDesignerID(designer_id);
    }

    //Design Earnings Services

    public DesignEarning getDesignEarningsById(int designer_id) {
        return designerDesignEarningsRepository.findById((long) designer_id).orElse(null);
    }

    public List<DesignEarning> getDesignEarningsByDesignerId(int designer_id) {
        return designerDesignEarningsRepository.findDesignEarningByDesignerID(designer_id);
    }

    //Promotion Earning services
    public PromotionEarnings getPromotionEarningsById(int designer_id) {
        return designerPromotionEarningsRepository.findById((long) designer_id).orElse(null);
    }

    public List<PromotionEarnings> getPromotionEarningsByDesignerId(int designer_id) {
        return designerPromotionEarningsRepository.findPromotionEarningsByDesignerID(designer_id);
    }

    //Designtool Service

    //Save design tool files

    public DesigntoolFiles saveFiles(DesigntoolFiles designtoolFiles){
        return designerDesigntoolFilesRepository.save(designtoolFiles);
    }
}
