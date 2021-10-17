import React, { useEffect, useState } from 'react';

const ServiceDetails = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch(`services.json`)
        .then(res =>res.json())
        .then(data => {
            console.log(data);
        })
    },[])
    return (
        <div>
            <h2>Service Details</h2>
        </div>
    );
};

export default ServiceDetails;