import * as Icon from 'react-bootstrap-icons';
import { Carousel } from 'react-bootstrap';
import PageNumb from "../../../components/customer/pagenum";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../../styles/customer/marketplace.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

const dummyData = [
    {
        title: 'Chair',
        content: [
            'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
            'https://havenly.com/blog/wp-content/uploads/2022/07/render-final-2232106-38554-8220-106864de852c.jpeg',
            'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
        ]
    }
];



const CategoryView = () => {

    const apiBaseURL = 'http://localhost:8080';

    // Create an Axios instance with the base URL
    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000, // You can adjust the timeout value as needed
    });

    // Get the current URL
    const currentURL = window.location.href;
    // Split the URL by "/"
    const splitURL = currentURL.split("/");
    // Extract the roomType from the URL
    const roomType = decodeURIComponent(splitURL[6]);
    console.log("room type: ", roomType)

    let groupedData = [];
    let productData = [];

    // Function to fetch and store the product data
    async function fetchAndStoreProductData(roomType) {
        try {
            const response = await axiosInstance.get(`/room-type/${roomType}`);
            const products = response.data;

            // Map the product data to the desired format
            productData = products.map(product => ({
                image: product.productImg,
                type: product.type,
                name: product.product_name,
                price: product.entry_price
            }));

            // You now have the productData array populated with the data from the backend
            console.log('Product Data:', productData);
        } catch (error) {
            console.error('Error fetching products by roomType:', error);
            // Handle errors
        }

        for (let i = 0; i < productData.length; i += 4) {
            groupedData.push(productData.slice(i, i + 4));
        }
        console.log("g", groupedData);
    }

    // Call the function to fetch and store the product data
    fetchAndStoreProductData(roomType);

    // console.log(productData)

    console.log("gg", groupedData);


    return (
        <>

            <div className="background-grey p-3 rounded-3">
                <div className="row first-design">
                    <div className="w-100 rounded">
                        <Carousel className="category-view w-100 rounded mb-3 carousel-height" style={{ height: "200px", objectFit: "cover" }}>
                            {dummyData[0].content.map((imageSrc, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100 rounded"
                                        style={{ height: "200px", objectFit: "cover" }}
                                        src={imageSrc}
                                        alt={dummyData[0].title}
                                    />
                                    <Link to='/customer/marketplace'>
                                        <Carousel.Caption className='d-flex justify-content-startpx-2' style={{ position: "absolute", top: 0, left: 0 }}>
                                            <div className=" align-items-center fs-3 ms-3" >
                                                <FontAwesomeIcon className='me-2 fs-3' icon={faArrowLeft} size="lg" />{roomType}
                                            </div>

                                        </Carousel.Caption>
                                    </Link>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>

                <div className="row gap-2">
                    {/* <div className="w-100">
                        <div className="col d-flex flex-column w-100 flex-lg-row flex-md-row gap-3">
                            {productData.map((data, index) => (
                                <div key={index} className="card h-100 mb-2 rounded-3 border-0 shadow w-100 w-lg-25 w-md-25">
                                    <Link to='/customer/marketplace/viewproduct'>
                                        <img
                                            style={{ height: "250px", objectFit: "cover", borderRadius: "10px" }}
                                            className="img-fluid"
                                            src={data.image}
                                            alt={data.brand}
                                        />
                                    </Link>
                                    <div className="card-body m-0 p-0 mt-3">
                                        <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                            <div className="d-flex flex-column">
                                                <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696" }}>{data.name}</p>
                                                <p className="card-title fs-6 fw-bold m-0 Cabin-text">{data.brand}</p>
                                                <p className="card-text fs-6 fw-bolder m-0 Cabin-text">{data.price}</p>
                                            </div>
                                            <Link to='/customer/cart'>
                                                <Icon.Bag className="align-items-center text-white" size={35} style={{ backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div> */}
                    {groupedData.map((group, groupIndex) => (
                        <div key={groupIndex} className="w-100">
                            <div className="col d-flex flex-column w-100 flex-lg-row flex-md-row gap-3">
                                {group.map((data, index) => (
                                    <div key={index} className="card h-100 mb-2 rounded-3 border-0 shadow" style={{ width: '25%' }}>
                                        <Link to='/customer/marketplace/viewproduct'>
                                            <img
                                                style={{ height: "250px", objectFit: "cover", borderRadius: "10px" }}
                                                className="img-fluid"
                                                src={data.image}
                                                alt={data.brand}
                                            />
                                        </Link>
                                        <div className="card-body m-0 p-0 mt-3">
                                            <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                                <div className="d-flex flex-column">
                                                    <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696" }}>{data.name}</p>
                                                    <p className="card-title fs-6 fw-bold m-0 Cabin-text">{data.brand}</p>
                                                    <p className="card-text fs-6 fw-bolder m-0 Cabin-text">{data.price}</p>
                                                </div>
                                                <Link to='/customer/cart'>
                                                    <Icon.Bag className="align-items-center text-white" size={35} style={{ backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination at the Bottom */}
                <div className='container mt-1'>
                    <div className='row'>
                        <div className='d-flex col text-center justify-content-center align-items-center '>
                            <PageNumb />
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
}
export default CategoryView;
