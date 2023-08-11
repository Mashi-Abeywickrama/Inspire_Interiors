package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Vendor;
import inspireinteriors.dev.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class VendorService{

    @Autowired
    private VendorRepository vendorRepository;

    public Vendor createVendor(int vendor_id, String lane_no , String city , String district, String province) {
        Vendor vendor = new Vendor(vendor_id,lane_no ,city ,district,province);
        return vendorRepository.save(vendor);
    }

}
