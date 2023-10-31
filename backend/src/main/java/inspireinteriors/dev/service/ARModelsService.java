package inspireinteriors.dev.service;

import inspireinteriors.dev.model.ARModels;
import inspireinteriors.dev.repository.ARModelsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ARModelsService {

    @Autowired
    private ARModelsRepository arModelsRepository;


    public ARModels getARModelByProductId(String productId) {
        return arModelsRepository.findByProductId(productId);
    }

    public ARModels createARModel(ARModels arModels) {
        return arModelsRepository.save(arModels);
    }

    public ARModels getARModelById(Integer modelId) {
        return arModelsRepository.findById(modelId).orElse(null);
    }

    public void updateModelImage(ARModels arModels) {
        arModelsRepository.save(arModels);
    }
}
