package inspireinteriors.dev.service;

import inspireinteriors.dev.model.VendorOffer;
import inspireinteriors.dev.repository.DesignerRepository;
import inspireinteriors.dev.repository.VendorOfferRepository;
import inspireinteriors.dev.repository.VendorRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VendorOfferService {
    @Autowired
    private VendorOfferRepository vendorOfferRepository;

    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private DesignerRepository designerRepository;


    //Create
//    public VendorOffer createOffer(VendorOffer vendorOffer, int vendorid) {
//        vendorOffer.setVendor(vendorRepository.findById((long) vendorid).orElse(null));
//        vendorOffer.setDesigner(designerRepository.findById((long) 1).orElse(null));
//        vendorOffer.setOfferstatus("New");
//        return vendorOfferRepository.save(vendorOffer);
//    }

    public VendorOffer createOffer(VendorOffer vendorOffer){
        vendorOffer.setOfferstatus("Wait for Response");
        return vendorOfferRepository.save(vendorOffer);
    }


    //Get
    public List<VendorOffer> getOffers() {
        List<VendorOffer> offerList = new ArrayList<>();

        vendorOfferRepository.findAll().forEach(VendorOffer -> offerList.add(VendorOffer));
        return offerList;
    }

    //Get single offer
    public VendorOffer getOffer(int offerid) {
        return vendorOfferRepository.findById((long) offerid).orElse(null);
    }

    //Update
    public VendorOffer updateOffer(VendorOffer vendorOffer){
        return vendorOfferRepository.save(vendorOffer);
    }

    //Delete
    public VendorOffer deleteOffer(int offerid) {
        boolean exists = vendorOfferRepository.existsById((long) offerid);
        if (!exists) {
            throw new IllegalStateException("Offer with id " + offerid + " does not exists");
        }
        VendorOffer vendorOffer = vendorOfferRepository.findById((long) offerid).orElse(null);
        vendorOfferRepository.deleteById((long) offerid);
        return vendorOffer;
    }

    public VendorOffer findById(int offerId) {
        return vendorOfferRepository.findById((long) offerId).orElseThrow(() -> new EntityNotFoundException("Offer not found: " + offerId));
    }
}
