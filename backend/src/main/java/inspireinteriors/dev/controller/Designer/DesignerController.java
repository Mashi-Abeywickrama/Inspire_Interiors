package inspireinteriors.dev.controller.Designer;


import inspireinteriors.dev.model.DesignerModel.MyDesigns;
import inspireinteriors.dev.service.Designer.DesignerMyDesignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public List<MyDesigns> getAllDesigns(){
        return designerMyDesignService.getAllDesigns();
    }
    @GetMapping("mydesigns/{id}")
    public ResponseEntity<MyDesigns> getDesignById(@PathVariable(value = "id") int design_id){
        MyDesigns design = designerMyDesignService.getDesignById(design_id);
        return ResponseEntity.ok().body(design);
    }


    @PostMapping("/adddesign")
    public MyDesigns createDesign(@RequestBody MyDesigns design){
        designerMyDesignService.addDesign(design);
        return (design);




    }

}
