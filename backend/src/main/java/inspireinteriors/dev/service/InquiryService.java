package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Inquiry;
import inspireinteriors.dev.repository.InquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.text.DateFormatSymbols;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import java.util.stream.IntStream;


@Service
public class InquiryService {

    @Autowired
    private InquiryRepository inquiryRepository;


    public Inquiry getInquiryByReference(String referenceNo) {
        return inquiryRepository.findByInquiryReference(referenceNo);
    }

    public boolean saveInquiry(Inquiry inquiry) {
        inquiryRepository.save(inquiry);
        return true;
    }


    public Iterable<Inquiry> getAllInquiries() {
        return inquiryRepository.findAll();

    }

    public Inquiry getInquiryById(int inquiryId) {
        return inquiryRepository.findById(inquiryId).orElse(null);
    }

    public Iterable<Inquiry> getRefundInquiries() {
        return inquiryRepository.findAllByInquiryType("refund");
    }

    public List<Object[]> getCountOfInquiriesByDateForLast7Days() {
        // Calculate the date 7 days ago from today
        Date sevenDaysAgo = new Date(System.currentTimeMillis() - 7 * 24 * 60 * 60 * 1000);

        // Execute the repository query to get counts
        List<Object[]> counts = inquiryRepository.getCountOfInquiriesByDateForLast7Days(sevenDaysAgo);

        // Create a map to store the counts by date
        Map<String, Object[]> countsMap = new HashMap<>();
        for (Object[] row : counts) {
            countsMap.put((String) row[0], row);
        }

        // Generate a list of dates for the last 7 days, including today
        List<Date> dateList = IntStream.range(0, 7)
                .mapToObj(i -> new Date(sevenDaysAgo.getTime() + TimeUnit.DAYS.toMillis(i)))
                .collect(Collectors.toList());

        // Create the result list, filling in missing dates with 0 counts
        List<Object[]> resultList = new ArrayList<>();
        DateFormatSymbols dateFormatSymbols = new DateFormatSymbols();
        for (Date date : dateList) {
            String dateString = new SimpleDateFormat("yyyy-MM-dd").format(date);

            // Convert java.sql.Date to LocalDate
            java.time.LocalDate localDate = date.toLocalDate();

            String dayName = dateFormatSymbols.getShortWeekdays()[localDate.getDayOfWeek().getValue()];

            if (countsMap.containsKey(dateString)) {
                // Add the day name and count to the result
                Object[] row = countsMap.get(dateString);
                row[0] = dayName;
                resultList.add(row);
            } else {
                // Add a row with the day name and 0 count for missing dates
                resultList.add(new Object[]{dayName, 0});
            }
        }

        return resultList;
    }

    public List<Object[]> getCountOfRefund() {
        // Calculate the date 7 days ago from today
        Date sevenDaysAgo = new Date(System.currentTimeMillis() - 7 * 24 * 60 * 60 * 1000);

        // Execute the repository query to get counts
        List<Object[]> counts = inquiryRepository.getCountRefund(sevenDaysAgo);

        // Create a map to store the counts by date
        Map<String, Object[]> countsMap = new HashMap<>();
        for (Object[] row : counts) {
            countsMap.put((String) row[0], row);
        }

        // Generate a list of dates for the last 7 days, including today
        List<Date> dateList = IntStream.range(0, 7)
                .mapToObj(i -> new Date(sevenDaysAgo.getTime() + TimeUnit.DAYS.toMillis(i)))
                .collect(Collectors.toList());

        // Create the result list, filling in missing dates with 0 counts
        List<Object[]> resultList = new ArrayList<>();
        DateFormatSymbols dateFormatSymbols = new DateFormatSymbols();
        for (Date date : dateList) {
            String dateString = new SimpleDateFormat("yyyy-MM-dd").format(date);

            // Convert java.sql.Date to LocalDate
            java.time.LocalDate localDate = date.toLocalDate();

            String dayName = dateFormatSymbols.getShortWeekdays()[localDate.getDayOfWeek().getValue()];

            if (countsMap.containsKey(dateString)) {
                // Add the day name and count to the result
                Object[] row = countsMap.get(dateString);
                row[0] = dayName;
                resultList.add(row);
            } else {
                // Add a row with the day name and 0 count for missing dates
                resultList.add(new Object[]{dayName, 0});
            }
        }

        return resultList;
    }

    public List<Object[]> getCountOfComplaint() {
        // Calculate the date 7 days ago from today
        Date sevenDaysAgo = new Date(System.currentTimeMillis() - 7 * 24 * 60 * 60 * 1000);

        // Execute the repository query to get counts
        List<Object[]> counts = inquiryRepository.getCountComplaint(sevenDaysAgo);

        // Create a map to store the counts by date
        Map<String, Object[]> countsMap = new HashMap<>();
        for (Object[] row : counts) {
            countsMap.put((String) row[0], row);
        }

        // Generate a list of dates for the last 7 days, including today
        List<Date> dateList = IntStream.range(0, 7)
                .mapToObj(i -> new Date(sevenDaysAgo.getTime() + TimeUnit.DAYS.toMillis(i)))
                .collect(Collectors.toList());

        // Create the result list, filling in missing dates with 0 counts
        List<Object[]> resultList = new ArrayList<>();
        DateFormatSymbols dateFormatSymbols = new DateFormatSymbols();
        for (Date date : dateList) {
            String dateString = new SimpleDateFormat("yyyy-MM-dd").format(date);

            // Convert java.sql.Date to LocalDate
            java.time.LocalDate localDate = date.toLocalDate();

            String dayName = dateFormatSymbols.getShortWeekdays()[localDate.getDayOfWeek().getValue()];

            if (countsMap.containsKey(dateString)) {
                // Add the day name and count to the result
                Object[] row = countsMap.get(dateString);
                row[0] = dayName;
                resultList.add(row);
            } else {
                // Add a row with the day name and 0 count for missing dates
                resultList.add(new Object[]{dayName, 0});
            }
        }

        return resultList;
    }
}
