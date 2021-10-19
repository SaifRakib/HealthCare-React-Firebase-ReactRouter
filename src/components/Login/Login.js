import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle,handleLogInUser,error} = useAuth();
    return (
        <div className="container my-5">
            <h2 className="text-center">Login</h2>
             <form onSubmit={handleLogInUser}>
             <div className="login_form text-center">
                    <div>
                        <input type="email" name="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Enter your password" />
                    </div>
                    <p className="mt-2" style={{color:'red'}}>{error}</p>
                    <button type="submit">Login</button>
                </div>
             </form>
                <hr />
                <p className="text-center login_toggle">New to Hospital plus? <Link to="/register">Sign Up</Link></p>

                <div className="google_sign text-center">
                    <button type="submit" onClick={signInUsingGoogle}><i className="fab fa-google"></i>Sign with Google</button>
                </div>
        </div>
    );
};

export default Login;