
//package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface SalaryRepository extends JpaRepository<Salary,Integer> {

    Salary findByUsernameAndPassword(String username, String password);

    Salary findByUserid(int userid);

    Salary findProfileByUserid(int userid); // get user by id
}

package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface SalaryRepository extends JpaRepository<Salary,Integer> {

//    Salary findByUsernameAndPassword(String username, String password);

    Salary findByUsername(String username);

    Salary findProfileByUserid(int userid); // get user by id
}

