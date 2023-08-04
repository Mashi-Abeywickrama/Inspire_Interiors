import React from 'react'
import Header2 from './../../components/header2'
// import './../../styles/report.css';
import Card from 'react-bootstrap/Card';
import SidebarDashboard from '../../components/customer/sidebar.jsx';
import Navigationbar from "../../components/navigationbar";

import Img1 from "./../../assets/img/admin/Img1.png";
import Img2 from "./../../assets/img/admin/Img2.png";
import Img3 from "./../../assets/img/admin/Img3.png";
import Img4 from "./../../assets/img/admin/Img4.png";

export default function report() {
  return (
    <div>
      <div className="d-flex flex-column  gap-3"><Navigationbar/>
      <div className="d-flex gap-4 "><SidebarDashboard/>

     <div>  
        <div className='d-flex flex-col fs-2 col-12 '>
          <div className="">Report </div> 
        </div> 

          <div className='d-flex flex-row gap-2'>

            <div className=' d-flex flex-column col-4 p-2 gap-2 m-lg-5' style={{ borderRadius:'20px',borderBlockColor:'greenyellow' }}>
              <div className="d-flex text-right fs-4">Summary </div>
              <div className='card-1 text-center bg-black' style={{ borderRadius:'20px',borderBlockColor:'greenyellow' }} >User</div>
              <div className='card-2  h-25 text-center bg-black' >Project</div>
              <div className='card-3 h-25  text-center'>Transaction</div>
              <div className='card-3 h-25  text-center'>Revenue</div>
            </div>

            <Card  className='d-flex m-lg-5 p-2 col-8' style={{  borderRadius:'20px',margin:'0'}}>
            <div className="d-flex text-right fs-4">Top perfomance </div>
              <div className='d-flex flex-column'>
                <div  className='d-flex flex-row p-2 gap-2'>
                    <img className='img h-100 ' src={Img1}/>
                    <img className='img h-25' src={Img2}/>
                </div>
                <div  className='d-flex flex-row p-2 gap-2 '>
                 <img className='img h-25' src={Img3}/>
                 <img className='img h-25' src={Img4}/>
                </div>
              </div>
            </Card>

          </div>
     </div>
    
 {/*     <div className='performance'>
        <Card className='card1'>hi</Card>
        <Card className='card2'>hi</Card>
        <Card className='card3'>hi</Card>
        <Card className='card4'>hi</Card>
     </div>
</div> */}
      
      </div>
 </div>
      </div>
  )
}
