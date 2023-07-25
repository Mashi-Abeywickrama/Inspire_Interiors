import React from 'react';
import '../../styles/vendor/inventoryProduct.css';

import Chair from '../../assets/img/vendor/chair.png';
import * as Icon from 'react-bootstrap-icons';
import { MDBDataTableV5, MDBTable } from 'mdbreact';

const tabledata = {
    columns: [
      {
        label: 'ENTRY PRICE',
        field: 'entry',
        sort: 'asc',
        width: 200
      },
      {
        label: 'COMMISION',
        field: 'commision',
        sort: 'asc',
        width: 100
      },
      {
        label: 'DISCOUNT',
        field: 'discount',
        sort: 'asc',
        width: 100
      },
      {
        label: 'FINAL PRICE',
        field: 'final',
        sort: 'asc',
        width: 100
      },
    ],
    rows: [
        {
          entry: '1000Rs',
          commision: '10%',
          discount: 'N/A',
          final: '1100Rs',
        },
    ],
};

const stockdata = {
    columns: [
      {
        label: 'MATERIAL',
        field: 'material',
        sort: 'asc',
        width: 200
      },
      {
        label: 'COLOR',
        field: 'color',
        sort: 'asc',
        width: 100
      },
      {
        label: 'AMOUNT',
        field: 'amount',
        sort: 'asc',
        width: 100
      },
      {
        label: '',
        field: 'action',
        sort: 'asc',
        width: 100
      },
    ],
    rows: [
        {
          material: 'Wood',
          color:'Yellow',
          amount: '10',
          action: <div className='d-flex gap-2 align-items-center'><p className='m-0' style={{color:"#035C94"}}>Manage</p> <Icon.ArrowRight color='#035C94'/></div>,
        },
        {
            material: 'Wood',
            color:'Yellow',
            amount: '10',
            action: <div className='d-flex gap-2 align-items-center'><p className='m-0' style={{color:"#035C94"}}>Manage</p> <Icon.ArrowRight color='#035C94'/></div>,
        },
        {
            material: 'Wood',
            color:'Yellow',
            amount: '10',
            action: <div className='d-flex gap-2 align-items-center'><p className='m-0' style={{color:"#035C94"}}>Manage</p> <Icon.ArrowRight color='#035C94'/></div>,
        },

    ],
};

