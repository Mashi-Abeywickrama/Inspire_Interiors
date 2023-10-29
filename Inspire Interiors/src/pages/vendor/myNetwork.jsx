import React,{useEffect, useState} from 'react';
import Sofa from './../../assets/img/vendor/sofa.png';

import '../../styles/vendor/viewStocks.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useSession} from "../../constants/SessionContext";



const MyNetwork = () => {
  const urlparams = new URLSearchParams(window.location.search);
  const userID = urlparams.get('id');
  const [offerData, setOfferData] = useState([]);
  const [designerData, setDesignerData] = useState([]);
  const [designer, setDesigner] = useState([]);
  const [designerTotal, setDesignerTotal] = useState([]);

  const apiBaseURL = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  useEffect(() => {
    axiosInstance
      .get(`promotion/vendor/${userID}`)
      .then((response) => {
        console.log(response.data);
        setOfferData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/filtertype/designer`)
      .then((response) => {
        console.log(response.data);
        setDesigner(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/filtertype/designer`)
      .then((response) => {
        console.log(response.data);
        setDesigner(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/designer/d`)
      .then((response) => {
        console.log(response.data);
        setDesignerData(response.data);
        console.log("designer data", designerData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/designer/designCount`)
      .then((response) => {
        console.log(response.data);
        setDesignerTotal(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  

  const mergeData = (offerData, designer,designerdata,designerTotal) => {
    const mergedData = offerData.map(
      (offerItem) => {
      const matchingDesigner = designer.find(
        (designerItem) =>  designerItem.userid === offerItem.designerid
      );

      const matchingDesigner2 = designerdata.find(
        (designerdataItem) =>  designerdataItem.designer_id === offerItem.designerid
      );

      const matchingDesigner3 = designerTotal.find(
        (designerTotalItem) =>  designerTotalItem[0] === offerItem.designerid
      );

     
  
      if (matchingDesigner && matchingDesigner2  ) {
        // Merge the data from both sources
        return {
          ...offerItem,
          ...matchingDesigner,
          ...matchingDesigner2,
          ...matchingDesigner3,
        
        };
      } else {
        return offerItem;
      }
    });
  
    return mergedData;
  };

  const mergedOffer_designer = mergeData(offerData, designer,designerData,designerTotal);
  console.log("merged Data", mergedOffer_designer);

  const getOrderStatus = (status) => {
    const statusDetails = {
      Pending: {
        className: 'ongoing d-flex gap-2 align-items-center',
        text: 'Pending',
      }, 
      Accepted: {
        className: 'completed d-flex gap-2 align-items-center',
        text: 'Accepted',
      },
    };
      if (statusDetails.hasOwnProperty(status)) {
        const { className, text } = statusDetails[status];
        return (
          <div className={className}>
            <i className="bi bi-circle-fill tag-icon"></i>
            <p className="m-0">{text}</p>
          </div>
        );
      }
      return null;
  };

  const findStatus = (status) => {
    if(status == 0){
        return "Pending";
    } else if(status == 1){
        return "Accepted";
    }
};

  const tabledata = {
    columns: [
      {
        label: 'DESIGNER NAME',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'TOTAL DESIGNS',
        field: 'total',
        sort: 'asc',
        width: 270
      },
      {
        label: 'REVIEW',
        field: 'review',
        sort: 'asc',
        width: 200
      },
      {
        label: 'STATUS',
        field: 'status',
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
    rows: mergedOffer_designer.map((offer_designer => {
      return {
        name: offer_designer.name,
        total: offer_designer[1] || 0,
        review: offer_designer.averagereview,
        status: <div>{getOrderStatus(findStatus(offer_designer.offerstatus))}</div>,
        action: <Link to={`/vendor/promotion/viewdesigners?id=${offer_designer.designer}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
      }
    }))
};



  return(
    <>

        <div className="network-container background-total accordion bg-white rounded-3 mb-4 me-3">
            <div className='d-flex flex-row gap-4 p-3 '>
                <Link to="/vendor/promotion"><p className="text-dark fs-5 fw-bold Cabin-text text-dark">Promotion</p></Link>
                <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
                <p className="fs-5 fw-bold Cabin-text" style={{ color: "#A2A3B1" }}>My Network</p>
            </div>
            <div>
                <div className='p-4 Cabin-text'>

                    <MDBDataTableV5 responsive
                        striped
                        bordered
                        small
                        data={tabledata}
                        sortable={true}
                        exportToCSV={true}
                        paging={true}
                        searching={true} />
                </div>
            </div>
        </div>


    </>
  );
}

export default MyNetwork;