import React from 'react';
import Header from "./../../components/header";
import Footer from "./../../components/footer";

import { Card } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';

import * as Icon from "react-bootstrap-icons";
import Img1 from "./../../assets/img/project/01.png";
// import Img2 from './../../assets/img/project/2.png';
// import Img3 from './../../assets/img/project/3.png';
// import Img4 from './../../assets/img/project/4.png';
// import Img5 from './../../assets/img/project/5.png';
// import Img6 from './../../assets/img/project/06.png';
// import Img7 from './../../assets/img/project/7.png';
// import Img8 from './../../assets/img/project/8.png';
// import project from './../../assets/img/project/project.jpg';

import './../../styles/project.css';
// import PhotoAlbum from "react-photo-album";



const Project = () => {
  return (
    <>
      <Header />

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

<div className="d-flex justify-content-center m-4 d-flex flex-row gap-5 col-lg-6 rounded-5">
  <Card>
    <Card.Body>
      <img src='./../../assets/img/project/3.png' />
      <div className='d-flex flex-row row-lg-6 rounded-5'>
        <span>Minimal bedroom</span>
        <span>Decore / Architecture</span>
      </div>
      <div>
        <Icon.ArrowRightCircleFill size={24} />
      </div>
    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <img src='./../../assets/img/project/3.png' />
      <div className='d-flex flex-row row-lg-6 rounded-5'>
        <span>Minimal bedroom</span>
        <span>Decore / Architecture</span>
      </div>
      <div>
        <Icon.ArrowRightCircleFill size={24} />
      </div>
    </Card.Body>
  </Card>

  <Card>
    <Card.Body>
      <img src={'./../../assets/img/project/3.png'} />
      <div className='d-flex flex-row row-lg-6 rounded-5'>
        <span>Minimal bedroom</span>
        <span>Decore / Architecture</span>
      </div>
      <div>
        <Icon.ArrowRightCircleFill size={24} />
      </div>
    </Card.Body>
  </Card>
</div>

  



           {/* <PhotoAlbum layout="rows" photos={photos} />  


  // <div className='d-flex flex-row container-fluid gap-5 service-flex'>
                        <img className='img-fluid col-lg-5' style={{ marginTop:"6rem"}} src={<Img1/>}/>
                        <div className='d-flex flex-column'>
                            <div className='d-flex justify-content-evenly'>
                                <img style={{height:"4rem", marginTop:"8rem"}}src={<Img2/>}/>
                                
                            </div>
                            
                                <div className='d-flex flex-column second-div'>
                                <img style={{height:"8rem", marginTop:"8rem"}}src={require('./../../assets/img/3.png')}/>
                                <img className='img-fluid col-lg-5' style={{ marginTop:"6rem"}} src={require('./../../assets/img/4.png')}/>
                                </div>
                                </div> */}

{/* 
           </div>  
          </div> 
       
      

       </div> */}
    {/* </div>    */}
    <Footer />

    </>
  )
  };
  export default Project;



