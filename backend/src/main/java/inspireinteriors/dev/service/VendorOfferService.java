package inspireinteriors.dev.service;

import inspireinteriors.dev.model.VendorOffer;
import inspireinteriors.dev.repository.VendorOfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VendorOfferService {
    @Autowired
    private VendorOfferRepository vendorOfferRepository;

    //Create
    public VendorOffer createOffer(VendorOffer vendorOffer){

        vendorOffer.setOfferstatus("New");
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
}
