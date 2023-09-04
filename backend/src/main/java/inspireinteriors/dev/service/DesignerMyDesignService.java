package inspireinteriors.dev.service;


import inspireinteriors.dev.model.DesignerMyDesigns;
import inspireinteriors.dev.repository.DesignerMyDesignsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DesignerMyDesignService {

    //inject repository
    @Autowired
    private DesignerMyDesignsRepository designerMyDesignsRepository;



    public List<DesignerMyDesigns> getAllDesigns() {
      return designerMyDesignsRepository.findAll();


   }


    public DesignerMyDesignService(DesignerMyDesignsRepository designerMyDesignsRepository) {
        this.designerMyDesignsRepository = designerMyDesignsRepository;
    }

 public DesignerMyDesigns addDesign(DesignerMyDesigns design){
        return designerMyDesignsRepository.save(design);

 }


    public DesignerMyDesigns getDesignById(int design_id) {
        return designerMyDesignsRepository.findById((long) design_id).orElse(null);
    }
}
