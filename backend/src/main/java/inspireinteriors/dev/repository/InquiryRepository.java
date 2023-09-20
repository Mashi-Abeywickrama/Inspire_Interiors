package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Inquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface InquiryRepository extends JpaRepository<Inquiry, Integer> {
    @Query("SELECT i FROM Inquiry i WHERE i.inquiry_reference = :reference")
    Inquiry findByInquiryReference(@Param("reference") String inquiry_reference);
    Iterable<Inquiry> findAllByInquiryType(String refund);
}
