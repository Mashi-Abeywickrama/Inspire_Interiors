import { Breadcrumb, Button } from "react-bootstrap";
import {
    MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography,
} from "mdb-react-ui-kit";
import { FaBookmark } from "react-icons/fa";

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSession } from '../../../constants/SessionContext';
import { Windows } from "react-bootstrap-icons";
import Stripe from "react-stripe-checkout";


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
    const [quantity, setQuantity] = useState('');
    const [loading, setLoading] = useState(true);
    const [orderSummary, setOrderSummary] = useState({
        total: 0,
        discount: 0,
        shipping: 0,

    });


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

    const handleDeleteClick = (cartId) => {
        const apiBaseURL = 'http://localhost:8080'; // Replace this with the base URL of your Spring Boot backend

        const axiosInstance = axios.create({
            baseURL: apiBaseURL,
            timeout: 5000,
        });

        axiosInstance
            .delete(`/remove_cart/${cartId}`)
            .then((response) => {
                console.log('Deleted', response.data);
            })
            .catch((error) => {
                console.error('Error deleting cart item:', error);
            });
    };

    

    const incrementValue = (cartId, updatedQuantity) => {
    // Send the updated quantity to the API
    updateQuantity(cartId, updatedQuantity);
};

const decrementValue = (cartId, updatedQuantity) => {
    // Send the updated quantity to the API
    updateQuantity(cartId, updatedQuantity);
};

const updateQuantity = (cartId, updatedQuantity) => {
    axiosInstance
        .put(`/updateCartQuantity/${cartId}`, {
            quantity: updatedQuantity
        })
        .then((response) => {
            // Update the item's quantity in your component state
            const updatedCartItems = cartItems.map((item) => {
                if (item.cartId === cartId) {
                    return { ...item, quantity: updatedQuantity };
                }
                return item;
            });
            setcartItems(updatedCartItems);
            console.log('updated', response.data);
        })
        .catch((error) => {
            console.error('Error updating cart item:', error);
        });
};

let totalPrice = 0;
    let discount = 0;
    let shipping = 0;

    cartItems.forEach((item) => {
        const itemPrice = item.totalPrice * item.quantity;
        const discountPrice = item.productData[0].discount * itemPrice *0.01;
        
        totalPrice += itemPrice;
        discount += discountPrice;
        shipping += item.productData[0].shipping_fee;
        // You can calculate discounts and shipping per item if needed
        // discount += ...;
        // shipping += ...;
    });

    function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-based
    const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    const today = new Date(); // Get today's date
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 7); // Add 7 days

    const formattedDate = formatDate(futureDate);

     const [shippingAddresses, setShippingAddresses] = useState([]);
     const [selectedAddressId, setSelectedAddressId] = useState(''); // State variable to store the selected address ID
     const [variation_id, setVariation_id] = useState(''); // State variable to store the selected address ID

    

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

    const handleAddressSelect = (event) => {
    const selectedId = event.target.value;
    setSelectedAddressId(selectedId);
    console.log('Selected address ID:', selectedId);
    };

    async function handleToken(token) {
        console.log(token);
        await axios.post("http://localhost:8080/api/payment/charge", "", {         
            headers: {
            token: token.id,
            amount: totalPrice,
            },}).then(() => {
            handleNewOrder()
            }).catch((error) => {
            console.log(error);
        });
    }

    const handleNewOrder = async (id) =>{

        cartItems.forEach((item) => {
            axiosInstance.get(`/viewvariations/product/${item.productId}`)
            .then((response2) => {
                console.log('Variations:', response2.data[0].variation_id);
                setVariation_id(response2.data[0].variation_id);
                
                axiosInstance.post("/addorder",  {         
            customer: userId,
                product: item.productData[0].product_id,
                    quantity: item.quantity,
                    price:(item.productData[0].entry_price * item.quantity) -  (item.productData[0].entry_price * item.productData[0].discount * 0.01 * item.quantity) + item.productData[0].shipping_fee,
                    shipping_address: selectedAddressId,
                    status: "New",
                    variation_id: response2.data[0].variation_id,
                    vendor: item.productData[0].vendor_id,
            
            }).then(() => {
                console.log("Added")
                }).catch((error) => {
                console.log(error);
            });
            })
            .catch((error) => {
                console.error('Error fetching variations:', error);
            });


            

    });


        

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
                                                                src={(`../../../../src/assets/img/product/${item.productData[0].productImg}`)}
                                                                alt={item.productData[0].product_name} />
                                                        </MDBCol>
                                                        <MDBCol md="5" lg="5" xl="5">
                                                            <div >
                                                                <p className="lead fw-normal mb-2">{item.productData[0].product_name}</p>
                                                                <p>
                                                                    <span className="text-muted">Type: </span>{item.productData[0].type}
                                                                </p>
                                                            </div>
                                                            <div className="d-flex align-items-center w-50 mt-2 rounded border border-grey" >
                                                                <button className="bg-transparent text-dark" onClick={() => decrementValue(item.cartId, item.quantity - 1)}>
                                                                    <MDBIcon fas icon="minus" />
                                                                </button>
                                                                <MDBInput min={0} defaultValue={item.quantity} value={item.quantity} onChange={(e) => updateQuantity(item.cartId, parseInt(e.target.value))} type="number" className="d-flex bg-transparent fs-5 align-items-center justify-content-center text-dark border-0 text-center" size="sm" />
                                                                <button className="bg-transparent text-dark" onClick={() => incrementValue(item.cartId, item.quantity + 1)}>
                                                                    <MDBIcon fas icon="plus" />
                                                                </button>
                                                            </div>
                                                        </MDBCol>
                                                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                                            <MDBTypography tag="h5" className="mb-0">
                                                                ${item.totalPrice.toFixed(2) * item.quantity }
                                                            </MDBTypography>
                                                        </MDBCol>
                                                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                            <Button className="text-danger bg-light border-0" onClick={() => handleDeleteClick(item.cartId)}>
                                                                <MDBIcon fas icon="trash text-danger" size="lg" />
                                                            </Button>
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
                                            Rs.{totalPrice}
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Discount :
                                        </div>
                                        <div>
                                            Rs.{discount}
                                        </div>
                                    </div><div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Shipping :
                                        </div>
                                        <div>
                                            Rs.{shipping}
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
                                            Rs.{totalPrice + shipping - discount}
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <div>
                                            Estimated Delivery By :
                                        </div>
                                        <div>
                                            {formattedDate}
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column w-100 mt-5">
                                    <label htmlFor="shippingAddress">Select Shipping Address:</label>
                                    <select
                                        id="shippingAddress"
                                        className="form-select"
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
                                    {/* checkout btn */}
                                    
                                         <div  className='add-btn w-100 my-3 custom-stripe-button'>
                            <Stripe
                            stripeKey="pk_test_51O5OPWG6Fh5wKFlLlB5wXQ4kHU0VPcJth8C2bO8epZnVRZPpn0TQfXD7fmealo9pKV0QexwxkVdzf4QiAoqaVV3k00SyiUZvS0"
                            token={handleToken}
                            // disableDefaultStyles={true}
                            name="Buy Now"
                            /> 
                            </div>
                                  
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