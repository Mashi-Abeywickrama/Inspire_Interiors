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


    @PutMapping("/addproductimage")
    public ResponseEntity<String> createProduct(
            @RequestParam("productDetails") Integer productID,
            @RequestParam("imageFile") MultipartFile imageFile
    ) throws JsonProcessingException, IOException, JSONException {
        System.out.println("Product ID: " + productID);

        // Handle image upload
        String uploadedFileName = handleImageUpload(imageFile, productID);


//
        Product product = productService.getProductById(productID);
        product.setProductImg(productID+".jpg");
        productService.updateProfilePic(product);
//
        return ResponseEntity.ok(uploadedFileName);
    }

    @PutMapping("/setVariationPic")
    public ResponseEntity<String> updateVariationPic(
            @RequestParam("variationId") Integer variationId,
            @RequestParam("file") MultipartFile imageFile
    ) throws JsonProcessingException, IOException, JSONException {

//         Handle image upload
        String uploadedFileName = handleVariationImageUpload(imageFile, variationId);
//        System.out.println("Variation ID: " + imageFile.getOriginalFilename());


//
        Variation variation = productService.getVariationById(variationId);
        variation.setVariationImg(variationId+".jpg");
        productService.updateVariationImage(variation);
//
        return ResponseEntity.ok(variationId+".jpg");
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
    @GetMapping("/viewproducts/vendor/{vendorid}")
    public ResponseEntity<List<Product>> getProductsByVendorId(@PathVariable(value = "vendorid") int vendor_id) {
        List<Product> products = productService.getProductsByVendorId(vendor_id);
        return ResponseEntity.ok(products);
    }

    @PostMapping("/addvariation")
    public Variation createVariation(@RequestBody Variation variation) {
        return productService.createvariation(variation);
    }

    @GetMapping("/viewvariations/vendor/{id}")
    public ResponseEntity<List<Variation>> getVariationsByvendorId(@PathVariable(value = "id") int product_id) {
        List<Variation> variations = productService.getVariationsByProductId(product_id);
        return ResponseEntity.ok(variations);
    }

    @GetMapping("/viewvariations/product/{id}")
    public ResponseEntity<List<Variation>> getVariationByProductId(@PathVariable(value = "id") int product_id) {
        List<Variation> variations = productService.getByProductId(product_id);
        return ResponseEntity.ok(variations);
    }

    @GetMapping("/viewvariations")
    public Iterable<Variation> getAllVariations() {
        return productService.getAllVariations();
    }

    @GetMapping("/viewvariations/{id}")
    public Variation getVariationById(@PathVariable Integer id) {
        return productService.getVariationById(id);
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

    @PutMapping("/updateproduct/vendor/{id}")
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


    private String handleImageUpload(MultipartFile imageFile, Integer productID) {




        if (imageFile == null || imageFile.isEmpty()) {
            return null; // No image provided
        }

        String fileName = productID + ".jpg";


        String currentWorkingDirectory = System.getProperty("user.dir");

        // Construct the relative path to the parent folder
        String parentFolderRelativePath = ".." + File.separator + "Inspire Interiors";

// Combine with the current working directory to get the absolute path
        String parentFolderAbsolutePath = currentWorkingDirectory + File.separator + parentFolderRelativePath;

        System.out.println(parentFolderAbsolutePath);

        String filePath =parentFolderAbsolutePath +"/src/assets/img/product"+  File.separator  + fileName;

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

    private String handleVariationImageUpload(MultipartFile imageFile, Integer variationID) {




        if (imageFile == null || imageFile.isEmpty()) {
            return null; // No image provided
        }

        String fileName = variationID + ".jpg";


        String currentWorkingDirectory = System.getProperty("user.dir");

        // Construct the relative path to the parent folder
        String parentFolderRelativePath = ".." + File.separator + "Inspire Interiors";

// Combine with the current working directory to get the absolute path
        String parentFolderAbsolutePath = currentWorkingDirectory + File.separator + parentFolderRelativePath;

        System.out.println(parentFolderAbsolutePath);

        String filePath =parentFolderAbsolutePath +"/src/assets/img/variation"+  File.separator  + fileName;

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
