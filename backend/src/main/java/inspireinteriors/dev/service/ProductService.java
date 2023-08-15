package inspireinteriors.dev.service;

import inspireinteriors.dev.repository.ProductImgRepository;
import inspireinteriors.dev.repository.ProductRepository;
import inspireinteriors.dev.repository.VariationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductImgRepository productImgRepository;

    @Autowired
    private VariationRepository variationRepository;


}
