import React from 'react';
import Logo from './../../assets/img/admin/logo.png';
import './../../styles/admin/invoice.css';


export default function Invoice() {
  return (
    <div className="container-fluid ">
      <h3 className="">Invoice</h3>
      <div className="card">
        <div className="card-body">
          <div className="row d-flex w-100 align-items-baseline justify-content-between">
            <div className="col-md-5 mb-3 justify-content-center">
              <img src={Logo} alt="Logo" className='logo' />
              <div className="d-flex h2 align-items-center gap-2">
                <span className="d-flex">Phone No:</span>
                <span className="number d-flex">0112345678</span>
              </div>
            </div>
            <div className="d-flex flex-column col-4">
                <div className="d-flex gap-2 align-items-center">
                  <span className="number">Invoice</span>
                  <div className="v-line"></div>
                  <span className="number">ArpicoFurniture</span>
                </div>
                <div className="d-flex gap-2 h2 align-items-center">
                  <span className="d-flex">RefNo:</span>
                  <span className="number d-flex">0112345678</span>
                  <div className="v1-line"></div>
                  <span className="d-flex">Date</span>
                  <span className="number d-flex">18.06.2023</span>
                </div>
              </div>
            <div className='col-md-4'></div>
            
            <hr />
          </div>

          <div className="container">
            <div className="gap"></div>
            <div className="row my-2 mx-1 justify-content-center flex-fill">
              <div className="col-md-12 ">
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col"></th>
                      <th scope="col">Quntity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Commission </th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Chair</td>
                      <td></td>
                      <td>4</td>
                      <td>3000Rs</td>
                      <td>200Rs</td>
                      <td>2800Rs</td>
                    </tr>
                    <tr>
                      <td>Table</td>
                      <td></td>
                      <td>1</td>
                      <td>2000Rs</td>
                      <td>200Rs</td>
                      <td>1800Rs</td>
                    </tr>
                    <tr>
                      <td>Cupboard</td>
                      <td></td>
                      <td>1</td>
                      <td>1000Rs</td>
                      <td>200Rs</td>
                      <td>800Rs</td>
                    </tr>
                    <tr>
                      <td className='sub'>SubTotal</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td> 
                      <td className='sub'>5400Rs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='gap1'></div>

            <div className="row">
              <div className="col-md-2">
                <p className="ms-3">Shipping Address:</p>
              </div>
              <div className="col-md-2">
                <p className="number">
                  3000/B,
                  philosophy road,
                  kotlin,
                  SriLanka
                </p>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-md-2">
                <p>Thank you!</p>
              </div>
              <div className='col-md-6'></div>
              <div className="col-md-4 d-flex gap-2 justify-content-end">
                <div>
                  <button className='cancel'>Cancel</button>
                </div>
                <div>
                  <button className='send'>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
