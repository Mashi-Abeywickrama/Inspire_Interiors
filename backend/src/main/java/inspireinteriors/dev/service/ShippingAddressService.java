package inspireinteriors.dev.service;


import inspireinteriors.dev.model.ShippingAddress;
import inspireinteriors.dev.repository.ShippingAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShippingAddressService {
    @Autowired
    private ShippingAddressRepository addressRepository;

    public ShippingAddressService(ShippingAddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    public ShippingAddress createAddress ( String tag, String address_title, String lane, String city, String district, String province, int customer_id) {
        ShippingAddress shippingAddress = new ShippingAddress(tag, address_title, lane, city, district, province, customer_id);
        return addressRepository.save(shippingAddress);
    }
}
