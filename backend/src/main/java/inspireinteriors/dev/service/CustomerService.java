package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Customer;
import inspireinteriors.dev.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer createCustomer(int customer_id,String lane_no ,String city ,String district,String province) {
        Customer customer = new Customer(customer_id,lane_no ,city ,district,province);
        return customerRepository.save(customer);
    }

}
