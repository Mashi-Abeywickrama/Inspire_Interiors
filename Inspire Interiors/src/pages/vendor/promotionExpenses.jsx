import React,{useState, useEffect} from 'react';
import Sofa from './../../assets/img/vendor/sofa.png';

import '../../styles/vendor/promotionExpenses.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';

import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';
import {useSession} from "../../constants/SessionContext";

// const tableData = {
//     columns: [
//         {
//           label: 'PRODUCT',
//           field: 'product',
//           sort: 'asc',
//           width: 150
//         },
//         {
//           label: 'DESIGNER',
//           field: 'designer',
//           sort: 'asc',
//           width: 270
//         },
//         {
//           label: 'DATE',
//           field: 'date',
//           sort: 'asc',
//           width: 200
//         },
//         {
//           label: 'PRODUCT PRICE',
//           field: 'price',
//           sort: 'asc',
//           width: 150
//         },
//         {
//            label: 'COMMISION RATE',
//            field: 'rate',
//            sort: 'asc',
//            width: 100
//         },
//         {
//           label: 'SOLD',
//           field: 'sold',
//           sort: 'asc',
//           width: 100
//         },
//         {
//           label: 'PAYMENT STATUS',
//           field: 'status',
//           sort: 'asc',
//           width: 100
//         }
//     ],
//     rows: [
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='delayed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Overdue</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='delayed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>overdue</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='delayed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Overdue</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='delayed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Overdue</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='delayed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Overdue</p></div>
//         },
//         {
//             product: <div className='d-flex flex-row gap-4 align-items-center'>
//                 <img src={Sofa}/>
//                 <p className='align-items-center mt-3 fw-bold'>Sofa</p>
//             </div>,
//             designer: 'Arpico',
//             date: '25.07.2023',
//             price: '4000Rs',
//             rate: '15%',
//             sold:'15',
//             status: <div className='completed d-flex gap-2 align-items-center'><i class="bi bi-circle-fill tag-icon"></i><p className='m-0'>Ongoing</p></div>
//         },
//     ]
// }

const PromotionExpenses = () => {
    const sessionItems = useSession();
    const userId = sessionItems.sessionData.userid;

    const [productData, setProductData] = useState([]);
    const [saleData, setSaleData] = useState([]);
    const [designerData, setDesignerData] = useState([]);

    const apiBaseURL = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseURL,
        timeout: 5000,
    });

    useEffect(() => {
        axiosInstance
            .get(`/viewproducts/vendor/${userId}`)
            .then((response) => {
            setProductData(response.data);
            console.log(response.data);
            })
            .catch((error) => {
            console.log('Error fetching data:', error);
        });
        }, [userId]);
    
        useEffect(() => {
            axiosInstance
              .get(`/filtertype/designer`)
              .then((response) => {
                setDesignerData(response.data);
                console.log(response.data);
              })
              .catch((error) => {
                console.log('Error fetching data:', error);
            });
        }, []);
    
        useState(() => {
            axiosInstance
                .get(`/getoffersale/vendor/${userId}`)
                .then((response) => {
                    setSaleData(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log('Error fetching data:', error);
                });
        }, []);
    
        const mergeData2 = (saleData, productData, allDesigners) => {
            const mergedData = saleData.map(
                (saleItem) => {
                    const matchingProduct = productData.find(
                        (productItem) =>  productItem.product_id === saleItem.productid
                    );
                    const matchingDesigner = designerData.find(
                        (designerItem) =>  designerItem.userid === saleItem.designerid
                    );
                    if (matchingProduct && matchingDesigner) {
                        // Merge the data from both sources
                        return {
                            ...saleItem,
                            ...matchingProduct,
                            ...matchingDesigner
                        };
                    } else {
                        return {
                            ...saleItem
                        };
                    }
                });
            return mergedData;
        };
    
        const mergedData = mergeData2(saleData, productData, designerData);
        console.log("merged Data 2", mergedData);

        const TableData = {
            columns: [
                {
                  label: 'PRODUCT NAME',
                  field: 'product',
                  sort: 'asc',
                  width: 150
                },
                {
                    label: 'QUANTITY',
                    field: 'quantity',
                    sort: 'asc',
                    width: 100
                  },
                {
                  label: 'DESIGNER',
                  field: 'designer',
                  sort: 'asc',
                  width: 270
                },
                {
                  label: 'DATE',
                  field: 'date',
                  sort: 'asc',
                  width: 200
                },
                {
                  label: 'TOTAL PRICE',
                  field: 'price',
                  sort: 'asc',
                  width: 150
                },
                {
                   label: 'COMMISION AMOUNT',
                   field: 'commission',
                   sort: 'asc',
                   width: 100
                },
                {
                  label: 'PROFIT',
                  field: 'profit',
                  sort: 'asc',
                  width: 100
                }
            ],
            rows: mergedData.map((sales) => {
                return{
                    product: sales.product_name,
                    quantity: sales.quantity,
                    designer: sales.name,
                    date: sales.date,
                    price: sales.totalprice,
                    commission: sales.commission,
                    profit: sales.profit,
                }
            })
        };
    return (
    <>

        <div className="stock-container background-total accordion bg-white rounded-3 mb-4 me-3">
            <div className="col-12 d-flex flex-column flex-lg-row flex-md-row gap-4 p-3 justify-content-between">
            <div className="d-flex flex-row gap-2 px-2">
                <Link to="/vendor/promotion"><p className=" fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>Promotion</p></Link>
                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                <p className="fs-5 fw-bold Cabin-text text-dark">Sales From Paid Promotions</p>
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
                  data={TableData}
                  sortable={false}
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

export default PromotionExpenses;