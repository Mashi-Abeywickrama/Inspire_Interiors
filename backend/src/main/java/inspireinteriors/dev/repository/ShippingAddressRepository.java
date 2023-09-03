package inspireinteriors.dev.repository;


import inspireinteriors.dev.model.ShippingAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippingAddressRepository extends JpaRepository<ShippingAddress, Long> {

    ShippingAddress findByAddressid(int addressid);

}
