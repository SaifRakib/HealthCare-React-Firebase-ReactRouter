import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
       <div id="footer">
            <div className="container">
            <div className="footer_wrap">
            <div className="contact_info">
                <h4 className="my-4">Contact Information</h4>
                <p><i class="fas fa-map-marker-alt"></i>Dhanmondi,Dhaka,Bangladesh</p>
                <p><i class="fas fa-globe"></i>www.hospitalplus.com</p>
                <p><i class="fas fa-envelope"></i>hospital-plus@gmail.com</p>
                <p><i class="fas fa-phone-alt"></i>1-888-333-444-222</p>
            </div>
            <div className="services">
                <h4 className="my-4">Services</h4>
                <ul>
                    <li>
                        <Link to="/" className="text-link">Outpatient Surgery</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-link">Cardiac Clinic</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-link">Ophthalmology Clinic</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-link">Gynaecological Clinic</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-link">Outpatient Rehabilitation</Link>
                    </li>
                </ul>
            </div>
            </div>
            <p className="text-center copyright py-4">&copy; Saif Rakib, All Right Reserved by Hospital Plus</p>
        </div>
       </div>
    );
};

export default Footer;