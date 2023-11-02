import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';

import '../../styles/navbar.css';

import Logo from '../../assets/img/logo.svg';
import navbarImg from '../../assets/img/visitor/navbarImg.png';
import { useSession } from '../../constants/SessionContext';

const CusNavBar = () => {
    const sessionItems = useSession();
    const username = sessionItems.sessionData.username;
    return (
        <>
        <Navbar className='nav' expand="lg">
            <React.Fragment>
                <Navbar.Brand  href="/"> <img src={Logo} alt="inspire interiors"/></Navbar.Brand>
             
               
                    <Nav className="ms-auto">
                            <a href="/customer/cart">
                          <div className='' >
                            <Icon.BagFill className="align-items-center text-white" size={35} style={{  padding: '8px', borderRadius: '5px' }} />
                            </div>
                            </a>
                          <div className='mx-4 my-2'></div>
                          <img className='img-fluid bg-white rounded-2' src={navbarImg} />
                          <p className='text-white mx-4 my-auto d-none d-sm-block d-md-block d-lg-block'>{username}</p>
                        
                    </Nav>
            

            </React.Fragment>
        </Navbar>
        </>
    );
};

export default CusNavBar;