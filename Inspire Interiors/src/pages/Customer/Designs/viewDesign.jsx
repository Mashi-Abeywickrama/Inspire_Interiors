import React, { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb,Row,Col,Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './../../../styles/customer/designs.css';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

const generateStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate - fullStars >= 0.5;

   

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars.push(<Icon.StarFill key={i} color='#f39c12' />);
        } else if (i === fullStars + 1 && halfStar) {
            stars.push(<Icon.StarHalf key={i} color='#f39c12' />);
        } else {
            stars.push(<Icon.Star key={i} color='#f39c12' />);
        }
    }

    return stars;
};

const ViewDesign = () => {

     const apiBaseURL = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

    const urlParams = new URLSearchParams(window.location.search);

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [tool, setTool] = useState([]);
    const [userData, setUserData] = useState([]);
    const [itemNames, setItemNames] = useState([]);
    const [offerData, setOfferData] = useState([]);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchUrl = `http://localhost:8080/designer/mydesigns/${id}`;

        axios
            .get(fetchUrl)
            .then((response) => {
                setData(response.data);
                console.log(response.data.designer_id);
              
                    axiosInstance
                    .get(`/getuser/${response.data.designer_id}`)
                    .then((response2) => {
                        setUserData(response2.data);
                        console.log(response2.data);
                    })
                    .catch((error) => {
                        console.log('Error fetching data', error);
                    });
              
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

    useEffect(() => {
        axiosInstance
                    .get(`/promotion/designer/${data.designer_id}`)
                    .then((response2) => {
                        setOfferData(response2.data);
                        console.log(response2.data);
                    })
                    .catch((error) => {
                        console.log('Error fetching data', error);
                    });
       
    }, [data.designer_id]);
     useEffect(() => {
        axiosInstance
                    .get(`/room-type/${data.roomtype}`)
                    .then((response2) => {
                        setProductData(response2.data);
                        console.log(response2.data);
                    })
                    .catch((error) => {
                        console.log('Error fetching data', error);
                    });
       
    }, [data.roomtype]);


    const mergeData = (offerData, productData) => {
    const mergedData = productData.map(
      (productItem) => {
        const matchingOffer = offerData.find(
          (offerItem) => offerItem.vendor === productItem.vendor_id
        );

        if (matchingOffer) {
          // Merge the data from both sources
          return {
            ...productItem,
            ...matchingOffer

          };
        } 
      });

    return mergedData;
  };

  const mergedOfferData = mergeData(offerData, productData);
  console.log("merged Data Designer", mergedOfferData);
    
    return (
        <>
            <div className="background d-flex flex-column justify-content-between w-100 rounded Cabin-text gap-3 ">
                {/* Topic */}
                <div className=' bg-light shadow rounded py-3'>
                    <div className='row container'>
                        <div className='row d-flex align-items-center justify-content-start'>
                            <div className='col-md-4 col-sm-12 col-12 fs-5'>
                                <Breadcrumb className="fw-bold">
                                    <Breadcrumb.Item href='/customer/designs'>
                                        Designs
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" active>
                                        <FontAwesomeIcon icon={faAngleRight} className='me-2' />
                                        {data.roomtype}
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" active>
                                        <FontAwesomeIcon icon={faAngleRight} className='me-2' />
                                        {data.name}
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </div>
                    </div>

                    {/* Designer profile and Projects */}
                    <div className="d-flex justify-content-evenly">
                        <div className="d-flex flex-column w-50">

                            <p className="fs-5 fw-bold Cabin-text" >
                                By:
                                <div className="fw-bold Cabin-text m-2">
                                    {userData.name}
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
                                            style={{ backgroundColor: '#e4f5ff', resize: 'none' }}
                                            className="border-0 p-2"
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <a className="text-black fw-bold "
                                href={"http://localhost:8001/?id=" + data.image2}>
                                Click here to view and edit the design
                            </a>
                        </div>

                        {data.image && (
                            <div className="customemodel rounded" style={{ border: '5px solid #035C94' }}>
                                <GLTFModel src={`./../../../src/assets/img/gltf/${data.image}`}
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

                {/* Similar Designs */}
                <div className='top-div bg-light shadow rounded mb-3'>
                    <div className='row container'>
                        <div className='row d-flex align-items-center justify-content-start mt-1'>
                            <div className='col-md-4 col-sm-12 col-12 fs-5 fw-bold'>
                                Recommended products
                            </div>
                        </div>
                    </div>
                    <div className='bg-light image-bar d-flex row w-100 flex-row m-0 p-0 mt-2 '>
                        {mergedOfferData.map((item) => (
                            <Link to={`/customer/marketplace/recommended/${item.product_id}/${item.designerid}`} className='w-25' >
                            <div className='col-md-3 col-sm-6 w-100 p-0 m-0'>
                                <Card className='m-2 shadow-sm'>
                                    <Card.Img
                                        variant='top'
                                        src={`./../../../src/assets/img/product/${item.productImg}`}
                                        className='p-3'
                                    />
                                    <Card.Body>
                                        
                                        <Card.Text className='fs-6 fw-bold text-center'>
                                             {item.product_name} ({item.type})
                                        </Card.Text>
                                        <Card.Text className='fs-6 fw-bold text-center'>
                                             {item.product_description}
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                            </div>
                            </Link>
                        ))}
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewDesign;