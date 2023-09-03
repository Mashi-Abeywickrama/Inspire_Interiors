package inspireinteriors.dev.controller;
import inspireinteriors.dev.model.Salary;
import inspireinteriors.dev.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
//@RequestMapping("/salary")
public class SalaryController {

    @Autowired
    private SalaryService salaryService;

    @GetMapping("/getsalary")
    public List<Salary> getSalary() {return this.salaryService.getSalaries();}


}
