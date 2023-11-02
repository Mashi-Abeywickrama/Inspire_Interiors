package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.OfferSale;
import inspireinteriors.dev.service.OfferSaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OfferSaleController {
    @Autowired
    private OfferSaleService offerSaleService;

    @GetMapping("/getoffersale")
    public List<OfferSale> getOfferSale() {return this.offerSaleService.getOfferSale();}

    @PostMapping("/addoffersale")
    public OfferSale addOfferSale(@RequestBody OfferSale offerSale) {return this.offerSaleService.addOfferSale(offerSale);}

}
