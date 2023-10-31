import React,{useState, useEffect} from 'react';

import "../../styles/vendor/inventory.css";
import * as Icon from 'react-bootstrap-icons';
import Navigationbar from '../../components/navigationbar';
import VendorSidebar from './sidebar';

import Money from './../../assets/img/vendor/money.svg';
import LowStock from './../../assets/img/vendor/lowstock.png';
import Sofa from './../../assets/img/vendor/sofa.png';

import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';
import {useSession} from '../../constants/SessionContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const currentDate = new Date();
const oneWeekAgo = new Date(currentDate);
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

const getDayOfWeek = (date) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[date.getDay()];
};

const Inventory = () => {
  const sessionItems = useSession();
  const vendorID = sessionItems.sessionData.userid;

  const [productData, setproductData] = useState([]);
  const [orderData, setorderData] = useState([]);
  const [variationData, setvariationData] = useState([]);
  const [lowStockCount, setLowStockCount] = useState(0);
  const [outStockCount, setOutStockCount] = useState(0);
  const [productTypeData, setProductTypeData] = useState([]);
  const [bardata, setBardata] = useState([]);
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);

  const urlParams = new URLSearchParams(window.location.search);
  const productID = urlParams.get('id');

  const apiBaseURL = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000
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
        .get(`/getorder/vendor/${vendorID}`)
        .then((response) => {
            const subtotals = response.data.map(order => order.quantity * order.price);

            const totalOrderPrice = subtotals.reduce((total, subtotal) => total + subtotal, 0);
            setTotalOrderPrice(totalOrderPrice);
            console.log(totalOrderPrice);

            setorderData(response.data);
            console.log(response.data);

            const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            const BarDataArray = weekdays.map((day) => ({
                name: day,
                Total: 0,  
            }));

            response.data.forEach((order) => {
                const orderDate = new Date(order.date);
                if (orderDate >= oneWeekAgo && orderDate <= currentDate) {
                    const dayOfWeek = getDayOfWeek(orderDate);
                    const index = weekdays.indexOf(dayOfWeek);
                    if (index !== -1) {
                        BarDataArray[index].Total++;
                    }
                }
            });

            setBardata(BarDataArray);
            console.log(BarDataArray);

        }).catch((error) => {
            console.log("Fetching error", error);
    });
}, []);

  useEffect(() => {
    axiosInstance
    .get(`/viewproducttype/vendor/${vendorID}`)
    .then((response) => {
        setProductTypeData(response.data);
        console.log(response.data);
    })
    .catch((error) => {
        console.log("Error fetching data", error);
    });
  }, []);

  // Sort productData by product ID in descending order
  const sortedProductData = productData.sort((a, b) => b.product_id - a.product_id);

  // Take the first 4 products (latest products)
  const latestProducts = sortedProductData.slice(0, 4);

  const labelPie = productTypeData.map((item) => item[0]);  
  const valuePie = productTypeData.map((item) => item[1]); 
  console.log(labelPie);
  const doughnutData = {
    labels:  labelPie,
    datasets: [
      {
        label: ' selling product count',
        data: valuePie,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
      },
    ],
}

  useEffect(() => {
    axiosInstance
      .get(`/viewvariations`)
      .then((response) => {
  
        setvariationData(response.data);

        const lowStockItems = response.data.filter(variation => variation.quantity < 5);
        setLowStockCount(lowStockItems.length);

        const outStockItems = response.data.filter(variation => variation.quantity === 0);
        setOutStockCount(outStockItems.length);

      })
      .catch((error) => {
          console.log('Error fetching data:', error);
      });
  }, []);


  

  // function outStockBadge(quantity) {
  //   if (quantity === 0) {
  //     return <span className="badge text-bg-danger Cabin-text">Out of Stock</span>;
  //   }
  // }

  const filteredData = (status) => 
        orderData.filter((item) => item.status === status);

  const mergeData = (productData, variationData) => {
    let total_price =0;
    const mergedData = productData.map(
      (productItem) => {
        const ProductVariation = variationData.find(
          (variationItem) => variationItem.product_id === productItem.product_id
        );

        if(ProductVariation) {
          return {
          ...productItem,
          ...ProductVariation
        };
      } else {
        return productItem;
      }
    });
    return mergedData;
  };

  const mergeProductvariation = mergeData(productData, variationData);
  console.log("merge data:", mergeProductvariation);

  const overallInstockPrice = mergeProductvariation.reduce((acc, item) => {
    if (item.quantity && item.entry_price) {
      return acc + item.quantity * item.entry_price;
    }
    return acc;
  }, 0);
  console.log("Overall Instock Product Price:", overallInstockPrice);

  const barchartdata = bardata.map((data) => ({
    name: data.name.slice(0, 3), // Take the first three characters for abbreviated day name
    sellingCount: data.Total , // Sum of Ongoing and Completed
  }));

  const mergeData2 = (productData, orderData) => {
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

  const mergeProductorder = mergeData2(productData, orderData);
  console.log("merge data:", mergeProductorder);

  

  const Columns = [
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
  ];

  const Rows = latestProducts.map((product) => {
    return {
      product: <div className='d-flex flex-row gap-4 align-items-center'>
        <img src={product.image}/>
        <p className='align-items-center mt-3'>{product.product_name}</p>
      </div>,
      entry: product.entry_price,
      discount: product.discount,
      price: product.entry_price - (product.entry_price * product.discount / 100),
      sold: mergeProductorder.filter((item) => item.product == product.product_id).reduce((acc, item) => acc + item.quantity, 0),
      // status: <div className='instock d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>{product.product_status}</p></div>
      action: <Link to={`/vendor/inventory/inventoryproduct?id=${product.product_id}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
    }
  });

  return(
    <>
      <div className='overview-container background-inventory rounded-3 mb-4 me-3'>
        <div className="d-flex flex-row gap-2 px-4">
          <p className="text-dark fs-5 fw-bold Cabin-text">Inventory</p>
          <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
          <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Overview</p>
        </div>
        <div className='d-flex flex-column gap-2'>
          <div className='d-flex flex-column flex-lg-row flex-md-row flex-sm-row gap-4 justify-content-around'>
            <div className="col-lg-4 bg-white rounded-3 my-2 shadow px-3 py-2">
              <p className='fs-5 fw-bold Cabin-text' style={{ color: "#023047" }}>Selling Products</p>
              <Doughnut data={doughnutData} />
            </div>
            <div className="col-lg-4 bg-white rounded-3 my-2 shadow px-3 py-2">
              <p className='fs-5 fw-bold Cabin-text' style={{ color: "#023047" }}>Sell History</p>
              <ResponsiveContainer width="90%" height="75%">
                <BarChart width={100} height={70} data={barchartdata}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="50%" stopColor="#035C94" stopOpacity={1} />
                      <stop offset="100%" stopColor="#B0DAF5" stopOpacity={1} />
                    </linearGradient>
                  </defs>

                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="sellingCount" fill="url(#colorUv)" radius={[5, 5, 0, 0]} />
                </BarChart>

              </ResponsiveContainer>
            </div>
            <div className="col-lg-3">
              <div className='d-flex flex-column gap-2 justify-content-between h-100'>
                <div className='col-lg-12 bg-white rounded-3 my-2 shadow p-4'>
                  <div className='d-flex flex-row gap-5'>
                    <img className='img-fluid' src={Money} />
                    <div className='d-flex flex-column align-content-center'>
                      <p className='m-0 fs-6 fw-normal Cabin-text' style={{ color: "#4F6068" }}>In Stock Price</p>
                      <p className='m-0 fs-5 fw-semibold Cabin-text' style={{ color: "#023047" }}>LKR {overallInstockPrice}.00</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 bg-white rounded-3 my-2 shadow p-4'>
                  <div className='d-flex flex-row gap-5'>
                    <img className='img-fluid' src={Money} />
                    <div className='d-flex flex-column align-content-center'>
                      <p className='m-0 fs-6 fw-normal Cabin-text' style={{ color: "#4F6068" }}>profit</p>
                      <p className='m-0 fs-5 fw-semibold Cabin-text' style={{ color: "#023047" }}>LKR {totalOrderPrice}.00</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 low-box rounded-3 my-2 shadow p-4'>
                  <div className='d-flex flex-row gap-5'>
                    <img className='img-fluid mt-2' style={{height:"35px", width:"35px"}} src={LowStock} />
                    <div className='d-flex flex-column align-content-center'>
                      <p className='m-0 fs-6 fw-normal Cabin-text' style={{ color: "#4F6068" }}>Low Stock Items</p>
                      <p className='m-0 fs-5 fw-semibold Cabin-text' style={{ color: "#023047" }}>{lowStockCount}</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 rounded-3 my-2 shadow out-box p-4'>
                  <div className='d-flex flex-row gap-5'>
                    <img className='img-fluid mt-2' style={{height:"35px", width:"35px"}} src={LowStock} />
                    <div className='d-flex flex-column align-content-center'>
                      <p className='m-0 fs-6 fw-normal Cabin-text' style={{ color: "#4F6068" }}>Out of Stock Items</p>
                      <p className='m-0 fs-5 fw-semibold Cabin-text' style={{ color: "#023047" }}>{outStockCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="col-lg-12 bg-white rounded-3 my-2 shadow p-4">
            <div className="d-flex flex-row gap-4 mt-4">
              <p className="fs-5 fw-bold Cabin-text">Stock</p>
              <Link to="viewstock"><p className="mt-1 fs-6 fw-semibold Cabin-text" style={{ color: "#035C94" }}>See all<Icon.ArrowRight color="#035C94" className="mx-1"/></p></Link>
            </div>

            <MDBDataTableV5 responsive
              striped
              bordered
              small
              columns={Columns}
              rows={Rows}
              sortable={false}
              exportToCSV={true}
              searching={false}
              paging={false} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Inventory;