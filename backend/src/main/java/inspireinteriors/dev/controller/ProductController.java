package inspireinteriors.dev.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import inspireinteriors.dev.model.Product;
import inspireinteriors.dev.service.ProductService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ProductController {

    private static final String UPLOAD_PATH = "/path/to/your/upload/folder/";

    @Autowired
    private ProductService productService;
    @Autowired
    private ObjectMapper objectMapper;


//    @GetMapping("/products")
//    @ResponseBody
//    public Iterable<Product> getAllProducts() {
//        return productService.getAllProducts();
//    }

    @PostMapping("/products")
    public ResponseEntity<String> createProduct(
            @RequestParam("productDetails") String productDetailsJson,
            @RequestParam("imageFile") MultipartFile imageFile
    ) throws JsonProcessingException, IOException, JSONException {
        ProductDetails productDetails = objectMapper.readValue(productDetailsJson, ProductDetails.class);

        // Handle image upload
        String uploadedFileName = handleImageUpload(imageFile);


        Product product = new Product();
        product.setProduct_name(productDetails.getProductName());
        product.setType(productDetails.getProductType());
        product.setEntry_price(productDetails.getEntryPrice());
        product.setProductImg(uploadedFileName); // Save the image file path

        // Save the product to the database
        productService.saveProduct(product);
        // Process productDetails and imageFileName here
        // ... your logic to save the product and image details ...

        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("name", product.getProduct_name());
        jsonResponse.put("type", product.getType());
        jsonResponse.put("entryPrice", product.getEntry_price());
        jsonResponse.put("productImg", product.getProductImg());


        return ResponseEntity.ok(uploadedFileName);
    }

    private String handleImageUpload(MultipartFile imageFile) {
        if (imageFile == null || imageFile.isEmpty()) {
            return null; // No image provided
        }

        String fileName = imageFile.getOriginalFilename();
        String filePath = "C:\\Users\\shint\\Documents\\GitHub\\Inspire_Interiors_new\\Inspire Interiors\\src\\assets\\img\\product\\" + fileName;

        try {
            // Create the directory structure if it doesn't exist
            File directory = new File(filePath).getParentFile();
            if (!directory.exists()) {
                directory.mkdirs();
            }

            File destFile = new File(filePath);
            imageFile.transferTo(destFile);

            return fileName; // Return the absolute path of the saved image
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static class ProductDetails {
        @JsonProperty("productName")
        private String productName;
        @JsonProperty("productType")
        private String productType;
        @JsonProperty("entryPrice")
        private String entryPrice;

        @JsonProperty("productImg")
        private String productImg;

        public ProductDetails() {
        }

        public ProductDetails(String productName, String productType, String entryPrice) {
            this.productName = productName;
            this.productType = productType;
            this.entryPrice = entryPrice;
        }

        public ProductDetails(String productName, String productType, String entryPrice, String productImg) {
            this.productName = productName;
            this.productType = productType;
            this.entryPrice = entryPrice;
            this.productImg = productImg;
        }

        public String getProductImg() {
            return productImg;
        }

        public void setProductImg(String productImg) {
            this.productImg = productImg;
        }

        public String getProductName() {
            return productName;
        }

        public void setProductName(String productName) {
            this.productName = productName;
        }

        public String getProductType() {
            return productType;
        }

        public void setProductType(String productType) {
            this.productType = productType;
        }

        public String getEntryPrice() {
            return entryPrice;
        }

        public void setEntryPrice(String entryPrice) {
            this.entryPrice = entryPrice;
        }


    }
    //get all room types
    @GetMapping("/room-types")
    public List<String> getAvailableRoomTypes() {
        return productService.getDistinctRoomTypes();
    }

    @GetMapping("/room-type/{roomType}")
    public ResponseEntity<List<Product>> getAllProductsByType(@PathVariable String roomType) {
        List<Product> products = (List<Product>) productService.getAllProductsByRoomType(roomType);
        return ResponseEntity.ok(products);
    }


}
