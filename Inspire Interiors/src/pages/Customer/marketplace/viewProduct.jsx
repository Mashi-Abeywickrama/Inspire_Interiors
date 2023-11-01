import React , { useEffect, useState }from 'react';
import * as Icon from 'react-bootstrap-icons';
import './../../../styles/customer/viewProduct.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactStars from "react-rating-stars-component";
import { Carousel }  from 'react-responsive-carousel';
import axios from 'axios';

import Stripe from "react-stripe-checkout";

import Chair1 from './../../../assets/img/customer/chair1.png';
import Wood from "./../../../assets/img/vendor/material/wood.jpeg";
import Plywood from "./../../../assets/img/vendor/material/plywood.jpeg";
import Mahogany from "./../../../assets/img/vendor/material/mahogany.jpg";
import Cotton from "./../../../assets/img/vendor/material/cotton.png";
import Glass from "./../../../assets/img/vendor/material/glass.jpg";
import QRPopup from '../../../components/customer/popup/ARPopup';
import { useSession } from '../../../constants/SessionContext';
import SeeAllReviews from '../../../components/customer/popup/SeeAllReviewsPopup';

const stardata = {
    data:"4.5"
}

const ViewProduct = () => {

    const apiBaseURL = 'http://localhost:8080';

    const [productData, setProductData] = useState([]);
    const [reviewData, setReviewData] = useState([]);
    const [variationData, setVariationData] = useState([]);
    const [selectedVariation, setSelectedVariation] = useState(null);
    const [selectedVariationIndex, setSelectedVariationIndex] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedVariationColor, setSelectedVariationColor] = useState('');
    const [selectedVariationMaterial, setSelectedVariationMaterial] = useState('');
     const [shippingAddresses, setShippingAddresses] = useState([]);
     const [selectedAddressId, setSelectedAddressId] = useState(''); // State variable to store the selected address ID


    const handleAddressSelect = (event) => {
        const selectedId = event.target.value;
        setSelectedAddressId(selectedId);
        console.log('Selected address ID:', selectedId);
    };

    const urlParams = new URLSearchParams(window.location.search);
    const productID = urlParams.get("id");

    // Create an Axios instance with the base URL
    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    // Get the current URL
    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const id = decodeURIComponent(splitURL[6]);


    // Function to fetch and store the product data
    async function fetchAndStoreProductData(id) {
        try {
            const response = await axiosInstance.get(`/product/${id}`);
            setProductData(response.data);
            console.log('Product Data:', response.data);
        } catch (error) {
            console.error('Error fetching products by Type:', error);
        }
    }
    
    // Call the function to fetch and store the product data
    useEffect(() => {
    fetchAndStoreProductData(id);
    }, []);

    const [averageRating, setAverageRating] = useState(0.0);

    async function fetchAndStoreReviewData(id) {
        try {
          const response = await axiosInstance.get(`/rating/${id}`);
          setReviewData(response.data);
          
          // Set the average rating from the response to the state
          setAverageRating(response.data.averageRating);
        } catch (error) {
          console.error('Error fetching review data:', error);
        }
    }

    useEffect(() => {
    fetchAndStoreReviewData(id);
    }, [id]);

    const materialImage = (material) => {
        if(material === 'wood'){
            return <img className="img-fluid radius-material" style={{width:"20px", height:"40px"}} src={Wood}/>;
        } else if(material === 'plywood'){
            return <img className="img-fluid radius-material" style={{width:"20px", height:"40px"}} src={Plywood} />;
        } else if(material === 'glass'){
            return <img className="img-fluid radius-material" style={{width:"20px", height:"40px"}} src={Glass} />;
        } else if(material === 'mahogany'){
            return <img className="img-fluid radius-material" style={{width:"20px", height:"40px"}} src={Mahogany} />;
        } else if(material === 'cotton'){
            return <img className="img-fluid radius-material" style={{width:"20px", height:"40px"}} src={Cotton} />;
        } else {
            return null;
        }
    }

    useEffect(() => {
        axiosInstance
        .get(`/viewvariations/product/${id}`)
        .then((response) => {
          setVariationData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log("Error fetching data", error);
        });
    }, []);

    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    useEffect(() => {
        // Make an API request to fetch the shipping addresses from the backend
        axiosInstance.post('/shippingaddresses',{
            userId: userId, // TODO: Replace with the actual user ID

        })
            .then(response => {
                setShippingAddresses(response.data); // Assuming the response is an array of shipping addresses
                console.log('Shipping addresses:', response.data);
            })
            .catch(error => {
                console.error('Error fetching shipping addresses:', error);
            });
    }, []); // Fetch the addresses when the component mounts

    // const rate = averageRating.toFixed(1)
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

    async function handleToken(token) {
        console.log(token);
        await axios.post("http://localhost:8080/api/payment/charge", "", {         
            headers: {
            token: token.id,
            amount: productData.entry_price,
            },}).then(() => {
            handleNewOrder(id)
            }).catch((error) => {
            console.log(error);
        });
    }

    const calculateTotalPrice = () => {
        // Calculate total price based on the quantity and product entry price
        const totalPrice = productData.entry_price * quantity;
        return totalPrice;
    }

    const highlightClass = 'highlightClass';
    const defaultClass = 'defaultClass';

    const handleVariationClick = (variation,index) => {
        setSelectedVariation(variation.variation_id);
        setSelectedVariationColor(variation.color);
        setSelectedVariationMaterial(variation.material);   
        setSelectedVariationIndex(index);
        
    }

    const getProductImage = () => {
        if (selectedVariation) {
            // Use the variation image
            return `./../../../../src/assets/img/variation/${selectedVariation}.jpg`;
        } else {
            // Use the default product image
            return `./../../../../src/assets/img/product/${productData.product_id}.jpg`;
        }
    }

    const handleNewOrder = async (id) =>{
        await axiosInstance.post("/addorder",  {         
           customer: userId,
              product: id,
                quantity: quantity,
                price: calculateTotalPrice(),
                shipping_address: selectedAddressId,
                variation_id: selectedVariation,
                status: "New",
                vendor: productData.vendor_id,
           
           }).then(() => {
            console.log("Added")
            }).catch((error) => {
            console.log(error);
        });

    }

    return (
        <>
            <div className="product-container view-product p-4 bg-white rounded-3 mb-4 me-3">
                <div className="d-flex flex-row gap-4 justify-content-between me-5">
                    <div className='d-flex flex-row gap-4'>
                    <p className="fs-3 fw-bold Cabin-text">Marketplace</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-3 fw-bold Cabin-text">{productData.type}</p>
                    <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                    <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>{productData.product_name}
                    
                    </p>
                    </div>
                    <QRPopup />
                </div>
                <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-evenly'>
                    <div className='d-flex flex-column side-div'>
                        <p className='fs-4 fw-semibold Cabin-text mt-3'>{productData.product_name}
                        {selectedVariationColor && selectedVariationMaterial && (
                                <span className="selected-variation-info">
                                      - {selectedVariationColor} {selectedVariationMaterial}
                                </span>
                            )}
                        </p>
                        <div className='d-flex flex-row w-75 justify-content-between my-2'>
                            <div className='fs-4 fw-normal Cabin-text'>${productData.entry_price}</div>
                            <div className="d-flex flex-row gap-3">
                            <div className='d-flex align-items-center'>{generateStars(averageRating.toFixed(1))}</div>
                                <div className="d-flex flex-row gap-1 float-end align-items-center">
                                    <div className="fs-6 fw-bold Cabin-text">{averageRating.toFixed(1)}/5.0</div>
                                    <div className="fs-6 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>({reviewData.totalVotes})</div>
                                </div>

                                <div className="d-flex flex-row gap-1 float-end align-items-center">
                                    <SeeAllReviews productData = {productData}/>
                                </div>
                            </div>
                            
                        </div>
                        <p className='fs-6 fw-normal Cabin-text w-50 mt-2'>{productData.product_description}</p>
                        <div className="d-flex flex-wrap gap-1">
                            {variationData.map((data, index) => (
                            <div   key={index} 
                            className={`d-flex flex-column ${selectedVariationIndex === index ? highlightClass : defaultClass}`}
                            style={{ marginRight: '10px',cursor:'pointer' }} onClick={() => handleVariationClick(data,index)}>
                                <div className="d-flex gap-0">
                                    {materialImage(data.material)}
                                    <div className="radius-color" style = {{backgroundColor:data.color, width:"20px",height:"40px"} }></div>
                                </div>
                                
                            </div>
                            ))}
                        </div>
                        <div className='d-flex flex-row w-50 mt-5'>
                            <div class="mb-3">
                                <input
                                    style={{ backgroundColor: "#F1F1F1" }}
                                    type="number"
                                    class="form-control w-50 h-100"
                                    id="exampleFormControlInput1"
                                    placeholder="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                />
                            </div>
                            <div  className='add-btn w-75 custom-stripe-button'>
                            <Stripe
                            stripeKey="pk_test_51O5OPWG6Fh5wKFlLlB5wXQ4kHU0VPcJth8C2bO8epZnVRZPpn0TQfXD7fmealo9pKV0QexwxkVdzf4QiAoqaVV3k00SyiUZvS0"
                            token={handleToken}
                            disableDefaultStyles={true}
                            name="Buy Now"
                            />
                            </div>
                            
                        </div>
                        <div className='d-flex flex-row w-50 justify-content-between mt-4'>
                            <p className='fs-6 fw-normal Cabin-text'>Shipping Fee - {productData.shipping_fee}</p>
                            
                            <p className='fs-6 fw-normal Cabin-text'>Delivered within a week</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-4">
                            <p className="fs-3 fw-normal Cabin-text">
                                Total Price:
                            </p>
                            <p className="fs-3 fw-normal Cabin-text">
                                ${calculateTotalPrice() + productData.shipping_fee}+
                            </p>
                        </div>
                        <div className="d-flex flex-column w-50 mt-3">
                            <label htmlFor="shippingAddress ">Select Shipping Address:</label>
                            <select
                                id="shippingAddress"
                                className="form-select mt-2"
                                onChange={handleAddressSelect}
                                value={selectedAddressId} // Set the selected value based on state
                            >
                                
                                {shippingAddresses.map((address, index) => (
                                    <option key={index} value={address.id}>
                                        {address.address_title}, {address.lane}, {address.city}, {address.district}, {address.province}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='d-flex flex-row gap-4 mt-4'>
                            <Icon.BagDashFill className='mx-2' size={20} color="#035C94" />
                            <p className='fs-6 fw-semibold cabin-text' style={{ color: "#035C94" }} >Add to Cart</p>
                        </div>
                    </div>
                    <div className='w-25'>
                         <img className="img-fluid" src={getProductImage()} />
                    </div>

                </div>
                <div>
                    
                </div>
            </div>

        </>
    );
}

export default ViewProduct;