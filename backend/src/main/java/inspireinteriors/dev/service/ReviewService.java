package inspireinteriors.dev.service;

import inspireinteriors.dev.model.Review;
import inspireinteriors.dev.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;


    public List<Review> getReviewsByProductId(Long productId) {
        return reviewRepository.findByProductId(productId);
    }

    public double getAverageRating(Long productId) {
        List<Review> reviews = reviewRepository.findByProductId(productId);

        double totalRating = 0.0;
        int count = 0;

        for (Review review : reviews) {
            Integer rating = review.getStarRating();
            try {
                totalRating += rating;
                count++;
            } catch (NumberFormatException e) {
                // Handle parsing error if necessary
            }
        }

        // Calculate the average rating
        if (count > 0) {
            return totalRating / count;
        } else {
            return 0.0; // No valid ratings found, return 0.0
        }
    }

    public long getTotalVotes(Long productId) {
        // Count the total number of reviews as total votes for the product
        return reviewRepository.countByProductId(productId);
    }
}
