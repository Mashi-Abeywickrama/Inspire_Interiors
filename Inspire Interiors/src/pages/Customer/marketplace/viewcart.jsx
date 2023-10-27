import { Breadcrumb } from "react-bootstrap";
import {
    MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography,
} from "mdb-react-ui-kit";
import { FaBookmark } from "react-icons/fa";

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSession } from '../../../constants/SessionContext';


// const cartItems = [
//     {
//         id: 1,
//         name: "Ball Chair",
//         color: "Orange Cushion with White Shell",
//         price: 7200.00,
//         imageUrl: "https://fr.aarniooriginals.com/cdn/shop/products/aarnio_originals_ballchair_orange_03_1200x.png?v=1676555615",
//     }, {
//         id: 1,
//         name: "4 Elements Wall Art",
//         color: "Metallic Black",
//         price: 3295.00,
//         imageUrl: "https://hencely.com/cdn/shop/products/4_seasons_metal_wall_decor_wall_hanging_wall_panels.jpg?v=1580109762",
//     }, {
//         id: 1,
//         name: "Field Lounge Chair",
//         color: "Tait Blush",
//         price: 3295.00,
//         imageUrl: "https://www.bludot.com.au/media/catalog/product/f/d/fd1_lngchr_bh_frontlow-field-lounge-chair-tait-blush_2.jpg?optimize=medium&fit=bounds&height=1200&width=1500&canvas=1500:1200",
//     }, {
//         id: 1,
//         name: "ARCH Chair",
//         color: "Pebble Green Boucle Fabric with Black Frame",
//         price: 999.00,
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbxvGYSAn0cEqXuep3SzW92wJGK5Fh38Emg&usqp=CAU",
//     },
//     // Add more items...
// ];

// const totalItems = cartItems.length;

