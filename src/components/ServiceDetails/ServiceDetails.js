import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [data,setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://saifrakib.github.io/serviceapi/services.json/?id=${id}`)
        .then(res =>res.json())
        .then(data => {
            setData(data);
            console.log(data);
        })
    },[])
    return (
        <div>
            <h2>Service Details{data.id}</h2>

        </div>
    );
};

export default ServiceDetails;