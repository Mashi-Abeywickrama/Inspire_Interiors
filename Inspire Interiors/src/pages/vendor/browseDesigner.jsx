import React, {useEffect, useState} from 'react';

import '../../styles/vendor/browseDesigner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/customer/myOrders.css';
import '../../styles/customer/table.css';

import * as Icon from 'react-bootstrap-icons';

import { MDBDataTableV5, MDBTable } from 'mdbreact';
import {Link} from 'react-router-dom';
import axios from 'axios';

const BrowseDesigner = () => {
  const [designerData, setDesignerData] = useState([]);

  const apiBaseURL = "http://localhost:8080";

  const axiosInstance = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  useEffect(() => {
    axiosInstance
      .get("/filtertype/designer")
      .then((response) => {
        console.log(response.data);
        setDesignerData(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
    });
  }, []);

  return(
    <>
      <div className="designer-container background-total accordion bg-white rounded-3 mb-4 me-3">
          <div className='d-flex flex-row gap-4 p-3 '>
              <Link to="/vendor/promotion"><p className="text-dark fs-5 fw-bold Cabin-text text-dark" style={{ color: "#A2A3B1" }}>Promotion</p></Link>
              <Icon.ChevronRight color="#A2A3B1" size={20} className="mt-2" />
              <p className="fs-5 fw-bold Cabin-text text-dark">Browse Designers</p>
          </div>
          <div>
              <div className='p-4 Cabin-text'>

                  <MDBDataTableV5 responsive
                    striped
                    bordered
                    small
                    data = {{
                      columns: [
                        {
                          label: 'DESIGNER NAME',
                          field: 'name',
                          sort: 'asc',
                          width: 150
                        },
                        {
                          label: 'DESIGNER EMAIL',
                          field: 'email',
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
                          label: 'SOLD DESIGNS',
                          field: 'sold',
                          sort: 'asc',
                          width: 200
                        },
                        {
                          label: ' ',
                          field: 'action',
                          sort: 'NONE',
                          width: 100
                        }
                      ],
                      rows: designerData.map(designer=>({
                        name: designer.name,
                        email: designer.email,
                        total: 50,
                        sold: 30,
                        action: <Link to={`/vendor/promotion/viewdesigners?id=${designer.userid}`}><div className='d-flex gap-2 align-items-center' style={{ color: "#035C94"}}><p className='m-0'>View More</p> <Icon.ArrowRight/></div></Link>
                      }))
                    }}
                    sortable={true}
                    exportToCSV={true}
                    paging={true}
                    searching={true} 
                  />
              </div>
          </div>
      </div>
    </>
  )
};

export default BrowseDesigner;