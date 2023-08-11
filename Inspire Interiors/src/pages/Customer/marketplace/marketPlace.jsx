import * as Icon from 'react-bootstrap-icons';
import { Carousel } from 'react-bootstrap';     
import Adv1 from './../../../assets/img/adv/adv1.jpg';
import LivinRoom from './../../../assets/img/customer/livinroom.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../../styles/customer/marketplace.css';

const MarketPlace = () => (
    <>

        <div className="background-grey p-3 rounded-3">
            <div className='row'>
                <p className='heading h4 mb-3'>Best Deals</p>
            </div>
            <div className="row first-design">
                <div className="w-100">
                    <Carousel style={{width:"100%",height:"max-content",objectFit:"cover",borderRadius:"20px"}}>

                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={Adv1}
                                alt="First slide" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Adv1}
                                alt="Second slide" />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Adv1}
                                alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>
            <div>
            </div>

            <div className='row d-flex flex-row gap-1 mb-3 mt-4 align-items-center align-contents-center'>
                <p className='heading h4  w-auto m-0 ' >Categories</p>
                <div className='d-flex flex-row gap-2 w-auto  align-items-center justify-content-start'>
                <p className=' w-auto m-0 p-0 '>See all</p>
                <Icon.ArrowRight/>
                </div>
            </div>
             <div className="row">
                <div className="w-100">
                    <Carousel style={{width:"100%"}}>

                        <Carousel.Item>
                                                <div style={{height:'auto', width:'100%'}} className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row  gap-5 justify-content-evenly '>
                            <div style={{height:'200px'}} className='w-lg-25 w-100 rounded-2' >
                        
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                                
                            </div>
                            <div style={{height:'200px'}} className='w-lg-25 w-100 rounded-2' >
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                            </div>
                             <div style={{height:'200px'}} className='w-lg-25 w-100 rounded-2' >
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                            </div>
                            </div>
                           
                        </Carousel.Item>

                        <Carousel.Item>
                                                <div style={{height:'auto', width:'100%'}} className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row  gap-5 justify-content-evenly '>
                            <div style={{height:'200px'}} className='w-lg-25 w-100 rounded-2' >
                
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                                
                            </div>
                            <div style={{height:'200px'}} className='w-lg-25 w-100 rounded-2' >
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                            </div>
                             <div style={{height:'200px'}} className='w-lg-25 w-100 rounded-2' >
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                            </div>
                            </div>
                           
                        </Carousel.Item>

                        <Carousel.Item>
                                               <div style={{height:'auto', width:'100%'}} className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row  gap-5 justify-content-evenly '>
                            <div style={{height:'200px'}} className='w-lg-25 w-100 rounded-2' >
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                            </div>
                            <div style={{height:'200px'}} className='w-lg-25 w-100 rounded-2' >
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                            </div>
                             <div style={{height:'200px'}} className='w-lg-25 w-100 rounded-2' >
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                            </div>
                            </div>
                           
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>

            <div className='row d-flex flex-row gap-1 mb-3 mt-4 align-items-center align-contents-center'>
                <p className='heading h4  w-auto m-0 ' >Popular</p>
                <div className='d-flex flex-row gap-2 w-auto  align-items-center justify-content-start'>
                <p className=' w-auto m-0 p-0 '>See all</p>
                <Icon.ArrowRight/>
                </div>
            </div>
             <div className="row">
                <div className="w-100">
                    <div className="col d-flex flex-column w-100 flex-lg-row flex-md-row gap-3">
                                <div  class="card h-100 mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 ">
                                    <img style={{height:"250px",objectFit:"cover",borderRadius:"10px"}}  className="img-fluid" src={Adv1} class="card-img-top" alt="whitesofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                <p class="card-title fs-6 fw-bold m-0 Cabin-text">Soderhamn</p>
                                                <p className="card-text fs-6 fw-bolder m-0 Cabin-text">$499</p>
                                            </div>
                                            <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div  class="card h-100 mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 ">
                                    <img style={{height:"250px",objectFit:"cover",borderRadius:"10px"}}  className="img-fluid" src={Adv1} class="card-img-top" alt="whitesofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                <p class="card-title fs-6 fw-bold m-0 Cabin-text">Soderhamn</p>
                                                <p className="card-text fs-6 fw-bolder m-0 Cabin-text">$499</p>
                                            </div>
                                            <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div  class="card h-100 mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 ">
                                    <img style={{height:"250px",objectFit:"cover",borderRadius:"10px"}}  className="img-fluid" src={Adv1} class="card-img-top" alt="whitesofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                <p class="card-title fs-6 fw-bold m-0 Cabin-text">Soderhamn</p>
                                                <p className="card-text fs-6 fw-bolder m-0 Cabin-text">$499</p>
                                            </div>
                                            <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div  class="card h-100 mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 ">
                                    <img style={{height:"250px",objectFit:"cover",borderRadius:"10px"}}  className="img-fluid" src={Adv1} class="card-img-top" alt="whitesofa" />
                                    <div class="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696"}}>SOFA</p>
                                                <p class="card-title fs-6 fw-bold m-0 Cabin-text">Soderhamn</p>
                                                <p className="card-text fs-6 fw-bolder m-0 Cabin-text">$499</p>
                                            </div>
                                            <Icon.Bag className="align-items-center" size={35} style={{ color: "white", backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="w-100">
                    <Carousel style={{width:"100%"}}>

                        <Carousel.Item>
                                                <div style={{height:'auto', width:'100%'}} className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row  gap-5 justify-content-evenly '>
                            <div style={{height:'200px'}} className='w-lg-50 w-md-50 w-100 rounded-2' >
                        
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                                
                            </div>
                            <div style={{height:'200px'}} className='w-lg-50 w-md-50 w-100 rounded-2' >
                        
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                                
                            </div>
                            </div>
                           
                        </Carousel.Item>

                        <Carousel.Item>
                                                <div style={{height:'auto', width:'100%'}} className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row  gap-5 justify-content-evenly '>
                            <div style={{height:'200px'}} className='w-lg-50 w-md-50 w-100 rounded-2' >
                        
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                                
                            </div>
                            <div style={{height:'200px'}} className='w-lg-50 w-md-50 w-100 rounded-2' >
                        
                                <img style={{objectFit:"cover", width:'100%', height:'100%',borderRadius:'5px'}} src={Adv1} alt="" />
                                
                            </div>
                            </div>
                           
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>

            <div className='row d-flex flex-column gap-1 mb-3 mt-4 align-items-start align-contents-center'>
                <p className='heading h4  w-auto m-0 ' >Rooms</p>
                <div className='d-flex flex-row gap-2 w-auto  align-items-center justify-content-start'>
                <p className=' w-auto m-0 p-0 '>Furniture for every corners in your home</p>
        
                </div>
            </div>
             <div className="row">
                <div className="w-100">
                    <div className="col d-flex flex-column w-100 flex-lg-row flex-md-row gap-4">
                                <div style={{backgroundImage: `url(${LivinRoom})`,height:"332px"}}  class="  mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 p-3  ">
                                    <p className='h5'>Living Room</p>   
                                </div>
                                <div style={{backgroundImage: `url(${LivinRoom})`,height:"332px"}}  class="  mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 p-3  ">
                                    <p className='h5'>Living Room</p>   
                                </div>
                                <div style={{backgroundImage: `url(${LivinRoom})`,height:"332px"}}  class="  mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 p-3  ">
                                    <p className='h5'>Living Room</p>   
                                </div>
                                <div style={{backgroundImage: `url(${LivinRoom})`,height:"332px"}}  class="  mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25 p-3  ">
                                    <p className='h5'>Living Room</p>   
                                </div>
                             
                    </div>
                </div>
            </div>
        </div>


    </>

)


export default MarketPlace;