const Cart = () => {
    const [cartItems, setcartItems] = useState([]);
    const [productData, setproductData] = useState([]);
    const [loading, setLoading] = useState(true);


    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;


    const apiURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiURL,
        timeout: 5000,
    });


    //   async function fetchAndStoreCarttData(userId) {
    //     try {
    //         const response = await axiosInstance.get(`/getcart/${userId}`);

    //         // Map the product data to the desired format
    //         setcartItems(response.data);

    //         // You now have the productData array populated with the data from the backend
    //         console.log('Cart Data:', cartItems);
    //     } catch (error) {
    //         console.error('Error fetching products by userId:', error);
    //         // Handle errors
    //     }
    // }
    // useEffect(() => {
    //     fetchAndStoreCarttData(userId);
    //     }, []);

    async function fetchAndStoreCartData(userId) {
        try {
            // Fetch cart data
            const cartResponse = await axiosInstance.get(`/getcart/${userId}`);
            const cartItems = cartResponse.data;

            // Fetch product data for each cart item and combine them
            const cartItemsWithProductDetails = await Promise.all(
                cartItems.map(async (cartItem) => {
                    try {
                        const productResponse = await axiosInstance.get(`/getproductdata/${cartItem.productId}`);
                        const productData = productResponse.data;

                        // Combine cart item with product details
                        return { ...cartItem, productData };
                    } catch (error) {
                        console.error('Error fetching product details:', error);
                        return null; // Handle errors as needed
                    }
                })
            );

            // Filter out any items where product details couldn't be fetched
            const filteredCartItems = cartItemsWithProductDetails.filter(Boolean);

            // Store the combined cart items with product details in state
            setcartItems(filteredCartItems);

            console.log('Cart Data with Product Details:', filteredCartItems);
        } catch (error) {
            console.error('Error fetching cart data:', error);
            // Handle errors
        }
    }

    useEffect(() => {
        fetchAndStoreCartData(userId);
    }, []);


    const itemCount = cartItems.length;


    async function fetchAndStoreProductData(productId) {
        try {
            const response = await axiosInstance.get(`/getproductdata/${productId}`);

            // Map the product data to the desired format
            setproductData(response.data);

            // You now have the productData array populated with the data from the backend
            console.log('Product Data:', productData);
        } catch (error) {
            console.error('Error fetching products by userId:', error);
            // Handle errors
        }
    }

    return (
        <>
            <div className="background d-flex flex-column justify-content-between w-100 rounded Cabin-text  ">
                {/* Topic */}
                <div className='top-div h-80 bg-light shadow rounded py-3'>
                    <div className='row container'>
                        <div className='row d-flex align-items-center justify-content-start'>
                            <div className='col-md-4 col-sm-12 col-12 fs-5'>
                                <Breadcrumb className="fw-bold">
                                    <Breadcrumb.Item>
                                        Cart
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item className="custom-breadcrumb-divider fst-italic" active>
                                        <span className="fst-italic">({itemCount} item)</span>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex gap-2">
                        {/* cart */}
                        <div className="d-flex m-0 p-2 h-auto">
                            <MDBContainer className="rounded p-0 ">
                                <MDBRow className="justify-content-center align-items-center h-100">
                                    {cartItems.map((item, index) => (
                                        <MDBCol md="10" key={item.id}>
                                            <MDBCard className="border-0 mb-2 bg-transparent">
                                                <MDBCardBody className="p-0">
                                                    <MDBRow className="justify-content-between align-items-center">
                                                        <MDBCol md="2" lg="2" xl="2">
                                                            <MDBCardImage className="rounded" fluid
                                                                src={(`../../../../src/assets/img/product/${item.productData.productImg}`)}
                                                                alt={item.productData.product_name} />
                                                        </MDBCol>
                                                        <MDBCol md="5" lg="5" xl="5">
                                                            <div >
                                                                {/* <p className="lead fw-normal mb-2">{item.name}</p> */}
                                                                <p>
                                                                    {/* <span className="text-muted">Color: </span>{item.color} */}
                                                                </p>
                                                            </div>
                                                            <div className="d-flex align-items-center w-50 mt-2 rounded border border-grey" >
                                                                <button className="bg-transparent text-dark">
                                                                    <MDBIcon fas icon="minus" />
                                                                </button>
                                                                <MDBInput min={0} defaultValue={2} type="number" className="d-flex bg-transparent fs-5 align-items-center justify-content-center text-dark border-0 text-center" size="sm" />
                                                                <button className="bg-transparent text-dark">
                                                                    <MDBIcon fas icon="plus" />
                                                                </button>
                                                            </div>
                                                        </MDBCol>
                                                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                                            <MDBTypography tag="h5" className="mb-0">
                                                                ${item.totalPrice.toFixed(2)}
                                                            </MDBTypography>
                                                        </MDBCol>
                                                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                            <a href="#!" className="text-danger">
                                                                <MDBIcon fas icon="trash text-danger" size="lg" />
                                                            </a>
                                                        </MDBCol>
                                                    </MDBRow>
                                                </MDBCardBody>
                                            </MDBCard>
                                            {index < cartItems.length - 1 && <hr />}
                                        </MDBCol>
                                    ))}
                                </MDBRow>
                            </MDBContainer>
                            <hr />
                        </div>

                        {/* Summery */}
                        <div className="d-flex w-40 me-3 ">
                            <div className=" border rounded p-1 w-98 h-custom f-color-summary">
                                <div className="m-2">
                                    <p className="fs-4 fw-bold ">
                                        Cart Summary
                                    </p>
                                    <div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Price :
                                        </div>
                                        <div>
                                            $56
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Discount :
                                        </div>
                                        <div>
                                            $56
                                        </div>
                                    </div><div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Shipping :
                                        </div>
                                        <div>
                                            $56
                                        </div>
                                    </div><div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Coupon Applied :
                                        </div>
                                        <div>
                                            $56
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <hr />
                                    </div>
                                    {/* total */}
                                    <div className="d-flex justify-content-between mb-2">
                                        <div>
                                            TOTAL :
                                        </div>
                                        <div>
                                            $56
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Estimated Delivery By :
                                        </div>
                                        <div>
                                            $56
                                        </div>
                                    </div>

                                    {/* coupon input */}
                                    <div className="mb-2 d-flex align-items-center">
                                        <input
                                            type="text"
                                            className="form-control rounded border-transparent"
                                            placeholder="Coupon Code"
                                        />
                                        <FaBookmark className="ms-2" /> {/* Bookmark icon */}
                                    </div>
                                    {/* checkout btn */}
                                    <Link to='/customer/checkout/address'>
                                        <div className="d-flex justify-content-end w-100 mb-2">
                                            <button className="btn-checkout w-100">Proceed to Checkout</button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Cart;