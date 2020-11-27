import React from 'react'
import './Footer.css'
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__intro" > 
                <h4>Muzammil Traders</h4>
                <p>The Sales Promotion Company in Pakistan. Since 2004 serving national and multinational companies.</p>
                <h5> <PersonIcon/> Team Leader</h5>
                <p>Muhammad Naeem Babar</p>
                
            </div>
            <div className="footer__location">
                <h4>Our Location</h4>
                <p><RoomIcon/>  R - 1025 , Block – S, North Nazimabad, Karachi Pakistan</p>
                <p><PhoneIcon/> +92-3002162720, +92-3342162720</p>
                <p><EmailIcon/> muzammiltrader@gmail.com</p>


            </div>
            <div className="footer__contacts"> 
                <h4>Why Choose Us</h4>
                <p>We have a workshop facility that involves superb screen printing, pad printing, embossing, foil stamping, laser engraving, modeling offset printing, plastic injection mold designing mold making (on the new CNC machine), assembling, product display manufacturing, packaging and many more.</p>
            </div>
        </div>
    )
}

export default Footer
