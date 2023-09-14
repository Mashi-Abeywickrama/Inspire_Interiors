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
    private DesignerPromotionRequestsRepository designerPromotionRequestsRepositoryRepository;

    @Autowired
    //Design Earnings repository
    private DesignerDesignEarningsRepository designerDesignEarningsRepository;

    @Autowired
    //Promotion Earnings repository
    private DesignerPromotionEarningsRepository designerPromotionEarningsRepository;


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

    //Customer Requests Services

    public CustomerRequests getCustomerRequestsByDesignerId(int designer_id) {
        return designerCustomerRequestsRepository.findById((long) designer_id).orElse(null);
    }

    //Promotion Requests Services

    public PromotionRequests getPromotionRequestsByDesignerId(int designer_id) {
        return designerPromotionRequestsRepositoryRepository.findById((long) designer_id).orElse(null);
    }

    //Design Earnings Services

    public DesignEarning getDesignEarningsByDesignerId(int designer_id) {
        return designerDesignEarningsRepository.findById((long) designer_id).orElse(null);
    }

    //Promotion Earning services
    public PromotionEarnings getPromotionEarningsByDesignerId(int designer_id) {
        return designerPromotionEarningsRepository.findById((long) designer_id).orElse(null);
    }
}
