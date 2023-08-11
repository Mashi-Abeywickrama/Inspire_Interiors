import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, Breadcrumb, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './../../../styles/customer/designs.css';
import { Link } from 'react-router-dom';
import Customer from './../../../assets/img/vendor/customer.png';

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

const designerCards = [
    // Cards data for the similar designers section...
    {
        name: 'Mashi',
        image: 'https://img.freepik.com/premium-vector/avatar-icon001_750950-50.jpg?w=360',
    },
    {
        name: 'Shinthu',
        image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
    },
    {
        name: 'Zulfa',
        image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
    },
    {
        name: 'Hari',
        image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
    },
    {
        name: 'Ghostie',
        image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
    },
    {
        name: 'Rujhan',
        image: 'https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg',
    },
];

const ViewDesigner = () => {
    return (
        <>
            <div className="background d-flex flex-column justify-content-between w-100 rounded Cabin-text gap-3 ">
                {/* Topic */}
                <div className='top-div bg-light shadow rounded py-3'>
                    <div className='row container'>
                        <div className='row d-flex align-items-center justify-content-start'>
                            <div className='col-md-4 col-sm-12 col-12 fs-5'>
                                <Breadcrumb className="fw-bold">
                                    <Breadcrumb.Item>
                                        Designs
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" active>
                                        <FontAwesomeIcon icon={faAngleRight} className='me-2' />
                                        Designer
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider" active>
                                        <FontAwesomeIcon icon={faAngleRight} className='me-2' />
                                        Victor Avocado
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </div>
                    </div>
                    {/* Designer profile and Projects */}
                    <div className=" d-flex w-100 justify-content-center m-0 col-md-4 col-lg-2 col-sm-8">
                        {/* designer profile content */}
                        <div className="col px-4 ">
                            <div className="d-flex flex-column flex-lg-row flex-md-row gap-4">
                                <img style={{ backgroundColor: "#FEE4CB" }} className="img-fluid p-3 rounded-4 border" src={Customer} />
                                <div className="d-flex flex-column">
                                    <p className="fs-3 fw-bold Cabin-text">Victor Avocado</p>
                                    <div className="d-flex flex-row gap-3 mb-2">
                                        <div className="d-flex fs-6 fw-semibold Cabin-text f-color-grey justify-content-center align-items-center">Interior Designer</div>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className='d-flex flex-row gap-1'>
                                                {generateStars(4.6)}
                                            </div>
                                            <div className="d-flex flex-row gap-1 float-end">
                                                <div className="fs-6 fw-bold Cabin-text">4.6/5.0</div>
                                                <div className="fs-6 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>(556)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row gap-4">
                                        <Icon.Twitter size={25} color="#575757" />
                                        <Icon.Linkedin size={25} color="#575757" />
                                        <Icon.Youtube size={25} color="#575757" />
                                    </div>
                                </div>
                            </div>

                            {/* 3 boxes */}
                            <div className="d-flex align-items-center justify-content-evenly py-2 m-1">
                                <div className="d-flex w-25 three-box rounded align-items-center justify-content-center gap-2">
                                    <div className="w-25 fw-bold fs-4 d-flex align-items-center f-color-y">
                                        50
                                    </div>
                                    <div className=" fs-5 d-flex align-items-center f-color-f1">
                                        Designs
                                    </div>
                                </div>
                                <div className="d-flex w-25 three-box rounded align-items-center justify-content-center gap-2">
                                    <div className="w-25 fw-bold fs-4 d-flex align-items-center f-color-y">
                                        50
                                    </div>
                                    <div className=" fs-5 d-flex align-items-center f-color-f1">
                                        Designs
                                    </div>
                                </div>
                                <div className="d-flex w-25 three-box rounded align-items-center justify-content-center gap-2">
                                    <div className="w-25 fw-bold fs-4 d-flex align-items-center f-color-y">
                                        50
                                    </div>
                                    <div className=" fs-5 d-flex align-items-center f-color-f1">
                                        Designs
                                    </div>
                                </div>

                            </div>
                            {/* bio */}
                            <div>
                                <div className='fs-6 fw-bold f-color-grey'>
                                    Bio
                                </div>
                                <p>
                                    The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at.
                                    Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.
                                </p>
                            </div>
                            {/* speciality */}
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <div className='fs-6 fw-bold f-color-grey'>
                                        Speciality
                                    </div>
                                    <div className="badge Cabin-text px-3 py-2" style={{ color: "#000000", backgroundColor: "#CCF8FE" }}>
                                        Bed Room
                                    </div>

                                </div>
                                <div className='see-all justify-content-center align-items-center btn btn-link custom-btn'>
                                    <i className="fas fa-plus mr-1 "></i> Request New Order
                                </div>

                            </div>

                        </div>

                        {/* designer projects content */}
                        <div className="col flex-lg-row  ">
                            <div className=' fs-5 fw-bold'>
                                Top Selling Designs <span className="badge fs-6 see-all">See All <Icon.ArrowRight /></span>
                            </div>
                            <div className="d-flex mt-3 flex-wrap">
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3 px-2">
                                    <img src="https://media.architecturaldigest.com/photos/633f30fc2b9fc0b5557ab24d/4:3/w_4479,h_3359,c_limit/CH_ASH_Staging_West%20Village%20Townhouse_NYC2.jpg" alt="Design 1" className="img-fluid h-100 rounded" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3 px-2">
                                    <img src="https://www.mydomaine.com/thmb/IfzuHbluKZgWbKmrcFVNpgCgAd0=/2500x0/filters:no_upscale():strip_icc()/20220106_BeccaInteriors_Edits-67-1d9f25e298c04c17b9485f569c7a1082.jpg" alt="Design 2" className="img-fluid h-100 rounded" />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 mb-3 px-2">
                                    <img src="https://i.pinimg.com/1200x/af/2c/ff/af2cfff04b011f798c290a5ca0d77a08.jpg" alt="Design 3" className="img-fluid rounded h-100" />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 mb-3 px-2">
                                    <img src="https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg" alt="Design 4" className="img-fluid rounded h-100" />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 mb-3 px-2">
                                    <img src="https://i0.wp.com/cocolapinedesign.com/wp-content/uploads/MED245C6E221EA54E9885F76AE1B099BE24_max.jpg?resize=1024%2C682&ssl=1" alt="Design 5" className="img-fluid rounded h-100" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Similar Designers */}
                <div className='top-div bg-light shadow rounded mb-3'>
                    <div className='row container'>
                        <div className='row d-flex align-items-center justify-content-start'>
                            <div className='col-md-4 col-sm-12 col-12 fs-5 fw-bold'>
                                Similar Designers
                            </div>
                        </div>
                    </div>
                    <div className='bg-light justify-content-center image-bar row w-100 flex-row m-0 p-0 '>
                        {designerCards.map((card, index) => (
                            <div key={index} className='d-flex col-5 col-md-4 col-lg-2 col-sm-8 mb-3'>
                                <Link to='/customer/designs/viewdesigner'>
                                    <Card className='h-100 border-0 rounded' style={{ color: '#7C828B' }}>
                                        <Card.Img
                                            variant='top'
                                            src={card.image}
                                            className='p-2 rounded-3 ' />
                                        <Card.Body className='flex-row justify-content-center'>
                                            <Card.Text className='d-flex m-0 lead fs-6 justify-content-center' >
                                                {card.name}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewDesigner;