package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Salary;
import inspireinteriors.dev.model.User;
import inspireinteriors.dev.repository.SalaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaryService {
    @Autowired
    private SalaryRepository salaryRepository;

    public List<Salary> getSalaries() { return this.salaryRepository.findAll();}

}
