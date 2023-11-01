import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";
import "./../../styles/Designer/3dmodel.css";



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
    <div className="custom-container rounded-3 mb-4 fullfull">
      <div className="col-12 d-flex flex-column flex-mb-row flex-lg-row gap-4">
        <div className="col-12 d-flex bg-white bg-whitess rounded-3 shadow p-4 gap-5">
          <div className="d-flex flex-column w-50">
            <p
              className="text-dark fs-2 fw-bold Cabin-text"
              style={{ color: "#023047" }}
            >
              {data.name}
            </p>
            <p
              className="text-dark fs-5 fw-bold Cabin-text"
              style={{ color: "#023047" }}
            >
              {data.roomtype}
            </p>
            
            <p className="fs-4 fw-bold Cabin-text" style={{ color: "#545563" }}>
              Design Description
            </p>
            
    
            <p
              className="fs-5 fw-normal Cabin-text"
              style={{ color: "#17183B" }}
            >
              {data.description}
            </p>

            <p className="fs-4 fw-bold Cabin-text" style={{ color: "#545563" }}>
              Items Used In the Design
            </p>

            <p className="fs-5 fw-normal Cabin-text" style={{ color: "#17183B", whiteSpace: "pre" }}>
            {itemNames.join("\n")}
          </p>

             <a className="text-black" href={"http://localhost:8000/?id=" + data.image2}>View and edit the design</a>
          </div>
          <div className="customemodel">
              <GLTFModel src={`./../../src/assets/img/gltf/${data.image||'1.gltf'}`}
            className="ModelViewDesign">
        <AmbientLight color={0xffffff} />
        <DirectionLight
          color={0xffffff}
          position={{ x: 100, y: 200, z: 100 }}
        />
        
      </GLTFModel>
          </div>
          <br></br>
          <br></br>
         

          <div className="gallery">
            <div className="container">
              <div className="row">

               
               
               
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
