import React from 'react';
import img1 from '../../image/hospital.jpg'
import './About.css'

const About = () => {
    return (
        <div className="container">
            <h2 className="text-center my-4" style={{color:'tomato'}}>About Hospital Plus</h2>
            <div className='text-center'>
                <img src={img1} alt="" />   
            </div>
            <div>
                <h4 className="text-center my-4" style={{color:'tomato'}}>About us</h4>
                <p>Hospital Plus is one of the fastest growing hospitals in Shymoli, Dhaka. Hospital Plus always strives to provide the best service to it's patients at an affordable price. This hospital consists of the following departments Emergency, General Surgery, Laparoscopic Surgery, Gyne &amp; Obs, Ear Nose Throat (ENT), Medicine, Urology, Neuro &amp; Spine Surgery, Plastic &amp; Cosmetic Surgery, Dental Surgery &amp; Operation Theatre(OT). <br /> <br />Hospital Plus has 24hrs Emergency, Orthopedics, Vascular Surgery, Pharmacy, Ambulance, Physiotherapy, Echo Cardiogram, Colour Dopler, ECG, Digital X-Ray, Ultrasonography, Digital Lab, C-Arm OT, Post Operative Ward, AC/Non-Ac Cabin, 24hrs Lift &amp; much more services. We always stay beside the patients not due to business but as our responsibility.</p>
                <br />
                <br />
                <h4 className="text-center my-4" style={{color:'tomato'}}>Our Misson</h4>
                <p>Nowadays, almost everywhere patients are not getting the services that they should or deserve due to lack of concern of the authorities to provide better healthcare services. We don't want to walk to their same path rather we want to stand against those so called heathcare organizations. <br /> <br />Hospital Plus's mission is to provide world class healthcare services to it's patients at an affordable cost. We want to see our patients are satisfied and happy after taking our services.</p>
                
                <br /><br />
                <h4 className="text-center my-4" style={{color:'tomato'}}>Our Vision</h4>
                <p>Hospital Plus wants to see themselves as one of the best hospital in Dhaka &amp; one of the leading hospital in Bangladesh. We want to set an example by providing world class healthcare services to our patients. <br /> <br /> Hospital Plus will expand it's services &amp; facilities in near future &amp; provide much better services to the patients.</p>
            </div>

        </div>
    );
};

export default About;