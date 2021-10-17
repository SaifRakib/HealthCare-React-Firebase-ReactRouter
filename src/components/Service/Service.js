import React from 'react';
import './Service.css'

const Service = (props) => {
    const {service_title,short_desc,service_img} = props.service;
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={service_img} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{service_title}</h5>
                    <p className="card-text">{short_desc}</p>
                    <div><a href="home">Read More</a></div>
                </div>
            </div>
        </div>
    );
};

export default Service;