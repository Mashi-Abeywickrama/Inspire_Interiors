import React, { useState, useEffect } from 'react';
import Logo from './../../assets/img/admin/logo.png';
import './../../styles/admin/invoice.css';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom'; // Import useParams to access URL parameters

export default function Invoice() {
  const apiBaseURL = 'http://localhost:8080';
  const { orderid } = useParams(); // Get the order ID from the URL parameter

  const [orderData, setOrderData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        // Fetch the specific order data using the orderId from the URL parameter
        const response = await axios.get(apiBaseURL + `/getorder/${orderid}`);
        const orderData = response.data;

        // Update the state with the fetched order data
        setOrderData(orderData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData();
  }, [orderid]); // Fetch data when the orderId parameter changes
  console.log('orderid:', orderid);

  const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = date.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  };
  const currentDate = new Date();

  const handleSendClick = () => {
    const confirmSend = window.confirm(`Email this invoice to ${orderData.vendor || orderData.designer}?`);

    if (confirmSend) {
         alert(`Invoice sent`);
      // Add your logic to send the email here
      console.log('Sending email...');
    }
  };

  return (
    <div className="container-fluid ">
      <h3 className="">Invoice</h3>
      <div className="card">
        <div className="card-body">
          <div className="row d-flex w-100 align-items-baseline justify-content-between">
            <div className="col-md-5 mb-3 justify-content-center">
              <img src={Logo} alt="Logo" className='logo' />
              <div className="d-flex h2 align-items-center gap-2">
                <span className="d-flex fs-6">Phone No:</span>
                <span className="number d-flex fs-6">0112 434322</span>
              </div>
            </div>
            <div className="d-flex flex-column col-4">
                <div className="d-flex gap-2 align-items-center">
                  <span className="number fs-5">Invoice</span>
                  <div className="v-line"></div>
                  <span className="number fs-5">{orderData.vendor || orderData.designer}</span>
                </div>
                <div className="d-flex gap-2 h2 align-items-center">
                  <span className="d-flex fs-6">RefNo:</span>
                  <span className="number d-flex fs-6">{orderData.ref_no}</span>
                  <div className="v1-line"></div>
                  <span className="d-flex fs-6">Date:</span>
                  <span className="number d-flex fs-6">{formatDate(currentDate)}</span>
                </div>
              </div>
            <div className='col-md-4'></div>
            
            <hr />
          </div>

          <div className="container">
            <div className="gap"></div>
            <div className="row my-2 mx-1 justify-content-center flex-fill">
              <div className="col-md-12 ">
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col"></th>
                      <th scope="col">Quntity</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Commission </th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{orderData.design || orderData.product}</td>
                      <td></td>
                      <td>{orderData.quantity}</td>
                      <td>{orderData.price}</td>
                      <td>{orderData.commission}</td>
                      <td>{orderData.quantity*orderData.price-orderData.quantity*orderData.commission}</td>
                    </tr>
                    <tr>
                      <td className='sub'>SubTotal</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td> 
                      <td className='sub'>{orderData.quantity*orderData.price-orderData.quantity*orderData.commission}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='gap1'></div>

            <div className="row">
              <div className="col-md-2">
                <p className="ms-3">Shipping Address:</p>
              </div>
              <div className="col-md-2">
                <p className="number fs-4">
                  3000/B,
                  philosophy road,
                  kotlin,
                  SriLanka
                </p>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-md-2">
                <p>Thank you!</p>
              </div>
              <div className='col-md-6'></div>
              <div className="col-md-4 d-flex gap-2 justify-content-end">
                <div><button className='cancel'>
                <Link to="/admin/orders"> Cancel</Link>
               </button> </div>
                <div>
                  <button className='send' onClick={handleSendClick}>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
