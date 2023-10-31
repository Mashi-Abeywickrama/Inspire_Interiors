import React,{useState, useEffect} from 'react';
import Sofa from './../../assets/img/vendor/sofa.png';

import '../../styles/vendor/viewStocks.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import axios from 'axios';

import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';
import {useSession} from '../../constants/SessionContext';

const ViewStocks = () => {
  const sessionItems = useSession();
  const vendorID = sessionItems.sessionData.userid;
  const [productData, setproductData] = useState([]);
  const [orderData, setorderData] = useState([]);

  const apiBaseURL = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  useEffect(() => {
    axiosInstance
      .get(`/viewproducts/vendor/${vendorID}`)
      .then((response) => {
        setproductData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
    });
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/vieworders/vendor/${vendorID}`)
      .then((response) => {
        setorderData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
    });
  }, []);

  const mergeData = (productData, orderData) => {
    const mergedData = productData.map(
      (productItem) => {
        const ProductOrder = orderData.find(
          (orderItem) => orderItem.product == productItem.product_id
        );

        if(ProductOrder) {
          return {
          ...productItem,
          ...ProductOrder
        };
      } else {
        return productItem;
      }
    });
    return mergedData;
  };

  const mergeProductorder = mergeData(productData, orderData);
  console.log("merge data:", mergeProductorder);

  const filteredData = (status) => 
    productData.filter((item) => item.product_status === status);

  return(
    <>
      <div className="stock-container background-total accordion bg-white rounded-3 mb-4 me-3">
          <div className="col-12 d-flex flex-column flex-lg-row flex-md-row flex-sm-row justify-content-between">
            <div className='d-flex flex-row gap-4 p-3 '>
              <Link to="/vendor/inventory"><p className="text-dark fs-5 fw-bold Cabin-text ">Inventory</p></Link>
              <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
              <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Stock</p>
            </div>
            <div>
              <Link to="/vendor/inventory/addstock"><button className='add-btn m-4'><Icon.PlusLg color="white" size={20}/>Add New</button></Link>
            </div>
          </div>
          <div>
          <Tabs
            defaultActiveKey="all"
            id="uncontrolled-tab-example"
            className="mb-3 bg-white tab"
          >
            <Tab eventKey="all" title="All">
              <div className='p-4'>
            
                <MDBDataTableV5 responsive
                striped
                bordered
                small
                data = {{
                  columns: [
                    {
                      label: 'PRODUCT',
                      field: 'product',
                      sort: 'asc',
                      width: 150
                    },
                    {
                      label: 'ENTRY PRICE',
                      field: 'entry',
                      sort: 'asc',
                      width: 200
                    },
                    {
                      label: 'DISCOUNT(%)',
                      field: 'discount',
                      sort: 'asc',
                      width: 100
                    },
                    {
                      label: 'PRICE',
                      field: 'price',
                      sort: 'asc',
                      width: 150
                    },
                    {
                      label: 'SOLD',
                      field: 'sold',
                      sort: 'asc',
                      width: 100
                    },
                    {
                      label: '  ',
                      field: 'action',
                      sort: 'NONE',
                      width: 100
                    }
                  ],
                  rows: productData.map((product) => {
                    return {
                      product: <div className='d-flex flex-row gap-4 align-items-center'>
                        <img src={product.image}/>
                        <p className='align-items-center mt-3'>{product.product_name}</p>
                      </div>,
                      entry: product.entry_price,
                      discount: product.discount,
                      price: product.entry_price - (product.entry_price * product.discount / 100),
                      sold: mergeProductorder.filter((item) => item.product == product.product_id).reduce((acc, item) => acc + item.quantity, 0),
                      action: <Link to={`/vendor/inventory/inventoryproduct?id=${product.product_id}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
                    }
                  })
                }}
                sortable={true}
                exportToCSV={true}
                paging={true}
                searching={true}
              />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default ViewStocks;