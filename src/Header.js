import React from 'react'
import logo from './logo.jpg'
import './Header.css'
// import Dropdown from './Dropdown'
// import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PhoneIcon from '@material-ui/icons/Phone';

function Header() {
    return (
        <div className="header" >
            <div className="leftHeader" >
            <img src={logo} alt="muzammilTraders"/>
            <h1>Muzammil Traders</h1>
            </div>

            {/* rightheader */}
            <div className="rightHeader">
                <div className="navItem" label="Home" > 
                <HomeIcon />
                <span>Home</span>
                </div>
                <div className="navItem" label="Our Products" >
                    <LibraryBooksIcon />
                    <span>Our Products</span>
                </div>
                <div className="navItem" label="About Us" >
                    <InfoIcon />
                    <span>About Us</span>
                </div>
                <div className="navItem" label="Contact us" >
                    <PhoneIcon />
                    <span>Contact Us</span>
                </div>

            </div>

            
        </div>
    )
}

export default Header
