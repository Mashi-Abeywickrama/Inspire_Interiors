package inspireinteriors.dev.service;


import inspireinteriors.dev.controller.ShippingAddressController;
import inspireinteriors.dev.model.ShippingAddress;
import inspireinteriors.dev.repository.ShippingAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public ShippingAddress getAddressByAddressId(int addressid) {
        return addressRepository.findByAddressid(addressid);
    }

    public List<ShippingAddress> getShippingAddressesByCustomerid(Integer customerid) {
        return addressRepository.findByCustomerid(customerid);
    }

    public void updateAddress(ShippingAddressController.AddressRequest updatedAddress) {
        ShippingAddress address = addressRepository.findByAddressid(updatedAddress.getAddressId());
        address.setTag(updatedAddress.getTag());
        address.setAddress_title(updatedAddress.getAddressTitle());
        address.setLane(updatedAddress.getLane());
        address.setCity(updatedAddress.getCity());
        address.setDistrict(updatedAddress.getDistrict());
        address.setProvince(updatedAddress.getProvince());
        addressRepository.save(address);
    }

    public boolean deleteAddressById(Integer addressId) {
        // Check if the address with the given ID exists
        ShippingAddress existingAddress = addressRepository.findByAddressid(addressId);
        if (existingAddress != null) {
            // If it exists, delete it
            addressRepository.delete(existingAddress);
            return true;
        }
        return false; // Address not found
    }

}
