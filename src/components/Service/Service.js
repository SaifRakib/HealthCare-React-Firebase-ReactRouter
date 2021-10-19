import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id,service_title,short_desc,service_img} = props.service;
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={service_img} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{service_title}</h5>
                    <p className="card-text">{short_desc}</p>
                    <div><Link className="service_link" to={`servicedetails/${id}`}>Read More</Link></div>
                </div>
            </div>
        </div>
    );
};

export default Service;