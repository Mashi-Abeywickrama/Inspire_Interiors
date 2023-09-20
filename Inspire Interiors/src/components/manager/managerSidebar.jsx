import React, { useState } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { RiDashboardFill, RiSettings5Fill, RiTakeawayFill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './../../styles/customer/sidebar.css';


const ManagerSidebar = () => {

    const location = useLocation();
    const { pathname } = location;

    const splitLocation = pathname.split("/");

    const [selected, setSelected] = useState(splitLocation[2]);
    return (
        <SideNav onSelect={(selected) => setSelected(splitLocation[2])}>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected={splitLocation[2]}>
                <NavItem eventKey="dashboard">
                    <NavIcon>
                        <NavLink to="/manager/dashboard" activeClassName="active"><i><RiDashboardFill /></i></NavLink>

                    </NavIcon>
                    <NavText>
                        <NavLink to="/manager/dashboard" activeClassName="active">Dashboard</NavLink>
                    </NavText>
                </NavItem>

                <NavItem eventKey="delivery">
                    <NavIcon>
                        <NavLink to="/manager/delivery" activeClassName="active"><i><RiTakeawayFill /></i></NavLink>
                    </NavIcon>
                    <NavText>
                        <NavLink to="/manager/delivery" activeClassName="active">Delivery</NavLink>
                    </NavText>
                </NavItem>

                <NavItem eventKey="settings">
                    <NavIcon>
                        <NavLink to="/customer/settings" activeClassName="active"><i><RiSettings5Fill /></i></NavLink>
                    </NavIcon>
                    <NavText>
                        <NavLink to="/customer/settings" activeClassName="active">Settings</NavLink>
                    </NavText>
                </NavItem>

                <NavItem eventKey="logout">
                    <NavIcon>
                        <NavLink to="/" activeClassName="active"><i><TbLogout2 /></i></NavLink>
                    </NavIcon>
                    <NavText>
                        <NavLink to="/" activeClassName="active">Logout</NavLink>
                    </NavText>
                </NavItem>

            </SideNav.Nav>
        </SideNav>

    );
};

export default ManagerSidebar;
