import React, { useState, useEffect } from "react";
import axios from "axios";
import Img1 from "../../assets/Designer/Mydesign.png";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import PageNumb from "../../components/customer/pagenum";
import "./../../styles/customer/designs.css";
import * as Icon from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";


import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Pagination } from "@mui/material";
import AddNewDesignPopup from "../../components/designer/Popup/AddNewDesignPopupHook";

import { useLoaderData } from "react-router-dom";
import { DesignLoader } from "../../Loaders/Designer/MyDesignsLoader";
import { useSession } from "../../constants/SessionContext";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

function DesignerMyDesigns() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [designdatya, setDesignData] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [designId, setDesignId] = useState("");
  const [roomType, setRoomType] = useState("");
  const [nameimage1, setNameImage1] = useState();
  const [myDesignData, setMyDesignData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    // Get the selected file from the input
    const file = e.target.files[0];
    setSelectedFile(file);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Subbmitted....");
    const postData = {
      name: name,
      description: description,
      image2: designId,
      designer_id: id,
      roomtype: roomType,
    };
    axios
      .post("http://localhost:8080/designer/adddesign", postData)
      .then((response) =>{
        setMyDesignData(response.data)
        const formData = new FormData();
      formData.append("designid", response.data.design_id);
      formData.append("file", selectedFile);
      axios
        .put("http://localhost:8080/designer/updatedesignfile", formData)
        .then((response) => {
          console.log(response)
          window.location.reload();
          })
        .catch((error) => console.log(error));
      
  })


      .catch((error) => console.log(error));
      console.log(myDesignData);

      

      

      
    
  };

  //get designer id from session
  const session = useSession();
  // console.log(session.sessionData.userid);
  const id = session.sessionData.userid.toString();

  const inputOfferData = (field, value) => {
    setDesignData((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));

  };


  //Fetch...
  useEffect(() => {
    const apiUrl = "http://localhost:8080/designer/mydesigns/d/" + id;
    // Fetch data from the API
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data); // Set the fetched data to the state
        setLoading(false); // Update loading state to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Update loading state to false in case of an error
      });
  }, []);

  

  return (
    <div className="overview-container rounded-3 mb-4">
      <p className="text-primary d-flex justify-content-between">
        <p className="fs-2 fw-medium">My Designs</p>

        <button type="button" onClick={handleShow} className="add-btn m-2">
          <Icon.PlusLg color="white" size={16} />
          Add Design
        </button>

        {/* add new Design popup */}

        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>New Design</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="d-flex flex-column mx-4 gap-3">
                <div className="mb-1">
                  <label>Design Name</label>
                  <input
                    type="text"
                    name="name"
                    autoFocus
                    className="form-control Cabin-text"
                    placeholder="Enter design name"
                    style={{ backgroundColor: "#F2FAFF" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="mb-1">
                  <label>Room Type</label>
                  <input
                    type="text"
                    name="room"
                    autoFocus
                    className="form-control Cabin-text"
                    placeholder="Enter room type"
                    style={{ backgroundColor: "#F2FAFF" }}
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                  ></input>
                </div>
                <div className="mb-1">
                  <label>Design Description</label>
                  <input
                    type="text"
                    name="description"
                    rows={3}
                    className="form-control Cabin-text"
                    placeholder="Enter design description"
                    style={{ backgroundColor: "#F2FAFF" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </div>
                <div className="d-flex flex-row gap-5">
                  <div className="mb-3">
                    <label className="form-label fs-6 Cabin-text">
                      Design Preview:
                    </label>
                    <input
                      type="file"
                      name="image1"
                      className="form-control Cabin-text"
                       onChange={handleFileChange}
                    />
                  </div>
                </div>
              
                <div className="mb-1">
                  <label>Design ID</label>
                  <input
                    type="number"
                    name="designId"
                    autoFocus
                    className="form-control Cabin-text"
                    placeholder="Enter design id"
                    style={{ backgroundColor: "#F2FAFF" }}
                    value={designId}
                    onChange={(e) => setDesignId(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <button
                  type="button"
                  className="withdraw-btn m-4"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type="submit" className="accept-btn m-4">
                  Add Design
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        

      </p>

      <div className="d-flex flex-row flex-wrap gap-3 ">
        
        {data.map((design) => (
          <div class="card customcanvas" style={{ width: "23%" }}>
           
            <GLTFModel src={`./../../src/assets/img/gltf/${design.image}`}
            className="ModelViewDesign">
        <AmbientLight color={0xffffff} />
        <DirectionLight
          color={0xffffff}
          position={{ x: 100, y: 200, z: 100 }}
        />
        
      </GLTFModel>
          
            
            <div className="card-body">
              <h5 className="card-title">{design.name}</h5>
              <p
                className="card-text fw-medium"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {design.description}
              </p>
              <p
                className="card-text fw-medium"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {design.roomtype}
              </p>
              <p className="text  d-flex gap-2 justify-content-around">
                {/* <p className="text-decoration-line-throug text-secondary ">
                  $549
                </p> */}

                {/* <p className="text-decoration-none text-danger">$400</p> */}
                <Link to={`/designer/mydesignview/${design.design_id}`}>
                <FontAwesomeIcon
                  icon={faEdit}
                  className="align-items-center justify-content-center"
                  size="" // Adjust the size as needed
                  style={{
                    color: "white",
                    backgroundColor: "#035C94",
                    padding: "8px",
                    borderRadius: "5px",
                    left: "0%",
                    position: "relative",
                  }}
                 
                />
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <div className="container">
          <div className="row">
            <div className="d-flex col text-center justify-content-center align-items-center ">
              <PageNumb />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignerMyDesigns;
