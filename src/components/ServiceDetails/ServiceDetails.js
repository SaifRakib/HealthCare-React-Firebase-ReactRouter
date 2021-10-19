import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [singleService,setSingleService] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`/services.json`)
        .then(res =>res.json())
        .then(data => {
            let result = data.find(service => service.id == id);
            setSingleService(result);
        })

    },[id])

  
    return (
        <div>
            <div className="container">
                <div className="servicesImg text-center">
                    <img src={singleService.service_img} alt="" />
                </div>
                <div className="serviceTitle my-5 text-center" style={{color:'tomato'}}>
                    <h2>{singleService.service_title}</h2>
                </div>
                <div className="serviceParagraph mb-5">
                    <p>{singleService.service_desc}</p>
                    <br />
                    <p>{singleService.service_desc2}</p>
                    
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;