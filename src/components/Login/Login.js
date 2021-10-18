import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="container">
            <h2 className="text-center">Login</h2>
                <div className="login_form text-center">
                    <div>
                        <input type="email" name="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Enter your password" />
                    </div>
                    <p></p>
                    <button type="submit">Login</button>
                </div>
                <hr />
                <p className="text-center login_toggle">New to Hospital plus? <Link to="/signup">Sign Up</Link></p>

                <div className="google_sign text-center">
                    <button type="submit" onClick={signInUsingGoogle}><i className="fab fa-google"></i>Sign with Google</button>
                </div>
        </div>
    );
};

export default Login;