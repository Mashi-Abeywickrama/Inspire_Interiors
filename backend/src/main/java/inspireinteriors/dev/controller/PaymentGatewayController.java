package inspireinteriors.dev.controller;

import inspireinteriors.dev.client.StripeClient;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/payment")
public class PaymentGatewayController {

    private StripeClient stripeClient;
    @Autowired
    PaymentGatewayController(StripeClient stripeClient) {
        this.stripeClient = stripeClient;
    }
    @PostMapping("/charge")
    public Charge chargeCard(@RequestHeader(value="token") String token, @RequestHeader(value="amount") Double amount) throws Exception {
        return this.stripeClient.chargeNewCard(token, amount);
    }
}