const InventoryProduct = () => (
    <>
        <div className="chair-container me-3">
            <div className='col-12 d-flex flex-column flex-lg-row flex-md-row gap-3'>
                <div className='d-flex flex-column gap-4'>
                    <div className='col-lg-12 bg-white rounded-3 shadow'>
                        <div className="d-flex flex-row gap-4 p-4">
                            <p className="text-dark fs-3 fw-bold Cabin-text ">Inventory</p>
                            <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                            <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Chair</p>
                            <Icon.ChevronRight color="#A2A3B1" size={25} className="mt-2" />
                            <p className="fs-3 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Meryl Lounge Chair</p>
                        </div>
                        <div className="d-flex flex-column px-4">
                            <div className='d-flex flex-row gap-3'>
                                <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#545563"}}>Product Name</p>
                                <Icon.PencilFill color="#035C94" />
                            </div>
                            <p className="fs-6 fw-normal" style={{ color: "#17183B"}}>Meryl Lounge Chair</p>
                        </div>
                        <div className="d-flex flex-column px-4">
                            <div className='d-flex flex-row gap-3'>
                                <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#545563"}}>Product Description</p>
                                <Icon.PencilFill color="#035C94" />
                            </div>
                            <p className="fs-6 fw-normal Cabin-text" style={{ color: "#17183B"}}>This armchair is an elegant and functional piece of furniture. It is suitable for family visits and parties with friends and perfect for relaxing in front of the TV after hard work.</p>
                        </div>
                        <div className="d-flex flex-column px-4">
                            <div className='d-flex flex-row gap-3'>
                                <p className="fs-6 fw-semibold Cabin-text" style={{ color: "#545563"}}>Price</p>
                                <Icon.PencilFill color="#035C94" />
                            </div>
                            <div className=''>
                                <MDBDataTableV5 responsive
                                    striped
                                    bordered
                                    small
                                    data={tabledata}
                                    sortable={false}
                                    exportToCSV={true}
                                    paging={false}
                                    searching={false} />
                            </div>
                        </div>
                        <div className="d-flex flex-column px-4">
                            <div className='d-flex flex-row gap-3'>
                                <p className='fs-6 fw-semibold Cabin-text' style={{ color: "#545563"}}>Product Tags</p>
                                <Icon.PencilFill color="#035C94" />
                            </div>
                            <p className='fs-6 fw-normal Cabin-text' style={{ color: "#17183B"}}>#Notags</p>
                        </div>
                    </div>
                    <div className='col-lg-12 bg-white rounded-3 p-4 shadow mb-3'>
                        <div className='d-flex flex-row gap-3'>
                            <p className='text-dark fs-3 fw-bold Cabin-text'>Stock</p>
                            <Icon.PencilFill className='mt-3' color="#035C94" />
                        </div>
                        <MDBDataTableV5 responsive
                            striped
                            bordered
                            small
                            data={stockdata}
                            sortable={false}
                            exportToCSV={true}
                            paging={false}
                            searching={false} />
                    </div>

                </div>
                <div className='col-lg-4'>
                    <div className='d-flex flex-column gap-4'>
                        <div className='col-lg-12 bg-white rounded-3 p-4 shadow'>
                            <div className='d-flex flex-row gap-3'>
                                <p className='text-dark fs-3 fw-bold Cabin-text'>Materials</p>
                                <Icon.PencilFill color="#035C94" className='mt-3' />
                            </div>
                            <div className='d-flex flex-column flex-lg-row flex-md-row justify-content-evenly'>
                                <div className='d-flex flex-column gap-3'>
                                    <Icon.SquareFill size={80} color='#7BA275' />
                                    <p className='fs-5 fw-bold Cabin-text'>Primary 1</p>
                                </div>
                                <div className='d-flex flex-column gap-3'>
                                    <Icon.SquareFill size={80} color='#D7D7D7' />
                                    <p className='fs-5 fw-bold Cabin-text'>Primary 2</p>
                                </div>
                                <div className='d-flex flex-column gap-3'>
                                    <Icon.SquareFill size={80} color='#171717' />
                                    <p className='fs-5 fw-bold Cabin-text'>Primary 3</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 bg-white rounded-3 p-4 shadow'>
                            <div className='d-flex flex-row gap-3'>
                                <p className='text-dark fs-3 fw-bold Cabin-text'>Colors</p>
                                <Icon.PencilFill color="#035C94" className='mt-3' />
                            </div>
                            <div className='d-flex flex-column flex-lg-row flex-md-row justify-content-evenly'>
                                <div className='d-flex flex-column gap-3'>
                                    <Icon.SquareFill size={80} color='#7BA275' />
                                    <p className='fs-5 fw-bold Cabin-text'>Primary 1</p>
                                </div>
                                <div className='d-flex flex-column gap-3'>
                                    <Icon.SquareFill size={80} color='#D7D7D7' />
                                    <p className='fs-5 fw-bold Cabin-text'>Primary 2</p>
                                </div>
                                <div className='d-flex flex-column gap-3'>
                                    <Icon.SquareFill size={80} color='#171717' />
                                    <p className='fs-5 fw-bold Cabin-text'>Primary 3</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 bg-white rounded-3 p-4 shadow'>
                            <div className='d-flex flex-row gap-3'>
                                <p className='text-dark fs-3 fw-bold Cabin-text'>Images & 3D Model</p>
                                <Icon.PencilFill color="#035C94" className='mt-3' />
                            </div>
                            <div className='align-content-center'>
                                <img className='img-fluid' src={Chair} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
)

export default InventoryProduct;