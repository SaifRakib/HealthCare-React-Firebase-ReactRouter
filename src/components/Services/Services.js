import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import'./Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    },[])
    return (
        <div className="container">
            <div className="services_header text-center my-5">
                <h2>Our Services</h2>
            </div>
            <div class="card-deck">
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;




