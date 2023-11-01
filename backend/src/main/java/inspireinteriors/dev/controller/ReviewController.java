package inspireinteriors.dev.controller;

import inspireinteriors.dev.model.Review;
import inspireinteriors.dev.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/drating/{designId}")
    public Map<String, Object> getDesignReviewsWithName(@PathVariable Long designId) {
        List<Review> reviews = reviewService.getReviewsByDesignId(designId);
//        System.out.println(reviews);
        double averageRating = reviewService.getAverageDRating(designId);
        long totalVotes = reviewService.getTotalVotesD(designId);

        // Create a response object to return reviews, average rating, and total votes
        Map<String, Object> response = Map.of(
                "reviews", reviews,
                "averageRating", averageRating,
                "totalVotes", totalVotes
        );

        return response;
    }
    @PostMapping("/rating")
    public Review addReview(@RequestBody Review review) {
        System.out.println(review);
        return reviewService.addReview(review);
    }


}
