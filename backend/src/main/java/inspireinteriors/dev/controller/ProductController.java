package inspireinteriors.dev.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import inspireinteriors.dev.model.ARModels;
import inspireinteriors.dev.model.Product;
import inspireinteriors.dev.model.Variation;
import inspireinteriors.dev.service.ARModelsService;
import inspireinteriors.dev.service.ProductService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    private ARModelsService arModelsService;

    @Autowired
    private ObjectMapper objectMapper;


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
        product.setProduct_description(productDetails.getProductDescription());
        product.setDiscount(productDetails.getProductDiscount());
        product.setType(productDetails.getProductType());
        product.setEntry_price(productDetails.getEntryPrice());
        product.setProductImg(uploadedFileName);// Save the image file path

        // Save the product to the database
        productService.saveProduct(product);
        // Process productDetails and imageFileName here
        // ... your logic to save the product and image details ...

        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("name", product.getProduct_name());
        jsonResponse.put("description", product.getProduct_description());
        jsonResponse.put("discount", product.getDiscount());
        jsonResponse.put("type", product.getType());
        jsonResponse.put("entryPrice", product.getEntry_price());
        jsonResponse.put("productImg", product.getProductImg());

        return ResponseEntity.ok(uploadedFileName);
    }

    @PostMapping("/addproducts")
    public ResponseEntity<Product> createdproduct(@RequestBody Product product){
        productService.createProduct(product);
        return ResponseEntity.ok(product);
    }

    @GetMapping("/viewproducts")
    public List<Product> getAllProducts() {
        return (List<Product>) productService.getAllProducts();
    }

    @GetMapping("/viewproducts/{id}")
    public Product getProductById(@PathVariable Integer id) {
        return productService.getProductById(id);
    }

    //get product by vendor id
    @GetMapping("/viewproducts/v/{vendorid}")
    public ResponseEntity<List<Product>> getProductsByVendorId(@PathVariable(value = "vendorid") int vendor_id) {
        List<Product> products = productService.getProductsByVendorId(vendor_id);
        return ResponseEntity.ok(products);
    }

    @PostMapping("/addvariation")
    public Variation createVariation(@RequestBody Variation variation) {
        return productService.createvariation(variation);
    }

    @GetMapping("/viewvariations/v/{id}")
    public ResponseEntity<List<Variation>> getVariationsByvendorId(@PathVariable(value = "id") int product_id) {
        List<Variation> variations = productService.getVariationsByProductId(product_id);
        return ResponseEntity.ok(variations);
    }

    @GetMapping("/viewvariations/{id}")
    public ResponseEntity<List<Variation>> getVariationByProductId(@PathVariable(value = "id") int product_id) {
        List<Variation> variations = productService.getByProductId(product_id);
        return ResponseEntity.ok(variations);
    }

    @GetMapping("/viewvariations")
    public Iterable<Variation> getAllVariations() {
        return productService.getAllVariations();
    }

    //update product variations with product id
    @PutMapping("/updatevariations/{id}")
    public ResponseEntity<String> updateVariation(
            @PathVariable("id") Integer variation_id,
            @RequestBody VariationDetails updatedVariation) {
        String material = updatedVariation.getMaterial();
        String color = updatedVariation.getColor();
        int quantity = updatedVariation.getQuantity();

        boolean variationUpdated = productService.updateVariation(
                variation_id,
                material,
                color,
                quantity
        );

        if(variationUpdated){
            return ResponseEntity.ok("Variation updated successfully");
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Variation update failed");
        }
    }

    @PutMapping("/updateproduct/v/{id}")
    public ResponseEntity<Product> updatedProduct(
            @PathVariable("id") Integer vendor_id,
            @RequestBody Product updatedProduct
    ) {
        Product product = productService.getProductById(vendor_id);

        if (product == null) {
            return ResponseEntity.notFound().build();
        }

        if (updatedProduct.getProduct_name() != null) {
            product.setProduct_name(updatedProduct.getProduct_name());
        }

        if (updatedProduct.getProduct_description() != null) {
            product.setProduct_description(updatedProduct.getProduct_description());
        }

        if (updatedProduct.getDiscount() != 0) {
            product.setDiscount(updatedProduct.getDiscount());
        }

        if (updatedProduct.getType() != null) {
            product.setType(updatedProduct.getType());
        }

        if (updatedProduct.getEntry_price() != null) {
            product.setEntry_price(updatedProduct.getEntry_price());
        }

        if (updatedProduct.getProductImg() != null) {
            product.setProductImg(updatedProduct.getProductImg());
        }

        productService.saveProduct(product);
        return ResponseEntity.ok(product);
    }

    @PutMapping("/updateproducts/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable("id") Integer id,
            @RequestBody Product updatedProduct
    ) {
        Product product = productService.getProductById(id);

        if (product == null) {
            return ResponseEntity.notFound().build();
        }

        if (updatedProduct.getProduct_name() != null) {
            product.setProduct_name(updatedProduct.getProduct_name());
        }

        if (updatedProduct.getProduct_description() != null) {
            product.setProduct_description(updatedProduct.getProduct_description());
        }

        if (updatedProduct.getDiscount() != 0) {
            product.setDiscount(updatedProduct.getDiscount());
        }

        if (updatedProduct.getType() != null) {
            product.setType(updatedProduct.getType());
        }

        if (updatedProduct.getEntry_price() != null) {
            product.setEntry_price(updatedProduct.getEntry_price());
        }

        if (updatedProduct.getProductImg() != null) {
            product.setProductImg(updatedProduct.getProductImg());
        }

        productService.saveProduct(product);
        return ResponseEntity.ok(product);
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

    public static class VariationDetails{
        @JsonProperty("material")
        private String material;
        @JsonProperty("color")
        private String color;
        @JsonProperty("quantity")
        private int quantity;

        public VariationDetails() {
        }

        public VariationDetails(String material, String color, int quantity) {
            this.material = material;
            this.color = color;
            this.quantity = quantity;
        }

        public String getMaterial() {
            return material;
        }

        public void setMaterial(String material) {
            this.material = material;
        }

        public String getColor() {
            return color;
        }

        public void setColor(String color) {
            this.color = color;
        }

        public int getQuantity() {
            return quantity;
        }

        public void setQuantity(int quantity) {
            this.quantity = quantity;
        }
    }


    public static class ProductDetails {
        @JsonProperty("productName")
        private String productName;
        @JsonProperty("productDescription")
        private String productDescription;
        @JsonProperty("productDiscount")
        private int productDiscount;
        @JsonProperty("productType")
        private String productType;
        @JsonProperty("entryPrice")
        private String entryPrice;
        @JsonProperty("productImg")
        private String productImg;

        public ProductDetails() {
        }

        public ProductDetails(String productName, String productDescription, int discount, String productType, String entryPrice) {
            this.productName = productName;
            this.productDescription = productDescription;
            this.productDiscount = discount;
            this.productType = productType;
            this.entryPrice = entryPrice;
        }

        public ProductDetails(String productName, String productDescription, int discount, String productType, String entryPrice, String productImg) {
            this.productName = productName;
            this.productDescription = productDescription;
            this.productDiscount = discount;
            this.productType = productType;
            this.entryPrice = entryPrice;
            this.productImg = productImg;
        }

        public String getProductDescription() {return productDescription;}

        public void setProductDescription(String productDescription) {
            this.productDescription = productDescription;
        }

        public int getProductDiscount() {
            return productDiscount;
        }

        public void setProductDiscount(int productDiscount) {
            this.productDiscount = productDiscount;
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
    public ResponseEntity<List<Product>> getAllProductsByRoomType(@PathVariable String roomType) {
        List<Product> products = (List<Product>) productService.getAllProductsByRoomType(roomType);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/type")
//    get available types
    public List<String> getAvailableTypes() {
        return productService.getDistinctTypes();
    }

    @GetMapping("category-by-type/{type}")
    public ResponseEntity<List<Product>> getAllProductsByType(@PathVariable String type) {
        List<Product> products = (List<Product>) productService.getAllProductsByType(type);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable(value = "id") int id) {
        Product product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @GetMapping("/review/{id}")
    //get all details from review table according to id
    public ResponseEntity<List<Variation>> getReviewByProductId(@PathVariable(value = "id") int product_id) {
        List<Variation> variations = productService.getByProductId(product_id);
        return ResponseEntity.ok(variations);
    }

    @GetMapping("/armodel/{id}")
    public ResponseEntity <ARModels> getARModelByProductId(@PathVariable(value = "id") String product_id) {
       ARModels arModels = arModelsService.getARModelByProductId(product_id);
        return ResponseEntity.ok(arModels);
    }

}
