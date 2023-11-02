//package inspireinteriors.dev.service.Designer;
//
//
//import inspireinteriors.dev.model.DesignerModel.*;
//import inspireinteriors.dev.model.VendorOffer;
//import inspireinteriors.dev.repository.Designer.*;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//
//import java.time.LocalDate;
//import java.util.Collections;
//import java.util.Date;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class DesignerMyDesignService {
//
//    //inject repository
//    @Autowired
//    //Mydesigns repository
//    private DesignerMyDesignsRepository designerMyDesignsRepository;
//    @Autowired
//    //Customer requests repository
//    private DesignerCustomerRequestsRepository designerCustomerRequestsRepository;
//
//    @Autowired
//    //Promotion requests repository
//    private DesignerPromotionRequestsRepository designerPromotionRequestsRepository;
//
//    @Autowired
//    //Design Earnings repository
//    private DesignerDesignEarningsRepository designerDesignEarningsRepository;
//
//    @Autowired
//    //Promotion Earnings repository
//    private DesignerPromotionEarningsRepository designerPromotionEarningsRepository;
//
//    @Autowired
//    //Design tool files repository
//    private DesignerDesigntoolFilesRepository designerDesigntoolFilesRepository;
//
//    @Autowired
//    private DesignerRepository designerRepository;
//
//
//    //MyDesign Services
//    public List<MyDesigns> getAllDesigns() {
//        return designerMyDesignsRepository.findAll();
//
//
//    }
//
//    public DesignerMyDesignService(DesignerMyDesignsRepository designerMyDesignsRepository) {
//        this.designerMyDesignsRepository = designerMyDesignsRepository;
//    }
//
//    public MyDesigns addDesign(MyDesigns design) {
//        return designerMyDesignsRepository.save(design);
//
//    }
//
//
//    public MyDesigns getDesignById(int design_id) {
//        return designerMyDesignsRepository.findById((long) design_id).orElse(null);
//    }
//
//    public List<MyDesigns> getDesignByDesignerId(int designer_id) {
//        return designerMyDesignsRepository.findMyDesignsByDesign_id(designer_id);
//    }
//
//    //Customer Requests Services
//
//    public CustomerRequests getCustomerRequestsById(int designer_id) {
//        return designerCustomerRequestsRepository.findById((long) designer_id).orElse(null);
//    }
//
//
//    public List<CustomerRequests> getCustomerRequestsByDesignerId(int designer_id) {
//        return designerCustomerRequestsRepository.findCustomerRequestsByDesigner_id(designer_id);
//    }
//
//    public CustomerRequests updateStatus(int request_id, String status) {
//        CustomerRequests existingRequest = designerCustomerRequestsRepository.findById((long) request_id).orElse(null);
//        existingRequest.setStatus(Integer.parseInt(status));
//        return designerCustomerRequestsRepository.save(existingRequest);
//    }
//
//    //Promotion Requests Services
//
//    public VendorOffer getPromotionRequestsById(int designer_id) {
//        return designerPromotionRequestsRepository.findById((long) designer_id).orElse(null);
//    }
//
//
//    public List<PromotionRequests> getPromotionRequestsByDesignerId(int designer_id) {
//        return designerPromotionRequestsRepository.findPromotionRequestsByDesignerID(designer_id);
//
//    public List<VendorOffer> getPromotionRequestsByDesignerId(int designerid) {
//        return designerPromotionRequestsRepository.findPromotionRequestsByDesignerID(designerid);
//
//    }
//
//    //Design Earnings Services
//
//    public DesignEarning getDesignEarningsById(int designer_id) {
//        return designerDesignEarningsRepository.findById((long) designer_id).orElse(null);
//    }
//
//    public List<DesignEarning> getDesignEarningsByDesignerId(int designer_id) {
//        return designerDesignEarningsRepository.findDesignEarningByDesignerID(designer_id);
//    }
//
//    //Promotion Earning services
//    public PromotionEarnings getPromotionEarningsById(int designer_id) {
//        return designerPromotionEarningsRepository.findById((long) designer_id).orElse(null);
//    }
//
//    public List<PromotionEarnings> getPromotionEarningsByDesignerId(int designer_id) {
//        return designerPromotionEarningsRepository.findPromotionEarningsByDesignerID(designer_id);
//    }
//
//    //Designtool Service
//
//    //Save design tool files
//
//    public DesigntoolFiles saveFiles(DesigntoolFiles designtoolFiles) {
//        return designerDesigntoolFilesRepository.save(designtoolFiles);
//    }
//
//    public DesigntoolFiles updateFiles(int id, String data) {
//        DesigntoolFiles designtoolFiles = designerDesigntoolFilesRepository.findById((long) id).orElse(null);
//        designtoolFiles.setData(data);
//        return designerDesigntoolFilesRepository.save(designtoolFiles);
//
//    }
//
//    public DesigntoolFiles saveRequest_id(int request_id, int designer_id) {
//        DesigntoolFiles designtoolFiles = new DesigntoolFiles();
//        designtoolFiles.setRequest_id(request_id);
//        designtoolFiles.setDesigner_id(designer_id);
//        LocalDate date = LocalDate.now();
//        designtoolFiles.setCreatedOn(date);
//        return designerDesigntoolFilesRepository.save(designtoolFiles);
//    }
//
//    public DesigntoolFiles Getdetails(int id) {
//        return designerDesigntoolFilesRepository.findById((long) id).orElse(null);
//    }
//
//    public DesigntoolFiles GetByReqid(int request_id) {
//        return designerDesigntoolFilesRepository.findByRequest_id(request_id);
//    }
//
//    public List<DesigntoolFiles> GetAllDra(int designer_id) {
//        return designerDesigntoolFilesRepository.getAllDra(designer_id);
//    }
//
//    public List<DesigntoolFiles> GetAllReq(int designer_id) {
//        return designerDesigntoolFilesRepository.getAllReq(designer_id);
//    }
//
//    //Customer request filter...
//    public List<CustomerRequests> ReqFill(int designer_id, int status) {
//        return designerCustomerRequestsRepository.ReqFill(designer_id, status);
//
//    }
//    public CustomerRequests setAmt(int request_id, int amount) {
//        CustomerRequests customerRequests = designerCustomerRequestsRepository.findById(Long.valueOf(request_id)).orElse(null);
//        customerRequests.setAmount(String.valueOf(amount));
//        return designerCustomerRequestsRepository.save(customerRequests);
//    }
//
//    public List<CustomerRequests> getByDesigner_id(int designer_id) {
//        return designerCustomerRequestsRepository.getCustomerRequestsByDesigner_id(designer_id);
//    }
//
//    public int getMaxDesignID() {
//        return designerDesigntoolFilesRepository.getMaxDesignID();
//    }
//
//    public void updateImage(MyDesigns myDesigns) {
//        designerMyDesignsRepository.save(myDesigns);
//    }
//
//    public DesigntoolFiles getDesignFileByID(int id) {
//        return designerDesigntoolFilesRepository.findDesigntoolFilesByid(id);
//    }
//
//    public List<MyDesigns> getDesignByRoomType(String roomType) {
//        return designerMyDesignsRepository.findMyDesignsByRoomtype(roomType);
//    }
//
//    public List<String> getDistinctRoomTypes() {
//        return designerMyDesignsRepository.getDistinctRoomTypes();
//    }
//}
//
