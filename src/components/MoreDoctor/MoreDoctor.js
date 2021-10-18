import React from 'react';

const MoreDoctor = (props) => {
    const {full_name,email,job_title,image,description,phone} = props.doctor;
    return (
        <div>
              <div className="card">
                <img className="card-img-top" src={image} alt="Card cap"/>
                <div className="card-body">
                <h5 className="card-title">{full_name}</h5>
                <h6 style={{color:'tomato'}}>{job_title}</h6>
                <p className="card-text">{description}</p>
                <hr />
                <div>
                    <h6>Contact Information</h6>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default MoreDoctor;