import * as Icon from 'react-bootstrap-icons';
import { Carousel } from 'react-bootstrap';
import PageNumb from "../../../components/customer/pagenum";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../../styles/customer/marketplace.css';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSession } from '../../../constants/SessionContext';



const dummyData = [
    {
        content: [
            'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
            'https://havenly.com/blog/wp-content/uploads/2022/07/render-final-2232106-38554-8220-106864de852c.jpeg',
            'https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg',
        ]
    }
];



const PopularView = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const apiBaseURL = 'http://localhost:8080';

    const [productData, setProductData] = useState([]);
    const [cartAdd, setCartAdd] = useState([]);

    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    // Create an Axios instance with the base URL
    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000, // You can adjust the timeout value as needed
    });

    // Get the current URL
    const currentURL = window.location.href;
    // Split the URL by "/"
    const splitURL = currentURL.split("/");
    // Extract the type from the URL
    const type = decodeURIComponent(splitURL[6]);
    console.log("Type: ", type)


    // console.log(productData)

    // console.log("gg", groupedData);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleCartAddition = async (product_id) => {

        try {
            const response = await axiosInstance.get("/getproductdata/" + product_id);
            if (response.status === 200) {
                console.log("Response from API:", response.data);

                setCartAdd(response.data);
                console.log("cart add", localStorage);
                try {
                    const response2 = await axiosInstance.post("/addtocart", {
                        productId: cartAdd[0].product_id,
                        userId: userId,
                        quantity: 1,
                        totalPrice: cartAdd[0].entry_price,

                    });
                    if (response2.status === 200) {
                        console.log("Response from API:", response2.data);
                        alert("Product added to cart successfully");
                    }
                    else {
                        console.log("Error from API");
                    }
                }
                catch (error) {
                    console.log("Error from API:", error);
                }

            }

        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    const [allProducts, setAllProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);

    const fetchAlPopularProducts = () => {

        axiosInstance.get('/all-popular-items')
            .then(response => {
                setPopularProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching popular products:', error);
            });
    };
    useEffect(() => {
        fetchAlPopularProducts();
    }, []);

    const fetchAllProducts = () => {

        axiosInstance.get('/viewproducts')
            .then(response => {
                setAllProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching  products:', error);
            });
    };
    useEffect(() => {
        fetchAllProducts();
    }, []);

    const popularProductDetails = (popularProducts, allProducts) => {
        const mergedData = popularProducts.map(
            (popularItem) => {
                const matchingProduct = allProducts.find(
                    (productItem) => productItem.product_id === popularItem[0]
                );



                if (matchingProduct) {
                    // Merge the data from both sources
                    return {
                        ...popularItem,
                        ...matchingProduct,

                    };
                } else {
                    return popularItem;
                }
            });

        return mergedData;
    };

    const mergedPopularProducts = popularProductDetails(popularProducts, allProducts);
    console.log("mergeData shits", mergedPopularProducts);

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
                                            <FontAwesomeIcon className='me-2 fs-3' icon={faArrowLeft} size="lg" />Popular Items
                                        </div>

                                    </Carousel.Caption>
                                </Link>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>

            <div className="row gap-2">
                <div className="w-100">
                    <div className="col d-flex flex-column w-100 flex-lg-row flex-md-row gap-3 flex-wrap gap-4">
                        {mergedPopularProducts.slice(startIndex, endIndex).map((data, index) => (
                            <div key={index} className="card h-100 mb-2 rounded-3 border-0 shadow w-20 w-lg-25 w-md-25 ">
                                <Link to={`/customer/marketplace/viewproduct/${data.product_id}`}>
                                    <img
                                        style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "10px" }}
                                        className="img-fluid"
                                        src={(`../../../../src/assets/img/product/${data.productImg}`)}

                                    />
                                </Link>
                                <div className="card-body m-0 p-0 mt-3">
                                    <div className="d-flex flex-row justify-content-evenly align-items-center gap-3">
                                        <div className="d-flex flex-column">
                                            <p className="card-text m-0 fs-6 fw-semibold Cabin-text" style={{ color: "#969696" }}>{data.product_name}</p>
                                            <p className="card-title fs-6 fw-bold m-0 Cabin-text">{data.type}</p>
                                            <p className="card-title fs-6 fw-bold m-0 Cabin-text">{generateStars(data[1])}</p>
                                            <p className="card-text fs-6 fw-bolder m-0 Cabin-text">{data.entry_price}</p>
                                        </div>
                                        <div onClick={() => handleCartAddition(data.product_id)}>
                                            <Icon.Bag className="align-items-center text-white" size={35} style={{ backgroundColor: "#035C94", padding: '8px', borderRadius: '5px' }} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>
            {/* Pagination at the Bottom */}
            <div className="container mt-1">
                <div className="row">
                    <div className="d-flex col text-center justify-content-center align-items-center">
                        <PageNumb
                            currentPage={currentPage}
                            totalPages={Math.ceil(productData.length / itemsPerPage)}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    </div>
                </div>
            </div>
        </div >


    );
}
export default PopularView;
