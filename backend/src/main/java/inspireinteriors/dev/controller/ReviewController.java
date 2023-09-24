package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Review;
import inspireinteriors.dev.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("/rating/{productId}")
    public Map<String, Object> getProductReviews(@PathVariable Long productId) {
        List<Review> reviews = reviewService.getReviewsByProductId(productId);
        double averageRating = reviewService.getAverageRating(productId);
        long totalVotes = reviewService.getTotalVotes(productId);

        // Create a response object to return reviews, average rating, and total votes
        Map<String, Object> response = Map.of(
                "reviews", reviews,
                "averageRating", averageRating,
                "totalVotes", totalVotes
        );

        return response;
    }

    @GetMapping("/ratingwithname/{productId}")
    public Map<String, Object> getProductReviewsWithName(@PathVariable Long productId) {
        List<String> reviews = reviewService.getReviewsWithName(productId);
        System.out.println(reviews);
        double averageRating = reviewService.getAverageRating(productId);
        long totalVotes = reviewService.getTotalVotes(productId);

        // Create a response object to return reviews, average rating, and total votes
        Map<String, Object> response = Map.of(
                "reviews", reviews,
                "averageRating", averageRating,
                "totalVotes", totalVotes
        );

        return response;
    }


}
