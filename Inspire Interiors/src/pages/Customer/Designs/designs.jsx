import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../../styles/customer/designs.css';
import SearchPage from '../../../components/customer/filterNsearch';


const Designs = () => {

  const cards = [
    {
      title: 'Living Room', content: ['https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
        'https://havenly.com/blog/wp-content/uploads/2022/07/render-final-2232106-38554-8220-106864de852c.jpeg',
        'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
      ]
    },
    {
      title: 'Bed Room', content: ['https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
        'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg'
      ]
    },
    {
      title: 'Dining Room', content: ['https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
        'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg'
      ]
    },
    {
      title: 'Office', content: ['https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
        'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg'
      ]
    },
  ];

  const designerCards = [
    // Cards data for the first section...
    {
      name: 'Office',
      image: 'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
      votings: 10,
      rate: 4.5,
    },
    {
      name: 'Office',
      image: 'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
      votings: 70,
      rate: 3.7,
    },
    {
      name: 'Office',
      image: 'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
      votings: 10,
      rate: 4.5,
    },
    {
      name: 'Office',
      image: 'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
      votings: 10,
      rate: 4.5,
    },
    {
      name: 'Office',
      image: 'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
      votings: 18,
      rate: 5,
    },
    {
      name: 'Office',
      image: 'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
      votings: 10,
      rate: 4.5,
    },
  ];

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

      <div className=' background flex-col'>
        <div className='bg-light flex-col  w-98 rounded-3 mb-4 p-0 m-0' >

          <div className='top-bar flex-lg-2 flex-md-2 w-100 col-md-4 col-sm-12 col-12 fs-4 justify-content-between'>
            {/* Top designers and see all link */}
            <div className='row w-100 d-flex align-self-center '>
              <div className='d-flex w-25 h-100 justify-content-center align-self-center'>
                <h4>Top designers </h4>
              </div>
              <div className='d-flex col w-auto h-100 justify-content-start align-self-center see-all'>
                <h6>See All
                  <Icon.ArrowRight
                    
                    size={15}
                    className="align-center"
                  />
                </h6>
              </div>
              <div className='col  col-md-4 col-sm-12 col-12 fs-4 d-flex justify-content-end'>
                <SearchPage />

              </div>

            </div>

          </div>

          {/* Designers images */}
          <div className='bg-light image-bar  justify-content-center row w-100 flex-row m-0 p-0'>
            {designerCards.map((card, index) => (
              <div key={index} className=' justify-content-center col-5 col-md-4 col-lg-2 col-sm-8 mb-3'>
                <Card className='h-100 w-100 rounded border-0 rounded' style={{ color: '#7C828B' }}>
                  <Card.Img variant='top' src={card.image} className='rounded-3' />
                  <Card.Body className='flex-row justify-content-center'>
                    <Card.Text className='d-flex m-0 lead justify-content-center' >
                      {card.name}
                    </Card.Text>
                    <Card.Text className='d-flex m-0 justify-content-center'>
                      {generateStars(card.rate)}
                    </Card.Text>
                    <Card.Text className='d-flex m-0 justify-content-center '>
                      {card.votings} Votes
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/*Explore by category */}
        <div className='bg-light flex-col w-98 h-50 rounded-3' >
          <div className='top-bar flex w-100 h-20'>
            <div className='d-flex row align-self-center mt-2'>
              <div className='d-flex row h-100 justify-content-center align-self-center'>
                <h4>Explore by Rooms</h4>
              </div>
              <div className='d-flex row h-100 justify-content-start align-self-center mt-1' style={{ color: '#035C94' }}>
                <h6>Room Specialists</h6>
              </div>
            </div>
          </div>
          {/* Images */}
          <div className='d-flex flex-column fs-4 flex-lg-row flex-md-col flex-sm-col w-100 justify-content-center align-self-center'>
            {cards.map((card, index) => (
              <Col md={3} key={index} className='d-flex'>
                <Card className='d-flex h-100 w-100 rounded border-0' >
                  <Card.Body className='d-flex'>
                    <Carousel >
                      {card.content.map((imageUrl, imageIndex) => (
                        <Carousel.Item key={imageIndex}>
                          {/* {card.title} */}
                          <img
                            className='d-flex w-100 rounded-3 img-fluid h-100'
                            src={imageUrl}
                            alt={`Slide ${imageIndex + 1}`}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </div>


        </div>
      </div>

    </>
  );
};

export default Designs;