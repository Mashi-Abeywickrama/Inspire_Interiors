import React, { useState } from "react";
import axios from "axios";
import "../../components/designer/Popup/popup.css";

function Test() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    designer_id:2,
    image:"ssss",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/designer/adddesign",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <div id="popup1" class="overlay">
        <div class="popup">
          <h4
            className="text-primary"
            style={{ left: "30%", position: "absolute" }}
          >
            Create New Design
          </h4>
          <a class="close" href="#">
            &times;
          </a>
          <br></br>
          <br></br>

          <form className="row g-3" onSubmit={handleSubmit}>
            <br></br>
            <div className="col-12">
              <br></br>
              <label for="design name" className="text-secondary form-label">
                Design Name
              </label>
              <input
                type="text"
                placeholder="Enter Design Name"
                className="form-control"
                id="designName"
                name="name"
                value={formData.name}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-12">
              <label for="descripition" className="text-secondary form-label">
               Description
              </label>
              <input
                type="text"
                class="form-control"
                id="descripition"
                placeholder="Descripition About the design"
                style={{ height: "80px" }}
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></input>
            </div>
            <div className="d-flex col-12 column-gap-3 justify-content-end">
              <button
                className="btn btn-light text-secondary border border-secondary"
                style={{ backgroundColor: "white" }}
              >
                Discard
              </button>
              <button
                className="btn text-light"
                style={{ background: "#035C94" }}
                type="submit"
              >
                {/* <a href="http://localhost:8000" className="text-light"> */}
                Create Now
                {/* </a> */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Test;
