import React from 'react'
import './../../styles/admin/report.css';
import Card from 'react-bootstrap/Card';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Linechart from './../../components/admin/linechart';
import Barchart from './../../components/admin/barchart';
import Areachart from './../../components/admin/areachart';
// import Piechart from './../../components/admin/piechart';

import Img1 from "./../../assets/img/admin/project.png";
import Img2 from "./../../assets/img/admin/product.png";
import Img3 from "./../../assets/img/admin/designer.png";
import Img4 from "./../../assets/img/admin/Img4.png";

export default function report() {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 500 },
    { name: 'May', value: 600 },
  ];
  return (
    <div>

      <div className='d-flex flex-col fs-2'>
       <div className="">Report</div> 
      </div> 

      <div className='d-flex flex-column gap-2'>
      <div className=' d-flex flex-row gap-4 w-100 h-100'>

        <div className='d-flex flex-column gap-2 p-2 bg-white w-25 rounded-4 '>
          <span className='d-flex fs-4 card-title'>Summary</span>
            <div className='card-1 d-flex  flex-row h-100 fs-4 gap-4 justify-content-center'>
              <div className='ammount'>223</div>
              <div className='text'>Users</div>
            </div>
            <div className='card-2 d-flex  flex-row gap-4 justify-content-center h-100 fs-4'>
              <div className='ammount'>223</div>
              <div className='text'>Project</div>
            </div>
            <div className='card-3 d-flex  flex-row gap-4 justify-content-center h-100 fs-4'>
              <div className='ammount-1'>223</div>
              <div className='text-1'>Transaction</div>
            </div>
            <div className='card-4 d-flex  flex-row gap-4 justify-content-center h-100 fs-4'>
              <div className='ammount-1'>223</div>
              <div className='text-1'>Revenue</div>
            </div>
        </div>

        <div className='d-flex flex-column bg-white p-2 w-75 rounded-3' >
          <span className='d-flex fs-4 card-title'>Top Performance</span>
          <div className='d-flex flex-row gap-2 h-100'>
             <div className='d-flex flex-column gap-2 w-100'>

             <div className='card-project d-flex  flex-row fs-4 '>
              <div className='d-flex flex-column'>
                  <div className='d-flex flex-row gap-2 p-2'>
                    <p className='topic d-flex fs-4 font-weight-normal'>Best Project</p>
                    <p className='d-flex fs-6 p-2'>of the year<i class="bi bi-caret-down-fill"></i></p>
                  </div>
                  <div className='d-flex flex-row p-2 gap-3 justify-content-center'>
                    <img className='img1 d-flex' src={Img1}  />
                    <div className='d-flex flex-column '>
                      <span className='card-text d-flex fs-6'>designer: tata</span>
                      <span className='card-text d-flex fs-6'>Earning: tata</span>
                      <span className='card-text d-flex fs-6'>Data: tata</span>
                      <span className='card-text d-flex fs-6'>Customer: tata</span>
                      <span className='card-text d-flex fs-6'>Duration: tata</span>
                    </div>
                  </div>
              </div>
             </div>

            <div className='card-project d-flex  flex-row fs-4 '>
              <div className='d-flex flex-column'>
                  <div className='d-flex flex-row gap-2 p-2'>
                    <p className='topic d-flex fs-4 font-weight-normal'>Best Project</p>
                    <p className='d-flex fs-6 p-2'>of the year<i class="bi bi-caret-down-fill"></i></p>
                  </div>
                  <div className='d-flex flex-row p-2 gap-3 justify-content-center'>
                    <div className='d-flex flex-column'>
                      <img className='img3 d-flex' src={Img3}  />
                      <span className='d-flex fs-6 justify-content-center rank'>Rank 2</span>
                      <span className='d-flex fs-6 justify-content-center name'>willy Wonka</span>
                    </div>
                    <div className='d-flex flex-column'>
                      <img className='img3 d-flex' src={Img3}  />
                      <span className='d-flex fs-6 justify-content-center rank'>Rank 1</span>
                      <span className='d-flex fs-6 justify-content-center name'>willy Wonka</span>
                    </div>
                    <div className='d-flex flex-column'>
                      <img className='img3 d-flex' src={Img3}  />
                      <span className='d-flex fs-6 justify-content-center rank'>Rank 3</span>
                      <span className='d-flex fs-6 justify-content-center name'>willy Wonka</span>
                    </div>
                  </div>
              </div>
             </div>
          </div>
          <div className='d-flex flex-column gap-2 w-100'>
          <div className='card-project d-flex  flex-row h-100 fs-4 '>
              <div className='d-flex flex-column'>
                  <div className='d-flex flex-row gap-2 p-2'>
                    <p className='topic d-flex fs-4 font-weight-normal'>Best Project</p>
                    <p className='d-flex fs-6 p-2'>of the year<i class="bi bi-caret-down-fill"></i></p>
                  </div>
                  <div className='d-flex flex-row m-2 gap-3 justify-content-center'>
                    <img className='img1 d-flex' src={Img2}  />
                    <div className='d-flex flex-column '>
                      <span className='card-text d-flex fs-6'>designer: tata</span>
                      <span className='card-text d-flex fs-6'>Earning: tata</span>
                      <span className='card-text d-flex fs-6'>Data: tata</span>
                      <span className='card-text d-flex fs-6'>Customer: tata</span>
                      <span className='card-text d-flex fs-6'>Duration: tata</span>
                    </div>
                  </div>
              </div>
             </div>
             <div className='card-project d-flex  flex-row fs-4 '>
              <div className='d-flex flex-column'>
                  <div className='d-flex flex-row gap-2 p-2'>
                    <p className='topic d-flex fs-4 font-weight-normal'>Best Project</p>
                    <p className='d-flex fs-6 p-2'>of the year<i class="bi bi-caret-down-fill"></i></p>
                  </div>
                  <div className='d-flex flex-row p-2 gap-3 justify-content-center'>
                    <div className='d-flex flex-column'>
                      <img className='img3 d-flex' src={Img3}  />
                      <span className='d-flex fs-6 justify-content-center rank'>Rank 2</span>
                      <span className='d-flex fs-6 justify-content-center name'>willy Wonka</span>
                    </div>
                    <div className='d-flex flex-column'>
                      <img className='img3 d-flex' src={Img3}  />
                      <span className='d-flex fs-6 justify-content-center rank'>Rank 1</span>
                      <span className='d-flex fs-6 justify-content-center name'>willy Wonka</span>
                    </div>
                    <div className='d-flex flex-column'>
                      <img className='img3 d-flex' src={Img3}  />
                      <span className='d-flex fs-6 justify-content-center rank'>Rank 3</span>
                      <span className='d-flex fs-6 justify-content-center name'>willy Wonka</span>
                    </div>
                  </div>
              </div>
             </div>
          </div>

          </div>
         
        </div>

      </div>

      <div className='d-flex flex-row gap-4 w-100 h-100'>
        <div  className='d-flex flex-column gap-4 w-100 bg-white rounded-4'>
          <span className='d-flex fs-4 card-title'>Trend Analysis</span>
          <div className='d-flex flex-row gap-2'>

            <div className='trend d-flex flex-column justify-content-center'>
              <span>user growth</span>
               {/* <LineChart width={400} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
              <Linechart/>
            </div>

            <div className='trend d-flex flex-column justify-content-center'>
              <span>user growth</span>
              <div>
                <Barchart /> {/* Use the ChartComponent here */}
              </div>
            </div>

            <div className='trend d-flex flex-column justify-content-center'>
              <span>user growth</span>
              <div > <Areachart/></div>
              
            </div>
          </div>

          

        </div>

      </div>

      <div className='d-flex flex-row gap-4 w-100 h-100'>
        <div  className='d-flex flex-column gap-4 w-100 bg-white rounded-4'>
          <span className='d-flex fs-4 card-title'>Metric Breakdown</span>
          <div className='d-flex flex-row gap-2'>

            <div className='trend d-flex flex-column justify-content-center'>
              <span>revenue source</span>
              <div >
                <Linechart/> {/* Use the ChartComponent here */}
              </div>
            </div>
          </div>

          

        </div>
        </div>
      </div>

    </div>

  )
}
