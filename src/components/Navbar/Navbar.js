import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="container menu">
                <Link className="navbar-brand" to="/home">Hospital Plus</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/doctors">Doctors</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                   { user.email && <li className="nav-item">
                        <p className="username">{user.displayName}</p>
                    </li>}
                    
                  { user.email ? <li className="nav-item">
                        <Link onClick={logOut} className="nav-link" to="/login">Logout</Link>
                    </li>
                    : <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li> }

                   {!user.email && <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                   </li> }
                   
                    </ul>
                </div>
             </div>
            </nav>
        </div>
    );
};

export default Navbar;