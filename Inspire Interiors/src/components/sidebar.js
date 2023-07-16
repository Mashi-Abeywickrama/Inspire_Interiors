import React from 'react';

import * as Icon from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/sidebar.css';
import Navigationbar from './navigationbar';
import { useState } from 'react';

const Sidebar = () => {
    const [navCollapse, setnavCollapse] = useState(false)
    return(
        <React.Fragment>
            <Navigationbar />
            <div className='sidebar_content'>
                <div className={`sidebar-container  ${navCollapse ? "navCollapse" : ""} `}>
                <i className='toggle' onClick={e => setnavCollapse(!navCollapse)}><Icon.Justify size={25} /></i>
                <div className='nav-option option1'>
                    <i><Icon.GridFill /></i>
                    <span className='px-3'>Dashboard</span>
                </div>
                <div className='nav-option option1 my-3'>
                    <i><Icon.FileEarmarkText /></i>
                    <span className='px-3'>Inventory</span>
                </div>
                <div className='nav-option option1 my-3'>
                    <i><Icon.BookmarkDash /></i>
                    <span className='px-3'>Orders</span>
                </div>
                <div className='nav-option option1 my-3'>
                    <i><Icon.StarFill /></i>
                    <span className='px-3'>Promotions</span>
                </div>
                <div className='nav-option option1 my-3'>
                    <i><Icon.HeartPulseFill /></i>
                    <span className='px-3'>Complaints</span>
                </div>
                <div className='nav-option option1 my-3'>
                    <i><Icon.PersonCircle /></i>
                    <span className='px-3'>Profile</span>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
};

export default Sidebar;