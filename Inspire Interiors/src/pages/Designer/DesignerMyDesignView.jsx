import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";
import "./../../styles/Designer/3dmodel.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumb, Form, Row, Col } from "react-bootstrap";

function DesignerMyDesignView() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [tool, setTool] = useState([]);
  const [itemNames, setItemNames] = useState([]);

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
  useEffect(() => {
    const fetchUrl = `http://localhost:8080/designer/mydesigns/${id}`;

    axios
      .get(fetchUrl)
      .then((response) => {
        axios
          .get(`http://localhost:8080/designer/designtool/de/${response.data.image2}`)
          .then((response2) => {
            console.log(response2.data);
            const jsonData = response2.data.data;

            // Parse the JSON data
            const data = JSON.parse(jsonData);

            // Access the 'items' array and extract 'item_name' values
            const itemNames = data.items.map((item) => item.item_name);
            setItemNames(itemNames)
            console.log(itemNames);

            setTool(response2.data);
          })
          .catch((error) => {
            console.log(error);
          });
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="background d-flex flex-column justify-content-between w-100 bg-light rounded Cabin-text shadow">

      <div className='bg-light top-bar rounded py-3'>
        <div className='row container'>
          <div className='row d-flex align-items-center'>
            <div className='col-md-4 col-sm-12 col-12 fs-5'>
              <Breadcrumb className="fw-bold">
                <Breadcrumb.Item href='/customer/designs'>
                  Designs
                </Breadcrumb.Item>
                <Breadcrumb.Item className="custom-breadcrumb-divider" active >
                  <FontAwesomeIcon icon={faAngleRight} className="me-2 ms-2" />
                  Browse Designs
                </Breadcrumb.Item>
                <Breadcrumb.Item className="custom-breadcrumb-divider" active>
                  <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                  {data.name}
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          {/* design details */}
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column w-50">

              <p className="fs-5 fw-bold Cabin-text" >
                Room type:
                <div className="badge Cabin-text px-3 py-2 m-2"
                  style={{ color: "#000000", backgroundColor: "#CCF8FE" }}>
                  {data.roomtype}
                </div></p>

              <Row className='g-4'>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='fw-bold Cabin-text' style={{ color: "#545563" }}>
                      Design Description :
                    </Form.Label>
                    <Form.Control
                      type='text'
                      value={data.description}
                      style={{ backgroundColor: '#e4f5ff' }}
                      className="border-0 p-2"
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className='g-4'>
                <Col md>
                  <Form.Group className='mb-3'>
                    <Form.Label className='fw-bold Cabin-text' style={{ color: "#545563" }}>
                      Items Used In the Design :
                    </Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={itemNames.length}
                      value={itemNames.join("\n")}
                      style={{ backgroundColor: '#e4f5ff' , resize: 'none' }}
                      className="border-0 p-2"
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>

              <a className="text-black fw-bold "
               href={"http://localhost:8000/?id=" + data.image2}>
                Click here to view and edit the design
                </a>
            </div>

            {data.image && (
              <div className="customemodel rounded" style={{ border: '5px solid #035C94' }}>
                <GLTFModel src={`./../../src/assets/img/gltf/${data.image}`}
                  className="ModelViewDesign">
                  <AmbientLight color={0xffffff} />
                  <DirectionLight
                    color={0xffffff}
                    position={{ x: 100, y: 200, z: 100 }}
                  />

                </GLTFModel>
              </div>
            )}
          </div>

        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default DesignerMyDesignView;
