import React from 'react';

import "../../styles/vendor/inventory.css";
import * as Icon from 'react-bootstrap-icons';
import Navigationbar from '../../components/navigationbar';
import VendorSidebar from './sidebar';

import Money from './../../assets/img/vendor/money.svg';
import Sofa from './../../assets/img/vendor/sofa.png';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

export const doughnutData = {
    labels: ['Round table', 'Sofa', 'Bed', 'Cupboard', 'Chair', 'painting'],
    datasets: [
      {
        label: '# of selling product',
        data: [12, 15, 4, 6, 5, 3],
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
};

export const bardata = [
    {
      name: 'Mon',
      uv: 250,
    },
    {
      name: 'Tue',
      uv: 300,
    },
    {
      name: 'Wed',
      uv: 180,
    },
    {
      name: 'Thu',
      uv: 150,
    },
    {
      name: 'Fri',
      uv: 250,
    },
    {
      name: 'sat',
      uv: 200,
    },
    {
        name: 'sun',
        uv: 80,
    },
];

const tabledata = {
    columns: [
      {
        label: 'PRODUCT',
        field: 'product',
        sort: 'asc',
        width: 150
      },
      {
        label: 'AMOUNT',
        field: 'amount',
        sort: 'asc',
        width: 270
      },
      {
        label: 'ENTRY PRICE',
        field: 'entry',
        sort: 'asc',
        width: 200
      },
      {
        label: 'DISCOUNT',
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
        label: 'STATUS',
        field: 'status',
        sort: 'asc',
        width: 100
      }
      ,
      {
        label: '  ',
        field: 'action',
        sort: 'NONE',
        width: 100
      }
    ],
    rows: [
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: '20',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'15',
        status: <div className='instock d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>In Stock</p></div>
        ,
        action: <Link to="/vendor/inventory/inventoryproduct"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: '20',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'7',
        status: <div className='outstock d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Out of Stock</p></div>
        ,
        action: <Link to="/vendor/inventory/inventoryproduct"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: '20',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'12',
        status: <div className='lowstock d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Low Stock</p></div>
        ,
        action: <Link to="/vendor/inventory/inventoryproduct"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      },
      {
        product: <div className='d-flex flex-row gap-4 align-items-center'>
            <img src={Sofa}/>
            <p className='align-items-center mt-3'>Sofa</p>
        </div>,
        amount: '20',
        entry: '4000Rs',
        discount: '5%',
        price: '4000Rs',
        sold:'22',
        status: <div className='instock d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>In Stock</p></div>
        ,
        action: <Link to="/vendor/inventory/inventoryproduct"><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      } 
    ]
};

const Inventory = () => (
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
            <p className='fs-5 fw-bold Cabin-text' style={{ color: "#023047" }}>Best Sellers</p>
            <Doughnut data={doughnutData} />;
          </div>
          <div className="col-lg-4 bg-white rounded-3 my-2 shadow px-3 py-2">
            <p className='fs-5 fw-bold Cabin-text' style={{ color: "#023047" }}>Sell History</p>
            <ResponsiveContainer width="90%" height="75%">
              <BarChart width={100} height={70} data={bardata}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#035C94" stopOpacity={1} />
                    <stop offset="100%" stopColor="#B0DAF5" stopOpacity={1} />
                  </linearGradient>
                </defs>

                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="url(#colorUv)" radius={[5, 5, 0, 0]} />
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
                    <p className='m-0 fs-5 fw-semibold Cabin-text' style={{ color: "#023047" }}>LKR 14,751.00</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-12 bg-white rounded-3 my-2 shadow p-4'>
                <div className='d-flex flex-row gap-5'>
                  <img className='img-fluid' src={Money} />
                  <div className='d-flex flex-column align-content-center'>
                    <p className='m-0 fs-6 fw-normal Cabin-text' style={{ color: "#4F6068" }}>profit</p>
                    <p className='m-0 fs-5 fw-semibold Cabin-text' style={{ color: "#023047" }}>LKR 14,751.00</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-12 bg-white rounded-3 my-2 shadow p-4'>
                <div className='d-flex flex-row gap-5'>
                  <img className='img-fluid' src={Money} />
                  <div className='d-flex flex-column align-content-center'>
                    <p className='m-0 fs-6 fw-normal Cabin-text' style={{ color: "#4F6068" }}>Expenses</p>
                    <p className='m-0 fs-5 fw-semibold Cabin-text' style={{ color: "#023047" }}>LKR 14,751.00</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-12 rounded-3 my-2 shadow low-box p-4'>
                <div className='d-flex flex-row gap-5'>
                  <img className='img-fluid' src={Money} />
                  <div className='d-flex flex-column align-content-center'>
                    <p className='m-0 fs-6 fw-normal Cabin-text' style={{ color: "#4F6068" }}>Low Stock Items</p>
                    <p className='m-0 fs-5 fw-semibold Cabin-text' style={{ color: "#023047" }}>2</p>
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
            data={tabledata}
            sortable={false}
            exportToCSV={true}
            searching={false}
            paging={false} />
        </div>
      </div>
    </div>

  </>
)

export default Inventory;