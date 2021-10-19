import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [singleService,setSingleService] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://saifrakib.github.io/serviceapi/services.json`)
        .then(res =>res.json())
        .then(data => {
            setSingleService(data);
        })
    },[])

    let result = singleService.find(service => service.id === id);
    console.log(result);
    console.log(id);
    
   


    return (
        <div>
           {result &&
            
                <div>
                    <p>{result.id}</p>
                    <p>{result.short_desc}</p>
                </div>
            
           }

        </div>
    );
};

export default ServiceDetails;