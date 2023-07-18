import React from 'react'
import Header2 from './../../components/header2'
import './../../styles/report.css'
import Card from 'react-bootstrap/Card';

export default function report() {
  return (
    <div>
      <Header2/>

      <div className='auto'>
        <div className="User">Report </div> 
        </div>
     <div className='dfle'>
     <div className='summary'>
        <Card className='card-1'>hi</Card>
        <Card className='card-2'>hi</Card>
        <Card className='card-3'>hi</Card>
        <Card className='card-4'>hi</Card>
     </div>

     <div className='performance'>
        <Card className='card1'>hi</Card>
        <Card className='card2'>hi</Card>
        <Card className='card3'>hi</Card>
        <Card className='card4'>hi</Card>
     </div>
</div>
      </div>
 
  )
}
