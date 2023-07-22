import React from 'react';
import Header from "./../../components/header";
import Footer from "./../../components/footer";
import { useState } from 'react';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import * as Icon from "react-bootstrap-icons";
import Img1 from "./../../assets/img/project/01.png";
import Img2 from "./../../assets/img/project/2.png";
import Img3 from "./../../assets/img/project/3.png";
import Img4 from './../../assets/img/project/4.png';
import Img5 from './../../assets/img/project/5.png';
import Img6 from './../../assets/img/project/06.png';
import Img7 from './../../assets/img/project/7.png';
import Img8 from './../../assets/img/project/8.png';
import project from './../../assets/img/project/project.jpg';

import './../../styles/project.css';



const Project = () => {
  return (
    <>
      {/* <Header /> */}

      <div className="d-flex project-pic justify-content-center">
        <div className="d-flex col-lg-3 flex-column bg-white dialog-div rounded-top-4">
          <p className="dialog-1 mt-4" style={{ fontSize: "2rem", lineHeight: "2.5rem" }}  >
            Our Projects
          </p>
          <p className="text-primary jost-text" style={{ lineHeight: "0rem" }}>
            Home / our projects
          </p>
        </div>
      </div>



      <div className='d-flex justify-content-center m-4'>
        <div className='d-flex flex-column col-lg-6 rounded-5'>
          <div className='d-flex flex-column first-div'> 
            <div className="categories">
              <button className="bathroom">Bathroom</button>
              <button className="bedroom">Bed Room</button>
              <button className="kitchen">Kitchen</button>
              <button className="living">Living Area</button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="d-flex justify-content-center flex-row gap-3 ">
<div className="d-flex flex-column gap-3 ">


    <Card style={{  width: '30rem' }} className='p-0'>
      <Card.Img variant="top" src={Img1} className='w-3 h-3' />
      <Card.Body>
        <div className='d-flex gap-5 flex-row justify-content-between'>
         <div >
           <Card.Title>Minimal Bedroom</Card.Title>
           <Card.Text> Decor / Architecture </Card.Text>
        </div >
        <div className='d-flex fs-1 justify-content-left'>
    <i class="bi bi-arrow-right-circle-fill"></i>
    </div>  
       </div>
      </Card.Body>
    </Card>

    <Card style={{  width: '30rem' }} className='p-0'>
      <Card.Img variant="top" src={Img1} className='w-3 h-3' />
      <Card.Body>
        <div className='d-flex gap-5 flex-row justify-content-between'>
         <div >
           <Card.Title>Minimal Bedroom</Card.Title>
           <Card.Text> Decor / Architecture </Card.Text>
        </div >
        <div className='d-flex fs-1 justify-content-left'>
    <i class="bi bi-arrow-right-circle-fill"></i>
    </div>  
       </div>
      </Card.Body>
    </Card>


    <Card style={{  width: '30rem' }} className='p-0'>
      <Card.Img variant="top" src={Img5} className='w-3 h-3' />
      <Card.Body>
        <div className='d-flex gap-5 flex-row justify-content-between'>
         <div >
           <Card.Title>Minimal Bedroom</Card.Title>
           <Card.Text> Decor / Architecture </Card.Text>
        </div >
        <div className='d-flex fs-1 justify-content-left'>
    <i class="bi bi-arrow-right-circle-fill"></i>
    </div>  
       </div>
      </Card.Body>
    </Card>

    <Card style={{  width: '30rem' }} className='p-0'>
      <Card.Img variant="top" src={Img2} className='w-auto h-auto' />
      <Card.Body>
        <div className='d-flex gap-5 flex-row justify-content-between'>
         <div >
           <Card.Title>Minimal Bedroom</Card.Title>
           <Card.Text> Decor / Architecture </Card.Text>
        </div >
        <div className='d-flex fs-1 justify-content-left'>
    <i class="bi bi-arrow-right-circle-fill"></i>
    </div>  
       </div>
      </Card.Body>
    </Card>

     </div>

     
<div className="d-flex flex-column gap-3 ">


<Card style={{  width: '30rem' }} className='p-0'>
  <Card.Img variant="top" src={Img3} className='w-3 h-3' />
  <Card.Body>
    <div className='d-flex gap-5 flex-row justify-content-between'>
     <div >
       <Card.Title>Minimal Bedroom</Card.Title>
       <Card.Text> Decor / Architecture </Card.Text>
    </div >
    <div className='d-flex fs-1 justify-content-left'>
    <i class="bi bi-arrow-right-circle-fill"></i>
    </div>  
   </div>
  </Card.Body>
</Card>

<Card style={{  width: '30rem' }} className='p-0'>
  <Card.Img variant="top" src={Img4} className='w-auto h-auto' />
  <Card.Body>
    <div className='d-flex gap-5 flex-row justify-content-between'>
     <div >
       <Card.Title>Minimal Bedroom</Card.Title>
       <Card.Text> Decor / Architecture </Card.Text>
    </div >
    <div className='d-flex fs-1 '>
    <i class="bi bi-arrow-right-circle-fill"></i>
    </div> 
   </div>
  </Card.Body>
</Card>

<Card style={{  width: '30rem' }} className='p-0'>
  <Card.Img variant="top" src={Img6} className='w-auto h-auto' />
  <Card.Body>
    <div className='d-flex gap-5 flex-row justify-content-between'>
     <div >
       <Card.Title>Minimal Bedroom</Card.Title>
       <Card.Text> Decor / Architecture </Card.Text>
    </div >
    <div className='d-flex fs-1 '>
    <i class="bi bi-arrow-right-circle-fill"></i>
    </div> 
   </div>
  </Card.Body>
</Card>

<Card style={{  width: '30rem' }} className='p-0'>
      <Card.Img variant="top" src={Img1} className='w-3 h-3' />
      <Card.Body>
        <div className='d-flex gap-5 flex-row justify-content-between'>
         <div >
           <Card.Title>Minimal Bedroom</Card.Title>
           <Card.Text> Decor / Architecture </Card.Text>
        </div >
        <div className='d-flex fs-1 justify-content-left'>
    <i class="bi bi-arrow-right-circle-fill"></i>
    </div>  
       </div>
      </Card.Body>
    </Card>


 </div>

 
      </div>
      <div className='d-flex fs-1 justify-content-center'>
      {/* <Button style={{fontSize: "20", color: "#FCBF42"}} variant='center'> <Icon.ArrowRightCircleFill/></Button> */}
      <i class="bi bi-arrow-right-circle-fill "></i>
      </div>

    {/* <Footer /> */}
 
    </>
  )
  };
  export default Project;


