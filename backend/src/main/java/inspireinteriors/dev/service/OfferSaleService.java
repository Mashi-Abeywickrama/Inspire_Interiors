package inspireinteriors.dev.service;

import inspireinteriors.dev.model.OfferSale;
import inspireinteriors.dev.repository.OfferSaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferSaleService {
    @Autowired
    private OfferSaleRepository offerSaleRepository;

    public List<OfferSale> getOfferSale() {
        return this.offerSaleRepository.findAll();
    }

    public OfferSale addOfferSale(OfferSale offerSale) {
        return this.offerSaleRepository.save(offerSale);
    }
}
