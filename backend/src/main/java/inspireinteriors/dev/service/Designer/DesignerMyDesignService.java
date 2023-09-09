package inspireinteriors.dev.service.Designer;


import inspireinteriors.dev.model.DesignerModel.MyDesigns;
import inspireinteriors.dev.repository.Designer.DesignerMyDesignsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DesignerMyDesignService {

    //inject repository
    @Autowired
    private DesignerMyDesignsRepository designerMyDesignsRepository;



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
}
