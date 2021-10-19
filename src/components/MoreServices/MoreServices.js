import React, { useEffect } from 'react';
import { useState } from 'react';
import MoreService from '../MoreService/MoreService';

const MoreServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://saifrakib.github.io/serviceapi/services.json`)
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    },[])
    return (
        <div>
             <div className="container my-5">
            <div className="services_header text-center title-heading mb-5">
                <h2>Our Services</h2>
            </div>
            <div className="card-deck">
                {
                    services.map(service => <MoreService service={service} key={service.id}></MoreService>)
                }
            </div>
        </div>
        </div>
    );
};

export default MoreServices;