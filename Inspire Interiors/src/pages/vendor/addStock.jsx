import {React,useState} from "react";

import "./../../styles/vendor/addStock.css";
import * as Icon from "react-bootstrap-icons";
import {Link} from 'react-router-dom';
import axios from "axios";

const AddStock = () => {

  const [productDetails, setProductDetails] = useState({
    product_name: "",
    product_description: "",
    discount: "",
    type: "chair",
    room_type: "living room",
    shipping_fee: 0,
    entry_price: 0,
    image: null,
  });

  const handleProductDetailsChange = (field, value) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };
  
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0]; // Get the selected image file
    handleProductDetailsChange("image", imageFile); // Update productDetails state with the selected image
  };

  const apiBaseURL = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const formData = new FormData();

    //   formData.append("productDetails", JSON.stringify(productDetails));
    //   formData.append("imageFile", productDetails.image); // Append the image to the formData

    //   const response = await axiosInstance.post("/addproducts",
    //     formData,
    //     { headers: { 'Content-Type': 'multipart/form-data' } }
    //   );
    //   if(response.status === 200)
    //   {
    //     console.log("Response from API:", response.data);

    //     // Clear the form after submission
    //     setProductDetails({
    //       productName: "",
    //       productDescription: "",
    //       productDiscount: "",
    //       productType: "",
    //       entryPrice: 0,
    //       image: null,
    //     });
    //   } 
    // }
    // catch (error) {
    //   console.error("Error submitting form:", error);
    // }
    try{
      const response = await axiosInstance.post("/addproducts", {
          product_name: productDetails.product_name,
          product_description: productDetails.product_description,
          discount: productDetails.discount,
          type: productDetails.type,
          room_type: productDetails.room_type,
          entry_price: productDetails.entry_price,
          shipping_fee: productDetails.shipping_fee,
          image: productDetails.image,
      });
      if(response.status === 200)
      {
        console.log("Response from API:", response.data);
        console.log("Creation Succesfully");
        window.location.href='/vendor/inventory/viewstock';
      }

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
    return (
        <>
            <div className="stock-container p-4 bg-white rounded-3 mb-4 me-3">
                <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row gap-4">
                    <Link to="/vendor/inventory"><p className="fs-5 fw-bold Cabin-text text-dark">Inventory</p></Link>
                    <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                    <Link to="/vendor/inventory/viewstock"><p className="fs-5 fw-bold Cabin-text text-dark">Stock</p></Link>
                    <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                    <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Add Stock</p>
                </div>
                <div className=" d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <p className="text-dark fs-6 fw-bold text-decoration-underline Cabin-text" style={{ color: "#035C94" }}>Add Stock Details</p>
                    </div>
                    <div className=" divider" />
                </div>
                
                <div className="d-flex flex-column">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label fs-6 Cabin-text">Product Name:</label>
                        <input
                            type="text"
                            className="form-control w-25 Cabin-text"
                            id="exampleFormControlInput1"
                            name="product_name"
                            placeholder="Enter product name here"
                            value={productDetails.product_name}  // Set the value from state
                            onChange={(e) =>
                                handleProductDetailsChange(e.target.name, e.target.value)
                            }
                            style={{ backgroundColor: "#F2FAFF" }}
                        />
                    </div>
                    <div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label fs-6 Cabin-text">Product Description:</label>
                        <input
                            type="text"
                            className="form-control w-25 Cabin-text"
                            id="exampleFormControlInput1"
                            name="product_description"
                            placeholder="Enter product description here"
                            value={productDetails.product_description}
                            onChange={(e) =>
                                handleProductDetailsChange(e.target.name, e.target.value)
                            }
                            style={{ backgroundColor: "#F2FAFF" }}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label fs-6 Cabin-text">Product Discount:</label>
                        <input
                            type="number"
                            className="form-control w-25 Cabin-text"
                            id="exampleFormControlInput1"
                            name="discount"
                            placeholder="Enter product discount here"
                            value={productDetails.discount}
                            onChange={(e) =>
                                handleProductDetailsChange(e.target.name, e.target.value)
                            }
                            style={{ backgroundColor: "#F2FAFF" }}
                        />
                    </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row flex-sm-row flex-md-row justify-content-between">
                    <div className='mb-3 w-25'>
                      <label for="type">Select Type:</label>
                      <select class="form-control" id="type" name="type" value={productDetails.type} onChange={(e) => handleProductDetailsChange(e.target.name, e.target.value)} >
                          <option value="chair">Chair</option>
                          <option value="table">Table</option>
                          <option value="cupboard">Cupboard</option>
                          <option value="sofa">Sofa</option>
                          <option value="bed">Bed</option>
                      </select>
                    </div>
                    <div className='mb-3 w-25'>
                      <label for="room_type">Select Room Type:</label>
                      <select class="form-control" id="room_type" name="room_type" value={productDetails.room_type} onChange={(e) => handleProductDetailsChange(e.target.name, e.target.value)} >
                          <option value="living room">Living Room</option>
                          <option value="dining room">Dining Room</option>
                          <option value="bed room">Bed Room</option>
                          <option value="study room">Study Room</option>
                      </select>
                    </div>
                      <div class="mb-3">
                          <label for="exampleFormControlInput1" className="form-label fs-6 Cabin-text">Entry Price:</label>
                          <input 
                            className="form-control Cabin-text" 
                            type="number" 
                            name="entry_price" 
                            id="exampleFormControlInput1" 
                            placeholder="Enter price here" 
                            value={productDetails.entry_price} 
                            style={{ backgroundColor: "#F2FAFF" }} 
                            onChange={(e) =>
                              handleProductDetailsChange(e.target.name, e.target.value)
                            } 
                          />
                      </div>
                      </div>
                      <div className="d-flex flex-column flex-lg-row flex-sm-row flex-md-row justify-content-between">
                      <div class="mb-3">
                          <label for="exampleFormControlInput1" className="form-label fs-6 Cabin-text">Shipping Fee:</label>
                          <input 
                            className="form-control Cabin-text" 
                            type="number" 
                            name="shipping_fee" 
                            id="exampleFormControlInput1" 
                            placeholder="Enter shipping fee here" 
                            value={productDetails.shipping_fee} 
                            style={{ backgroundColor: "#F2FAFF" }} 
                            onChange={(e) =>
                              handleProductDetailsChange(e.target.name, e.target.value)
                            } 
                          />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fs-6 Cabin-text">Image:</label>
                        <input
                          type="file"
                          name="image"
                          className="form-control Cabin-text"
                          onChange={handleImageChange}
                                accept="image/*" // Only allow image files
                        />
                      </div>
                      {productDetails.image && (
                        <div className="mt-3">
                          <label className="form-label fs-6 Cabin-text">Image Preview:</label>
                          <img
                            src={URL.createObjectURL(productDetails.image)}
                            alt="Product Preview"
                            style={{ maxWidth: "100px" }}
                          />
                        </div>
                      )}  
                      </div>
                    
                      <div className="divider mt-5" />
                      <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between">
                          <Link to="/vendor/inventory/viewstock"><button className="my-2 mx-5 Cabin-text " style={{ color: "#FF5C60", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #FF5C60" }}>Cancel</button></Link>
                          <button  type="submit" className="my-2 mx-5 Cabin-text" style={{ color: "#FFFFFF", background: "#035C94", borderRadius: "8px" }}>Add Stock</button>
                      </div>
                    </div>
            </form>
            </div>
        </>
    );
}

export default AddStock;