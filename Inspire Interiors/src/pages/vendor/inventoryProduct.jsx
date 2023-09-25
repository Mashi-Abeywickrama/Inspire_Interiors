import React, { useState, useEffect } from "react";
import "../../styles/vendor/inventoryProduct.css";

import Chair from "../../assets/img/vendor/chair.png";
import * as Icon from "react-bootstrap-icons";

import axios from "axios";

import Wood from "../../assets/img/vendor/material/wood.jpeg";
import Plywood from "../../assets/img/vendor/material/plywood.jpeg";
import Mahogany from "../../assets/img/vendor/material/mahogany.jpg";
import Cotton from "../../assets/img/vendor/material/cotton.png";
import Glass from "../../assets/img/vendor/material/glass.jpg";

import { MDBDataTableV5, MDBTable } from "mdbreact";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import useAlert from "../../components/useAlert";
import EditVariation from "../../components/vendor/editvariation";


const InventoryProduct = () => {
  const [productData, setProductData] = useState({
    product_name: "",
    product_description: "",
    type: "",
    entry_price: "",
    discount: "",
    product_status: "",
  });

  const [variationData, setVariationData] = useState([]);

  const materialImage = (material) => {
    if(material === 'wood'){
        return <img className="img-fluid" style={{width:"100px", height:"100px"}} src={Wood}/>;
    } else if(material === 'plywood'){
        return <img className="img-fluid" style={{width:"100px", height:"100px"}} src={Plywood} />;
    } else if(material === 'glass'){
        return <img className="img-fluid" style={{width:"100px", height:"100px"}} src={Glass} />;
    } else if(material === 'mahogany'){
        return <img className="img-fluid" style={{width:"100px", height:"100px"}} src={Mahogany} />;
    } else if(material === 'cotton'){
        return <img className="img-fluid" style={{width:"100px", height:"100px"}} src={Cotton} />;
    } else {
        return null;
    }
  }

  const [isEditing, setIsEditing] = useState(false);

  const urlParams = new URLSearchParams(window.location.search);
  const productID = urlParams.get("id");

  const [variationDetails, setVariationDetails] = useState({
    material: "",
    color: "",
    quantity: "",
    variation_img: null,
    product_id: productID,
  });

  const apiBaseURL = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  const handleAddition = async (e) => {
    
    e.preventDefault();
    console.log(variationDetails);
    try {
      const response = await axiosInstance.post("/addvariation", {
        material: variationDetails.material,
        color: variationDetails.color,
        quantity: variationDetails.quantity,
        variation_img: variationDetails.variation_img,
        product_id: variationDetails.product_id,
      });
      if (response.status === 200) {
        setShow1(false);
        

        try {
          const formData = new FormData();

          formData.append("variationId", response.data.variation_id);
          formData.append("file", variationDetails.variation_img); // Append the image to the formData

          ;

          const response2 = await axiosInstance.put("/setVariationPic",
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
          );
          if(response2.status === 200)
          {
            console.log("Response from API:", "Omaiwa mou shindeiru");
            // window.location.reload();

            
          } 
        }
        catch (error) {
          console.error("Error submitting form:", error);
        }
        console.log("variation Added Succesfully");
        
      }
    } catch (error) {
      console.error("Addition Fail");
    }
  };

  useEffect(() => {
    // Fetch data from your backend API
    axiosInstance
      .get(`/viewproducts/${productID}`)
      .then((response) => {
        setProductData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
    .get(`/viewvariations/${productID}`)
    .then((response) => {
      setVariationData(response.data);
      // console.log(response.data);
    })
    .catch((error) => {
      console.log("Error fetching data", error);
    });
  }, []);

  
  const handleVariationDetailsChange = (field, value) => {
    setVariationDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const updateProductData = (field, value) => {
    setProductData((prevDetails) => ({
      ...prevDetails,
      [field]: value !== undefined ? value : prevDetails[field],
    }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/updateproducts/${productID}`, {
        product_name: productData.product_name,
        product_description: productData.product_description,
        type: productData.type,
        entry_price: productData.entry_price,
        discount: productData.discount,
      });
      if (response.status === 200) {
        setShow(false);
        // console.log("Offer Edit Succesfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Edit Fail");
    }
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0]; // Get the selected image file
    handleVariationDetailsChange("variation_img", imageFile); // Update productDetails state with the selected image
  };

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(variationData)

  const Columns = [
    {
      label: "ENTRY PRICE",
      field: "entry",
      sort: "asc",
      width: 200,
    },
    {
      label: "COMMISION",
      field: "commision",
      sort: "asc",
      width: 100,
    },
    {
      label: "DISCOUNT",
      field: "discount",
      sort: "asc",
      width: 100,
    },
  ];

  const Columns1 = [
    {
      label: "MATERIAL",
      field: "material",
      sort: "asc",
      width: 200,
    },
    {
      label: "COLOR",
      field: "color",
      sort: "asc",
      width: 100,
    },
    {
      label: "Quantity",
      field: "quantity",
      sort: "asc",
      width: 100,
    },
    {
      label: "",
      field: "lowStockBadge",
      sort: "asc",
      width: 30,
    },
    {
      label: "",
      field: "edit",
      sort: "asc",
      width: 100,
    },
  ];
  const testarray = variationData;
  const id= testarray.map((variation) => variation.variation_id);
  console.log(id);

  function getStatusBadge(quantity) {
    if (quantity > 4) {
      return <span className="badge text-bg-success Cabin-text">In Stock</span>;
    } else if (quantity === 0) {
      return <span className="badge text-bg-danger Cabin-text">Out of Stock</span>;
    } else {
      return <span className="badge text-bg-warning Cabin-text">Low Stock</span>;
    }
  }
  
  const Rows1 = Array.isArray(variationData)
    ? variationData.map((variation, index) => ({
      key:{index},
        material: variation.material,
        color: variation.color,
        quantity: variation.quantity,
        lowStockBadge: getStatusBadge(variation.quantity),
        edit: <EditVariation Data={variation} />,
      }))
    : [];

  const Rows = [
    {
      entry: productData.entry_price,
      commision: "N/A",
      discount: productData.discount,
    },
  ];

 console.log(productData);

  return (
    <>
      <div className="chair-container me-5">
        <div className="col-12 d-flex flex-column flex-lg-row flex-md-row gap-3">
          <div className="d-flex flex-column gap-4 col-lg-7">
            <div className="col-lg-12 bg-white rounded-3 shadow">
              <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between p-4">
                <div className="d-flex gap-4">
                  <Link to="/vendor/inventory">
                    <p className="text-dark fs-5 fw-bold Cabin-text ">
                      Inventory
                    </p>
                  </Link>
                  <Icon.ChevronRight
                    color="#A2A3B1"
                    size={20}
                    className="mt-2"
                  />
                  <Link to="/vendor/inventory/viewstock">
                    <p className="fs-5 fw-bold Cabin-text text-dark">Stock</p>
                  </Link>
                  <Icon.ChevronRight
                    color="#A2A3B1"
                    size={20}
                    className="mt-2"
                  />
                  <p
                    className="fs-5 fw-bold Cabin-text"
                    style={{ color: "#A2A3B1" }}
                  >
                    {productData.product_name}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleShow}
                  className="add-btn h-50"
                >
                  <Icon.PencilFill className="mx-2" color="white" size={16} />
                  Edit
                </button>
                <Modal
                  show={show}
                  onHide={handleClose}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Product Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form onSubmit={handleEdit}>
                      <div className="d-flex flex-column mx-4 gap-3">
                        <div className="mb-1">
                          <label>Product Name</label>
                          <input
                            type="text"
                            name="product_name"
                            autoFocus
                            className="form-control Cabin-text"
                            value={productData.product_name}
                            onChange={(e) =>
                              updateProductData(e.target.name, e.target.value)
                            }
                            style={{ backgroundColor: "#F2FAFF" }}
                          ></input>
                        </div>
                        <div className="mb-1">
                          <label>Product Description</label>
                          <input
                            type="text"
                            name="product_description"
                            className="form-control Cabin-text"
                            value={productData.product_description}
                            onChange={(e) =>
                              updateProductData(e.target.name, e.target.value)
                            }
                            style={{ backgroundColor: "#F2FAFF" }}
                          ></input>
                        </div>
                        <div className="mb-1">
                          <label>Product Type</label>
                          <input
                            type="text"
                            name="type"
                            className="form-control Cabin-text"
                            value={productData.type}
                            onChange={(e) =>
                              updateProductData(e.target.name, e.target.value)
                            }
                            style={{ backgroundColor: "#F2FAFF" }}
                          ></input>
                        </div>
                        <div className="d-flex flex-row gap-5">
                          <div className="my-2">
                            <label>Entry Price</label>
                            <input
                              type="number"
                              name="entry_price"
                              className="form-control Cabin-text h-50"
                              value={productData.entry_price}
                              onChange={(e) =>
                                updateProductData(e.target.name, e.target.value)
                              }
                              style={{ backgroundColor: "#F2FAFF" }}
                            ></input>
                          </div>
                          <div className="my-2">
                            <label>Discount</label>
                            <input
                              type="number"
                              name="discount"
                              className="form-control Cabin-text h-50"
                              value={productData.discount}
                              onChange={(e) =>
                                updateProductData(e.target.name, e.target.value)
                              }
                              style={{ backgroundColor: "#F2FAFF" }}
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <button
                          type="button"
                          className="withdraw-btn m-4"
                          onClick={handleClose}
                        >
                          <Icon.PlusLg color="white" size={20} />
                          Discard Changes
                        </button>
                        <button type="submit" className="accept-btn m-4">
                          <Icon.PlusLg color="white" size={20} />
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </Modal.Body>
                </Modal>
              </div>
              <div className="d-flex flex-column px-4">
                <p
                  className="fs-6 fw-semibold Cabin-text"
                  style={{ color: "#545563" }}
                >
                  Product Name
                </p>
                <p className="fs-6 fw-normal" style={{ color: "#17183B" }}>
                  {productData.product_name}
                </p>
              </div>
              <div className="d-flex flex-column px-4">
                <p
                  className="fs-6 fw-semibold Cabin-text"
                  style={{ color: "#545563" }}
                >
                  Product Type
                </p>
                <p
                  className="fs-6 fw-normal Cabin-text"
                  style={{ color: "#17183B" }}
                >
                  {productData.type}
                </p>
              </div>
              <div className="d-flex flex-column px-4">
                <p
                  className="fs-6 fw-semibold Cabin-text"
                  style={{ color: "#545563" }}
                >
                  Product Description
                </p>
                <p
                  className="fs-6 fw-normal Cabin-text"
                  style={{ color: "#17183B" }}
                >
                  {productData.product_description}
                </p>
              </div>
              <div className="d-flex flex-column px-4">
                <p
                  className="fs-6 fw-semibold Cabin-text"
                  style={{ color: "#545563" }}
                >
                  Price
                </p>
                <div className="">
                  <MDBDataTableV5
                    responsive
                    striped
                    bordered
                    small
                    columns={Columns}
                    rows={Rows}
                    sortable={false}
                    exportToCSV={true}
                    paging={false}
                    searching={false}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12 bg-white rounded-3 p-4 shadow mb-3">
              <div className="d-flex flex-row justify-content-between">
                <p className="text-dark fs-5 fw-bold Cabin-text">Stock</p>
                
              </div>
              <div className="my-3">
                <MDBDataTableV5
                  responsive
                  striped
                  bordered
                  small
                  columns={Columns1}
                  rows={Rows1}
                  sortable={false}
                  exportToCSV={true}
                  paging={false}
                  searching={false}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              <div className="col-lg-12 bg-white rounded-3 p-4 shadow">
                <div className="d-flex justify-content-between">
                  <p className="text-dark fs-5 fw-bold Cabin-text">
                    Variations
                  </p>
                  <button
                    type="button"
                    className="add-btn h-50"
                    onClick={handleShow1}
                  >
                    <Icon.PlusLg className="mx-1" color="white" size={16} />
                    Add
                  </button>

                  <Modal
                    show={show1}
                    onHide={handleClose1}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Add New Variation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleAddition}>
                        <div className="d-flex flex-column mx-4 gap-3">
                          <div className="mb-1">
                            <label>Material</label>
                            <input
                              type="text"
                              name="material"
                              autoFocus
                              className="form-control Cabin-text"
                              placeholder="Enter variation material here"
                              value={variationDetails.material}
                              onChange={(e) =>
                                handleVariationDetailsChange(
                                  e.target.name,
                                  e.target.value
                                )
                              }
                              style={{ backgroundColor: "#F2FAFF" }}
                            ></input>
                          </div>
                          <div className="mb-1">
                            <label>Color</label>
                            <input
                              type="text"
                              name="color"
                              className="form-control Cabin-text"
                              placeholder="Enter variation color here"
                              value={variationDetails.color}
                              onChange={(e) =>
                                handleVariationDetailsChange(
                                  e.target.name,
                                  e.target.value
                                )
                              }
                              style={{ backgroundColor: "#F2FAFF" }}
                            ></input>
                          </div>
                          <div className="mb-1">
                            <label>Quantity</label>
                            <input
                              type="number"
                              name="quantity"
                              className="form-control Cabin-text"
                              placeholder="Enter variation quantity here"
                              value={variationDetails.quantity}
                              onChange={(e) =>
                                handleVariationDetailsChange(
                                  e.target.name,
                                  e.target.value
                                )
                              }
                              style={{ backgroundColor: "#F2FAFF" }}
                            ></input>
                          </div>
                          <div className="mb-3">
                            <label className="form-label fs-6 Cabin-text">
                              Image:
                            </label>
                            <input
                              type="file"
                              name="image"
                              className="form-control Cabin-text"
                              onChange={handleImageChange}
                              accept="image/*" // Only allow image files
                            />
                          </div>
                          <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between">
                            <button
                              className="my-2 mx-5 Cabin-text"
                              onClick={handleClose1}
                              style={{
                                color: "#FF5C60",
                                background: "#FFFFFF",
                                borderRadius: "8px",
                                border: "1px solid #FF5C60",
                              }}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="my-2 mx-5 Cabin-text"
                              style={{
                                color: "#FFFFFF",
                                background: "#035C94",
                                borderRadius: "8px",
                              }}
                            >
                              Add Variation
                            </button>
                          </div>
                        </div>
                      </form>
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="d-flex flex-row gap-3">
                  <p className="text-dark fs-6 fw-bold Cabin-text">Materials</p>
                </div>

                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-evenly">
                  {variationData.map((data, index) => (
                    <div className="d-flex flex-column gap-3">
                        {materialImage(data.material)}
                      <p className="fs-6 fw-bold Cabin-text text-center">
                        {data.material}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="d-flex flex-row gap-3">
                  <p className="text-dark fs-6 fw-bold Cabin-text mt-3">
                    Colors
                  </p>
                </div>
                <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-evenly">
                {variationData.map((data, index) => (
                  <div className="d-flex flex-column gap-3">
                    <Icon.SquareFill 
                        size={100} 
                        color={data.color} 
                    />
                    <p className="fs-6 fw-bold Cabin-text text-center">
                      {data.color}
                    </p>
                  </div>
                ))} 
                </div>
              </div>
              <div className="col-lg-12 bg-white rounded-3 p-4 shadow mb-2">
                <div className="d-flex flex-row gap-3">
                  <p className="text-dark fs-5 fw-bold Cabin-text">
                    Product Image
                  </p>
                </div>
                <div className="align-content-center">
                  <img className="img-fluid" src={(`../../../../src/assets/img/product/${productData.product_id}.jpg`)} />
                </div>
              </div>
              <div className="col-lg-12 bg-white rounded-3 p-4 shadow mb-2">
                <div className="d-flex flex-row gap-3">
                  <p className="text-dark fs-5 fw-bold Cabin-text">
                    Product 3D Model
                  </p>
                </div>
                <div className="align-content-center">
                  <img className="img-fluid" src={(`../../../../src/assets/img/product/${productData.product_id}.jpg`)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryProduct;
