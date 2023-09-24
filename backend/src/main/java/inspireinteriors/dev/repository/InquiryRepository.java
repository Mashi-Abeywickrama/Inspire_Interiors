package inspireinteriors.dev.repository;

import inspireinteriors.dev.model.Inquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface InquiryRepository extends JpaRepository<Inquiry, Integer> {
    @Query("SELECT i FROM Inquiry i WHERE i.inquiry_reference = :reference")
    Inquiry findByInquiryReference(@Param("reference") String inquiry_reference);
    Iterable<Inquiry> findAllByInquiryType(String refund);

    @Query("SELECT i.inquiry_date  , COUNT(i) " +
            "FROM Inquiry i " +
            "WHERE CAST(i.inquiry_date AS date) >= :sevenDaysAgo " +
            "AND i.inquiryType = 'quotations' " +
            "GROUP BY i.inquiry_date " +
            "ORDER BY i.inquiry_date")
    List<Object[]> getCountOfInquiriesByDateForLast7Days(@Param("sevenDaysAgo") Date sevenDaysAgo);

    @Query("SELECT i.inquiry_date  , COUNT(i) " +
            "FROM Inquiry i " +
            "WHERE CAST(i.inquiry_date AS date) >= :sevenDaysAgo " +
            "AND i.inquiryType = 'refund' " +
            "GROUP BY i.inquiry_date " +
            "ORDER BY i.inquiry_date")
    List<Object[]> getCountRefund(@Param("sevenDaysAgo") Date sevenDaysAgo);

    @Query("SELECT i.inquiry_date  , COUNT(i) " +
            "FROM Inquiry i " +
            "WHERE CAST(i.inquiry_date AS date) >= :sevenDaysAgo " +
            "AND i.inquiryType = 'orderComplaints' " +
            "GROUP BY i.inquiry_date " +
            "ORDER BY i.inquiry_date")
    List<Object[]> getCountComplaint(@Param("sevenDaysAgo") Date sevenDaysAgo);

}
