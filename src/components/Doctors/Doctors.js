import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';



const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('doctor.json')
        .then(res => res.json())
        .then(data => {
            setDoctors(data);
        })
    },[])
    return (
        <div className="container">
            <h2 className="text-center my-5">Our Doctors</h2>
            <div className="card-group">
                {
                    doctors.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor>)

                }
            </div>

            <div className="text-center my-4">
                <a href="/home" className="more_doctors">See More Doctors</a>
            </div>
        </div>
    );
};

export default Doctors;