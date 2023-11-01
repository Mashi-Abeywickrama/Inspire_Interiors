import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../../styles/customer/designs.css';
import SearchPage from '../../../components/customer/filterNsearch';
import { Link } from 'react-router-dom';
import axios from "axios";
import {useSession} from "../../../constants/SessionContext";
import DefaultImage from './../../../assets/img/customer/livinroom.jpg';


const Designs = () => {

  const cards = [
    {
      title: 'Living Room', content: ['https://www.mydomaine.com/thmb/hz_TTiQ6tmgVm-6wx3avEOzOiNE=/2204x0/filters:no_upscale():strip_icc()/bartlamStephenKenn-f51b9c16328a4b33bac763764f741071.png',
        'https://havenly.com/blog/wp-content/uploads/2022/07/render-final-2232106-38554-8220-106864de852c.jpeg'
      ]
    },
    {
      title: 'Bed Room', content: ['https://media.architecturaldigest.com/photos/633f30fc2b9fc0b5557ab24d/4:3/w_4479,h_3359,c_limit/CH_ASH_Staging_West%20Village%20Townhouse_NYC2.jpg',
        'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg'
      ]
    },
    {
      title: 'Dining Room', content: ['https://media.designcafe.com/wp-content/uploads/2022/09/10114739/minimalist-dining-room-design.jpg',
        'https://www.home-designing.com/wp-content/uploads/2017/12/minimalist-dining-room-lighting.jpg'
      ]
    },
    {
      title: 'Office', content: ['https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg'
      ]
    },
  ];

  const designerCards = [
    // Cards data for the first section...
    {
      name: 'Mashi',
      image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
      votings: 10,
      rate: 4.5,
    },
    {
      name: 'Shin',
      image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
      votings: 70,
      rate: 3.7,
    },
    {
      name: 'Hari',
      image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
      votings: 10,
      rate: 4.5,
    },
    {
      name: 'Rujhan',
      image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
      votings: 10,
      rate: 4.5,
    },
    {
      name: 'Zulfa',
      image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
      votings: 18,
      rate: 5,
    },
    {
      name: 'Ghost',
      image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
      votings: 10,
      rate: 4.5,
    },
  ];

  const roomTypeImages = {
        'Living Room': 'https://damro.lk/wp-content/uploads/2019/11/venus.jpg',
        'Bedroom': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJWzKyYDGZem8-78vIlg9h7qxyF1dcahCb5w&usqp=CAU',
        'Dining Room': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJlcN0_avnxR_cWNX-DfNVz4Bx-gUdYNo2w&usqp=CAU'
    };

  const [allUsers, setAllUsers] = useState([]);
  const [designerData, setDesignerData] = useState([]);
  const [allDesignTypes, setAllDesignTypes] = useState([]);``
  const urlParams = new URLSearchParams(window.location.search);


  const Id = urlParams.get('id');

  const apiBaseURL = "http://localhost:8080";

  const axiosInstance = axios.create({
      baseURL: apiBaseURL,
      timeout: 5000,
  });

  useEffect(() => {
    axiosInstance
      .get(`/topdesigners`)
      .then((response) => {
        setDesignerData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/users`)
      .then((response) => {
        setAllUsers(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }, [Id]);

  useEffect(() => {
    axiosInstance
      .get(`/designer/d/distinctRoomTypes`)  
      .then((response) => {
        setAllDesignTypes(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }, []);

  const mergeData = (designerData, userData) => {
    const mergedData = designerData.map(
      (designerItem) => {
        const matchingUser = userData.find(
          (userItem) => userItem.userid === designerItem.designer_id
        );

        if (matchingUser) {
          // Merge the data from both sources
          return {
            ...designerItem,
            ...matchingUser

          };
        } else {
          return {
            ...designerItem
          };
        }
      });

    return mergedData;
  };

  const mergedDesigner = mergeData(designerData, allUsers);
  console.log("merged Data Designer", mergedDesigner);

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

  return (
    <>

      <div className=' background design-customer-page flex-col'>
        <div className='bg-light flex-col  w-98 rounded-3 mb-4 p-0 m-0' >

          <div className='top-bar flex-lg-2 flex-md-2 w-100 col-md-4 col-sm-12 col-12 fs-4 justify-content-between'>
            {/* Top designers and see all link */}
            <div className='row w-100 d-flex align-self-center '>
              <div className='d-flex w-25 h-100 justify-content-start ms-2 align-self-center'>
                <h4>Top designers </h4>
              </div>
              <div className='d-flex col w-auto h-100 justify-content-start align-self-center see-all'>
              <Link to={`/customer/designs/alldesigners`}><h6 style={{ color: '#035C94' }} >See All 
                  
                  <Icon.ArrowRight

                    size={15}
                    className="align-center"
                  />
                </h6></Link>
              </div>
              {/* <div className='col  col-md-4 col-sm-12 col-12 fs-4 d-flex justify-content-end'>
                <SearchPage />

              </div> */}

            </div>

          </div>

          {/* Designers images */}
          <div className='bg-light image-bar  row w-100 flex-row m-0 p-0'>
            {mergedDesigner.map((card, index) => (
              <div key={index} className='  justify-content-center col-5 col-md-4 col-lg-2 col-sm-8 mb-3'>
                <Link to={`viewdesigner?id=${card.designer_id}`}>
                  <Card className='h-100 w-100 rounded border-0 rounded ' style={{ color: '#7C828B' }}>
                    <Card.Img variant='top' src={`../../../../src/assets/img/profilePic/${card.profile_pic}`} className='rounded-3 p-3 h-75' />
                    <Card.Body className='flex-row justify-content-center py-0'>
                      <Card.Text className='d-flex m-0 lead justify-content-center' >
                        {card.name}
                      </Card.Text>
                      <Card.Text className='d-flex m-0 justify-content-center'>
                        {generateStars(card.averagereview)}
                      </Card.Text>
                      <Card.Text className='d-flex m-0 justify-content-center '>
                        {card.averagereview} / 5.0
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/*Explore by category */}
        <div className='bg-light flex-col w-98 h-50 rounded-3' >
          <div className='top-bar flex w-100 h-20'>
            <div className='d-flex row align-self-center mt-2 ms-2'>
              <div className='d-flex row h-100 justify-content-center mt-1 align-self-center'>
                <h4>Explore by Rooms</h4>
              </div>
              <div className='d-flex row h-100 justify-content-start align-self-center mt-1' style={{ color: '#035C94' }}>
                <h6>Room Specialists</h6>
              </div>
            </div>
          </div>
          {/* Images */}
          <div className='d-flex flex-column fs-4 flex-lg-row flex-md-col flex-sm-col w-100 justify-content-center align-self-center'>
            {allDesignTypes.map((roomType, index) => (
              <Col md={3} key={index} className='d-flex'>
                <Link  to={`browsedesigns/${roomType}`}>
                  <Card className='d-flex h-100 w-100 rounded border-0' >
                    <Card.Body className='d-flex'>
                      <Carousel >
                        

                                <div
                                    key={index} // Use the index as the key
                                    style={{ backgroundImage: `url(${roomTypeImages[roomType] || DefaultImage})`, height: "332px" }}
                                    className="mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 p-3"
                                >
                                    <Link to={`browsedesigns/${roomType}`} >
                                        <p className='h5'>{roomType}</p>
                                    </Link>
                                </div>
                         
                      </Carousel>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </div>


        </div>
      </div>

    </>
  );
};

export default Designs;