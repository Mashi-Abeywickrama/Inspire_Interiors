package inspireinteriors.dev.controller;


import inspireinteriors.dev.model.DesignerMyDesigns;
import inspireinteriors.dev.repository.DesignerMyDesignsRepository;
import inspireinteriors.dev.service.DesignerMyDesignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/designer")
public class DesignerController {

    //inject service
    @Autowired
    private DesignerMyDesignService designerMyDesignService;



//get all designs
    @GetMapping("/mydesigns")
    @ResponseBody
    public List<DesignerMyDesigns> getAllDesigns(){
        return designerMyDesignService.getAllDesigns();
    }

}
