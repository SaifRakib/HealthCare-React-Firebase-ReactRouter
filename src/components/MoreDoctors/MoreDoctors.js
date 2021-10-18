import React, { useEffect, useState } from 'react';
import MoreDoctor from '../MoreDoctor/MoreDoctor';

const MoreDoctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => {
            setDoctors(data);
        })
    },[])
    return (
        <div>
            <div className="container my-5">
            <h2 className="text-center my-5 title_heading">Our Doctors</h2>
            <div className="card-group">
                {
                    doctors.map(doctor => <MoreDoctor doctor={doctor} key={doctor.id}></MoreDoctor>)

                }
            </div>
           </div> 
            
        </div>
    );
};

export default MoreDoctors;