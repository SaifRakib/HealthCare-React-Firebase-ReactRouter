import React from 'react';

const Doctor = (props) => {
    const {full_name,email,job_title,image,description} = props.doctor;
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={image} alt="Card cap"/>
                <div className="card-body">
                <h5 className="card-title">{full_name}</h5>
                <p className="card-text">{description}</p>
                </div>
                
            </div>
        </div>
    );
};

export default Doctor;