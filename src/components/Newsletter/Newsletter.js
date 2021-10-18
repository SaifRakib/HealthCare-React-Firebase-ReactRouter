import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
      <div className="newsletter">
            <div className="container wrap_newsletter">
            <div className="newsletter_text">
                <h3>Sign Up for Newsletter</h3>
                <p>Please give your email here for sign up .</p>
                
            </div>
            <div className="form">
                <input type="email" name="email" id="email" placeholder="Input your email" />
                <input type="submit" value="Subscribe" />
            </div>
        </div>
      </div>
    );
};

export default Newsletter;