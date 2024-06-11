import React, { useState } from 'react';
import LoginHeader from './LoginHeader';
import Footer from './Footer';
import nav from './nav';
// import { validCredential } from '../Service/EmployeeService'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import './login.css';
//import { useAuth } from "./AuthContext";

const Login = () => {
    //const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showFailedAlert, setShowFailedAlert] = useState(false);
    const navigate = useNavigate();
    

  

    const loginEmployee = async (e) => {
    e.preventDefault();

    // Retrieve username and password from state variables
    const formData = {
        username: username,
        password: password
    };

    // Example: Validate credentials with backend API
    try {
        const response = await fetch('http://localhost:9078/authentication/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        

        if (response.ok) {
           // console.log("rs", response);
          //const userData = await response.json();
           // console.log("User Data", userData);
          // const userId = userData.id;
           //localStorage.setItem('userId', userId);

            // Handle successful login
            
            setSuccess(true);
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                // Redirect to dashboard or another page
                navigate('/');
            }, 3000);
        } else {
            // Handle failed login
            setShowFailedAlert(true);
            setTimeout(() => {
                setShowFailedAlert(false);
            }, 3000);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


    return (
        <div>
           
            {showAlert && (
                <div className="alert-container">
                    <Alert severity="success">
                        Login Successful
                    </Alert>
                </div>
            )}

            {showFailedAlert && (
                <div className="alert-container">
                    <Alert severity="error">
                        Login Failed
                    </Alert>
                </div>
            )}
            <div className='outercontainer' style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className='container' style={{marginTop: '-30px', width: '500px',fontfamily:'Poppins' }}>
                    <div className='row col-md-10 offset-md-8'>
                        <div className='card'  style={{border: 'none'}} >
                            <h2 className='text-center' style={{fontFamily: 'Lato'}}>Welcome Back</h2>
                            <div className='card-body'>
                                <form onSubmit={loginEmployee}>
                                    <div className='form-group mb-2'>
                                    
                                        <input type='text'
                                            placeholder='Username'
                                            name='username'
                                            value={username}
                                            className='form-control'
                                            onChange={(e) => setUsername(e.target.value)}
                                            required style={{ fontFamily: 'Lato', textAlign: 'left' }}>
                                        </input>
                                    </div>

                                    <div className='form-group mb-2'>
                                     
                                        <input type='password'
                                            placeholder='Password'
                                            name='password'
                                            value={password}
                                            className='form-control'
                                            onChange={(e) => setPassword(e.target.value)}
                                            required style={{ fontFamily: 'Lato', textAlign: 'left' }}>
                                        </input>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                        <button style={{ backgroundColor: 'black',border: 'black', color: 'white', padding: '10px', width: '500px' }} className='btn btn-success' type='submit'>Login</button>
                                    </div>
                                     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                        <a href="/register" style={{  color: 'black',fontSize:'14px' }}>Account not found.Signup?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

// <label className='form-label'style={{ fontFamily: 'Roboto',textAlign: 'left' }}>Email : </label>
  // <label className='form-label' style={{ fontFamily: 'Roboto',textAlign: 'left' }}>Password : </label>

export default Login;