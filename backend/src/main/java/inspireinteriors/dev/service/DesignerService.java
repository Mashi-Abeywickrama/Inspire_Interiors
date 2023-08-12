package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Designer;
import inspireinteriors.dev.repository.DesignerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DesignerService {

    @Autowired
    private DesignerRepository designerRepository;

    public Designer createDesigner(int designer_id, String lane_no , String city , String district, String province) {
        Designer designer = new Designer(designer_id,lane_no ,city ,district,province);
        return designerRepository.save(designer);
    }

}
