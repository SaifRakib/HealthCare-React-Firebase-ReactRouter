import React from 'react';
import './Service.css'

const Service = (props) => {
    const {service_title,short_desc,service_img} = props.service;
    return (
        <div>
            <div class="card">
                <img class="card-img-top" src={service_img} alt="Card cap"/>
                <div class="card-body">
                    <h5 class="card-title">{service_title}</h5>
                    <p class="card-text">{short_desc}</p>
                    <div><a href="">Read More</a></div>
                </div>
            </div>
        </div>
    );
};

export default Service;