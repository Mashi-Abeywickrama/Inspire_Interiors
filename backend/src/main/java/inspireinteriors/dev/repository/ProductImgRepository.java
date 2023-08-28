package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.ProductImg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductImgRepository extends JpaRepository<ProductImg, ProductImg.ProductImgId> {

}
