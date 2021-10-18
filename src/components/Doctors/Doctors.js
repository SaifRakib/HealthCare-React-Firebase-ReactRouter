import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="container my-5">
            <h2 className="text-center my-5 title_heading">Our Doctors</h2>
            <div className="card-group">
                {
                    doctors.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor>)

                }
            </div>

            <div className="text-center my-4">
                <Link to="/doctors" className="more_doctors">See More Doctors</Link>
            </div>
        </div>
    );
};

export default Doctors;