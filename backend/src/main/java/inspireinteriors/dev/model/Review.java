package inspireinteriors.dev.model;

import jakarta.persistence.*;

@Table(name = "review")
@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reviewId")
    private int reviewId;

    @Column(name = "productId")
    private int productId;

    @Column(name = "designId")
    private int designId;

    @Column(name = "userId")
    private int userId;

    @Column(name = "starRating")
    private int starRating;

    @Column(name = "review")
    private String review;

    @Column(name = "reviewDate")
    private String reviewDate;

//    constructor

    public Review() {
    }

    public Review(int reviewId, int productId, int userId, int starRating, String review, String reviewDate) {
                this.reviewId = reviewId;
                this.productId = productId;
                this.designId = designId;
                this.userId = userId;
                this.starRating = starRating;
                this.review = review;
                this.reviewDate = reviewDate;
    }

    public Review(int productId, int userId, int starRating, String review, String reviewDate) {
                this.productId = productId;
                this.designId = designId;
                this.userId = userId;
                this.starRating = starRating;
                this.review = review;
                this.reviewDate = reviewDate;
    }

    public Review(int productId, int userId, int starRating, String review) {
                this.productId = productId;
                this.designId = designId;
                this.userId = userId;
                this.starRating = starRating;
                this.review = review;
    }

    public Review(int productId, int userId, int starRating) {
                this.productId = productId;
                this.designId = designId;
                this.userId = userId;
                this.starRating = starRating;
    }

    public Review(int productId, int userId) {
                this.productId = productId;
                this.designId = designId;
                this.userId = userId;
    }

    public Review(int productId) {
                this.productId = productId;
                this.designId = designId;
    }

    public Review(int productId, int userId, String review) {
                this.productId = productId;
                this.designId = designId;
                this.userId = userId;
                this.review = review;
    }

    public Review(int productId, int userId, String review, String reviewDate) {
                this.productId = productId;
                this.designId = designId;
                this.userId = userId;
                this.review = review;
                this.reviewDate = reviewDate;
    }


//    getters and setters

        public int getReviewId() {
            return reviewId;
        }

        public int getProductId() {
            return productId;
        }

        public int getDesignId() {
            return designId;
        }

        public int getUserId() {
            return userId;
        }

        public int getStarRating() {
            return starRating;
        }

        public String getReview() {
            return review;
        }

        public String getReviewDate() {
            return reviewDate;
        }

        public void setReviewId(int reviewId) {
            this.reviewId = reviewId;
        }

        public void setProductId(int productId) {
            this.productId = productId;
        }

        public void setDesignId(int designId) {
            this.designId = designId;
        }
        public void setUserId(int userId) {
            this.userId = userId;
        }

        public void setStarRating(int starRating) {
            this.starRating = starRating;
        }

        public void setReview(String review) {
            this.review = review;
        }

        public void setReviewDate(String reviewDate) {
            this.reviewDate = reviewDate;
        }



}
