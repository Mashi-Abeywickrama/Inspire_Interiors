import React, { useState } from "react";
import Img1 from "../../assets/Designer/Mydesign.png";
import { BsFillCartPlusFill } from "react-icons/bs";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Pagination } from "@mui/material";
import AddNewDesignPopup from "../../components/designer/Popup/AddNewDesignPopupHook";

function DesignerMyDesigns() {
  return (
    <div className="overview-container rounded-3 mb-4">
      <p className="text-primary d-flex justify-content-between">
        <p className="fs-2 fw-medium">My Designs</p>
        <AddNewDesignPopup />
      </p>
      <div className="d-flex flex-row flex-wrap gap-3">
        {/* Cart */}
        <div class="card" style={{ width: "20rem" }}>
          <img
            src={Img1}
            className="card-img-top img-fluid rounded-2"
            alt="design"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Sofa</h5>
            <p className="card-text fw-medium">Landskrona</p>
            <p className="text  d-flex gap-2 justify-content-around">
              <p className="text-decoration-line-throug text-secondary ">
                $549
              </p>

              <p className="text-decoration-none text-danger">$400</p>
              <a
                href="#"
                class="btn btn-primary"
                style={{ background: "#035C94" }}
              >
                <BsFillCartPlusFill size={22} />
              </a>
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "20rem" }}>
          <img
            src={Img1}
            className="card-img-top img-fluid rounded-2"
            alt="design"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Sofa</h5>
            <p className="card-text fw-medium">Landskrona</p>
            <p className="text  d-flex gap-2 justify-content-around">
              <p className="text-decoration-line-throug text-secondary ">
                $549
              </p>

              <p className="text-decoration-none text-danger">$400</p>
              <a
                href="#"
                class="btn btn-primary"
                style={{ background: "#035C94" }}
              >
                <BsFillCartPlusFill size={22} />
              </a>
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "20rem" }}>
          <img
            src={Img1}
            className="card-img-top img-fluid rounded-2"
            alt="design"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Sofa</h5>
            <p className="card-text fw-medium">Landskrona</p>
            <p className="text  d-flex gap-2 justify-content-around">
              <p className="text-decoration-line-throug text-secondary ">
                $549
              </p>

              <p className="text-decoration-none text-danger">$400</p>
              <a
                href="#"
                class="btn btn-primary"
                style={{ background: "#035C94" }}
              >
                <BsFillCartPlusFill size={22} />
              </a>
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "20rem" }}>
          <img
            src={Img1}
            className="card-img-top img-fluid rounded-2"
            alt="design"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Sofa</h5>
            <p className="card-text fw-medium">Landskrona</p>
            <p className="text  d-flex gap-2 justify-content-around">
              <p className="text-decoration-line-throug text-secondary ">
                $549
              </p>

              <p className="text-decoration-none text-danger">$400</p>
              <a
                href="#"
                class="btn btn-primary"
                style={{ background: "#035C94" }}
              >
                <BsFillCartPlusFill size={22} />
              </a>
            </p>
          </div>
        </div>

        <Card sx={{ maxWidth: 345, minWidth: 300, height: 400 }}>
          <CardMedia sx={{ height: 200 }} image={Img1} title="Sofa" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sofa
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p className="text  d-flex gap-2 fs-5">
                <p className="text-decoration-line-through text-secondary ">
                  $549
                </p>

                <p className="text-decoration-none text-danger">$400</p>
              </p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">
              <BsFillCartPlusFill size={22} />
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, minWidth: 300, height: 400 }}>
          <CardMedia sx={{ height: 200 }} image={Img1} title="Sofa" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sofa
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p className="text  d-flex gap-2 fs-5">
                <p className="text-decoration-line-through text-secondary ">
                  $549
                </p>

                <p className="text-decoration-none text-danger">$400</p>
              </p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">
              <BsFillCartPlusFill size={22} />
            </Button>
          </CardActions>
        </Card>
      </div>

      <br></br>

      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        style={{ position: "absolute", left: "40%" }}
      />
      <br></br>
      <br></br>
    </div>
  );
}

export default DesignerMyDesigns;
