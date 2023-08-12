import React from "react";
import "./popup.css";

function Popup({ SetOpen }) {
  const closePopup = () => {
    SetOpen(false);
  };

  return (
    <div>
      <div id="popup1" class="overlay">
        <div class="popup">
          <h4
            className="text-primary"
            style={{ left: "30%", position: "absolute" }}
          >
            Add New Design
          </h4>
          <a class="close" href="#" onClick={closePopup}>
            &times;
          </a>
          <br></br>
          <br></br>

          <form className="row g-3">
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
              ></input>
            </div>
            <div className="d-flex col-12 column-gap-3 justify-content-end">
              <button
                className="btn btn-light text-secondary border border-secondary"
                onClick={closePopup}
                style={{ backgroundColor: "white" }}
              >
                Discard
              </button>
              <button
                className="btn text-light"
                style={{ background: "#035C94" }}
              >
                Create New
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;
