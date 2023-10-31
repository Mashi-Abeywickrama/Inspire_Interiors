import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageZoom from "react-image-zooom";
import axios from "axios";
// import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
// import MDBLightbox from "../../components/designer/components/pro/Lightbox/Lightbox";

function DesignerMyDesignView() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUrl = `http://localhost:8080/designer/mydesigns/${id}`;

    axios
      .get(fetchUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);
  return (
    <div className="custom-container rounded-3 mb-4">
      <div className="col-12 d-flex flex-column flex-mb-row flex-lg-row gap-4">
        <div className="col-12 bg-white rounded-3 shadow p-4">
          <div className="d-flex flex-column">
            <p
              className="text-dark fs-2 fw-bold Cabin-text"
              style={{ color: "#023047" }}
            >
              {data.name}
            </p>
            <br></br>
            <br></br>
            <p className="fs-4 fw-bold Cabin-text" style={{ color: "#545563" }}>
              Design Description
            </p>
            <br></br>
            <br></br>
            <p
              className="fs-5 fw-normal Cabin-text"
              style={{ color: "#17183B" }}
            >
              {data.description}
            </p>
          </div>
          <br></br>
          <br></br>

          <div className="gallery">
            <div className="container">
              <div className="row">
                <div className="col-md-4 img-fluid rounded">
                  <ImageZoom
                    src="https://unsplash.it/600.jpg?image=251"
                    zoom="200"
                  />
                </div>
                <div className="col-md-4 img-fluid rounded">
                  <ImageZoom
                    src="https://unsplash.it/600.jpg?image=252"
                    zoom="200"
                  />
                </div>
                <div className="col-md-4 img-fluid rounded">
                  <ImageZoom
                    src="https://unsplash.it/600.jpg?image=253"
                    zoom="200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default DesignerMyDesignView;
