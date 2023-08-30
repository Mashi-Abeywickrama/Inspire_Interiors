package inspireinteriors.dev.service;


import inspireinteriors.dev.model.DesignerMyDesigns;
import inspireinteriors.dev.repository.DesignerMyDesignsRepository;
import org.springframework.beans.factory.annotation.Autowired;
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





}
