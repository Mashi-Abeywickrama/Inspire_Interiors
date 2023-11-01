package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Designer;
import inspireinteriors.dev.repository.Designer.DesignerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DesignerService {

    @Autowired
    private DesignerRepository designerRepository;

    public Designer createDesigner(int designer_id, String lane_no , String city , String district, String province, String bio, String specialities, double averagereview) {
        Designer designer = new Designer(designer_id,lane_no ,city ,district,province, bio, specialities, averagereview);
        return designerRepository.save(designer);
    }

    public int getDesigner(int designerid) {
        return designerRepository.findById((long) designerid).orElse(null).getDesigner_id();
    }

    public Designer getDesignerByID(int designer_id) {
        return designerRepository.findDesignerByDesigner_id(designer_id);
    }

    public List<Designer> getAllDesigners() {
        return designerRepository.findAll();
    }
}
