import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const {signInUsingGoogle,handleRegister,handleEmailChange,handlePasswordChange,handleChangeName,error} = useAuth();
    return (
        <div className="container w-50 mt-5">
            <h2 className="text-center">Register</h2>
          
           <form onSubmit={handleRegister} className="register-form">
                <div className="form-group row mt-2">
                    <div className="col-sm-12">
                    <input onBlur={handleChangeName} type="name" className="form-control" id="name" placeholder="Name"/>
                    </div>
                </div>
                <div className="form-group row mt-2">
                    <div className="col-sm-12">
                    <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12">
                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                    </div>
                </div>
                <p className="mt-2" style={{color:'red'}}>{error}</p>
    
                <div className="form-group row text-center">
                    <div className="col-sm-12 mt-4">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </div>
                <hr />
                <p className="text-center login_toggle">Already have account? <Link to="/login">Login</Link></p>

                <div className="google_sign text-center">
                    <button type="submit" onClick={signInUsingGoogle}><i className="fab fa-google"></i>Sign with Google</button>
                </div>
            </form>
        </div>
    );
};

export default Register;