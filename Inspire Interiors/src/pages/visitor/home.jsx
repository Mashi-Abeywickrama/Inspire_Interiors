import React  from 'react';
import Header from "../../components/header";


import * as Icon from 'react-bootstrap-icons';
import { Rerousel } from 'rerousel';

import './../../styles/home.css';


import banner1 from './../../assets/img/home/banner1.png';
import Homeimg1 from './../../assets/img/home/Homeimg1.png';
import Nattasha from './../../assets/img/testimonials/nattasha.png';


  
const Home = () => {
 return (
    <div>
        <Header/>
        <div className='container-fluid banner-home'>
            <div className='container-fluid me-auto banner-height'>
                <div className='d-flex inner-height align-items-center justify-content-evenly common-flex '>
                    <div className='d-flex flex-column text-width'>
                        <h1 className='text-white header-title'>Let Your Home Be <span className='gold-colour'>Unique</span> </h1>
                        <p className='text-white header-sub '>There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.</p>
                        <button className='btn primary-btn rounded-lg'>Get Started <Icon.ArrowRight color="black" size={15}  className="align-center" /></button>

                    </div>
                    <div className='img-width'>
                        <img className='img-fluid me-auto' src={banner1}></img>
                    </div>
                </div>
            </div>
        </div>

        <div className='d-flex align-items-center justify-content-center lower-banner gap-5'>
            <div className='col-lg-2 d-flex align-items-center flex-column'>
                <p className='lower-banner-title text-center'>Project Plan</p>
                <p className='lower-banner-sub-title text-center'>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
                <p className='lower-banner-link'>Read More<Icon.ArrowRight color="orange" size={15}  className="align-center" /></p>
            </div>

            <div className='col-lg-2 d-flex align-items-center flex-column'>
                <p className='lower-banner-title text-center'>Interior Work</p>
                <p className='lower-banner-sub-title text-center'>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
                <p className='lower-banner-link'>Read More<Icon.ArrowRight color="orange" size={15}  className="align-center" /></p>
            </div>

            <div className='col-lg-2 d-flex align-items-center flex-column'>
                <p className='lower-banner-title text-center'>Realization</p>
                <p className='lower-banner-sub-title text-center'>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
                <p className='lower-banner-link'>Read More<Icon.ArrowRight color="orange" size={15}  className="align-center" /></p>
            </div>

        </div>

        

        <div className='about-home container-fluid'>
            <div className='d-lg-flex  align-items-center justify-content-center about-home-flex flex-row-reverse gap-5'>
                <img className=' col-lg-3 img-fluid about-home-img' src={Homeimg1}></img>
                <div className='col-lg-3 d-flex flex-column gap-2'>
                    <p className='about-home-title '>We Create The Art Of Stylish Living Stylishly</p>
                    <p className='about-home-sub-title '>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
                    <div className='d-flex gap-4'>
                        
                            <Icon.Telephone className="telephone-icon align-center" color="black" size={40}  />
                        
                        <div className='d-flex flex-column '>
                            <p className='phone-no'>012345678</p>
                            <p className='phone-no-cap'>Call Us Anytime</p>
                        </div>

                    </div>
                    <button className='btn secondary-btn rounded-lg'>Get Started <Icon.ArrowRight color="white" size={15}  className="align-center" /></button>
                
                </div>

            </div>

        </div>

        <div className='testimonial container-fluid'>
            <div className='container d-flex align-items-center flex-column'>
                <p className=' col-lg-4 col-md-6 testimonial-title'>What the People Thinks About Us</p>
                <div className='container d-flex align-items-center justify-content-center gap-4 test-3-row' >
                <div className='d-flex col-lg-3 gap-5'>
                    <div className=' big-box'>
                        <div className='innerbox d-flex align-items-center flex-column gap-3'>
                            <div className=' d-flex align-items-center gap-3'>
                                <img className=' img-fluid testimonial-img' src={Nattasha}></img>
                                <div className='d-flex align-items-left flex-column '>
                                    <p className='testi-title'>Nattasha Mith</p>
                                    <p className='testi-sub'>Sydney, USA</p>

                                </div>
                            </div>
                            <p className='testi-cont'>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
                        </div>
                    </div>
                </div>

                <div className='d-flex col-lg-3 gap-5'>
                    <div className=' big-box'>
                        <div className='innerbox d-flex align-items-center flex-column gap-3'>
                            <div className=' d-flex align-items-center gap-3'>
                                <img className=' img-fluid testimonial-img' src={Nattasha}></img>
                                <div className='d-flex align-items-left flex-column '>
                                    <p className='testi-title'>Nattasha Mith</p>
                                    <p className='testi-sub'>Sydney, USA</p>

                                </div>
                            </div>
                            <p className='testi-cont'>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
                        </div>
                    </div>
                </div>

                <div className='d-flex col-lg-3 gap-5'>
                    <div className=' big-box'>
                        <div className='innerbox d-flex align-items-center flex-column gap-3'>
                            <div className=' d-flex align-items-center gap-3'>
                                <img className=' img-fluid testimonial-img' src={Nattasha}></img>
                                <div className='d-flex align-items-left flex-column '>
                                    <p className='testi-title'>Nattasha Mith</p>
                                    <p className='testi-sub'>Sydney, USA</p>

                                </div>
                            </div>
                            <p className='testi-cont'>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
                        </div>
                    </div>
                </div>

                </div>

                
            </div>
        </div>

        <div className="container slider">
            
            <Rerousel interval='100' stop='no'  >
                <img className='slide img-fluid' src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"></img>
                <img className='slide img-fluid' src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"></img>
                <img className='slide img-fluid' src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"></img>
                <img className='slide img-fluid' src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"></img>
                <img className='slide img-fluid' src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"></img>
                <img className='slide img-fluid' src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"></img>
                <img className='slide img-fluid' src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"></img>
                <img className='slide img-fluid' src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"></img>
                <img className='slide img-fluid' src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"></img>
                <img className='slide img-fluid' src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"></img>
                <img className='slide img-fluid' src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"></img>
                <img className='slide img-fluid' src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"></img>
      
            </Rerousel>
        
  
   
      

        </div>
    </div>
  );
};

export default Home;