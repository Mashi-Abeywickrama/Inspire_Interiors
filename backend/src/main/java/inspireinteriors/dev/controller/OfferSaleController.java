package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.OfferSale;
import inspireinteriors.dev.service.OfferSaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OfferSaleController {
    @Autowired
    private OfferSaleService offerSaleService;

    @GetMapping("/getoffersale")
    public List<OfferSale> getOfferSale() {return this.offerSaleService.getOfferSale();}

    @GetMapping("/getoffersale/vendor/{id}")
    public List<OfferSale> getOfferSaleByVendorId(@PathVariable("id") int vendorid) {return this.offerSaleService.findByVendorId(vendorid);}

    @PostMapping("/addoffersale")
    public OfferSale addOfferSale(@RequestBody OfferSale offerSale) {return this.offerSaleService.addOfferSale(offerSale);}

}
