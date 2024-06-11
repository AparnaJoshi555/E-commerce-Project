import React,{useState} from 'react';
import SimpleHeader from './SimpleHeader';
import Footer from './Footer';
import NavComponent from './nav';
import './login.css';
import LoginHeader from './LoginHeader';
 
const SignupPage=()=>{
 
    const[formData,setFormData]=useState({
        fname:'',
        lname:'',
        username:'',
        password:'',
        email:''
       
   
    });
   
   const handleChange=(e)=>{
        if(e.target.name==='role')
        {
            setFormData({ ...formData,[e.target.name]:e.target.value});
        }
        else{
        setFormData({ ...formData,[e.target.name]:e.target.value });
        }
    };
 
 
    const handleSubmit=async(e)=>{
        e.preventDefault();
 
        if( !validateEmail(formData.email)){
           
            alert('Invalid Email Format');
            return;
        }
        if( !validatePassword(formData.password)){
           
            alert('Invalid Password Format');
            return;
        }
        try{
            const response=await fetch('http://localhost:9078/authentication/register',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            });
            if(response.ok){
                window.location.href='./login';
            } else{
                console.error('signup failed');
            }
        } catch(error){
            console.error('Error',error);
        }
    };
    const validatePassword =(password) =>{
        const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        console.log(password);
        return passwordRegex.test(password);
    };
    const validateEmail=(email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       
        return emailRegex.test(email);
    };
 
    return (
      <div>
            <LoginHeader /> 

            <div className='signupouter' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className='container' style={{ marginTop: '-160px', width: '500px', backgroundcolor:'#d5d5d5'}}>
                    <div className='row' style={{ backgroundcolor: '#d5d5d5' }} >
                        <div className='card' style={{ border: 'none' }}>
                            <h2 className='text-center' style={{ fontFamily: 'Lato', margin: '20px',fontweight:'bold' }}>Get Started Now....</h2>
                    <div className='card-body'>
          <form >
          <div className='form-group mb-2'>
 
    <input type="text" id="fname" name="fname" placeholder='first Name' value={formData.fname} className='form-control'
    onChange={handleChange} required style={{fontFamily:'Lato', textAlign: 'left'}}/></div>
 
<div className='form-group mb-2'>
   <input type="text" id="lname" name="lname" placeholder='Last Name'value={formData.lname} className='form-control'
    onChange={handleChange} required style={{fontFamily:'Lato', textAlign: 'left'}}/></div>
 
    <div className='form-group mb-2'>
  <input type="text" id="username" name="username" placeholder='username' value={formData.username} className='form-control'
    onChange={handleChange} required style={{fontFamily:'Lato', textAlign: 'left'}}/></div>  
   
 
 <div className='form-group mb-2'>
  
     <input type="password" id="password" name="password" placeholder='password'value={formData.password} className='form-control'
    onChange={handleChange} required style={{fontFamily:'Lato', textAlign: 'left'}}/></div>
 
   
    <div className='form-group mb-2'>
 
 
    <input type="email" id="email" name="email" placeholder='email' value={formData.email} className='form-control'
    onChange={handleChange} 
    required style={{fontFamily:'Lato', textAlign: 'left'}}/></div>
 
           
            </form>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <button style={{ backgroundColor: 'black',border: 'black', fontSize:'12px',fontWeight:'bold', color: 'white'}} className='btn btn-success' onClick={handleSubmit}>Sign Up</button>
           </div>
                    </div>
                </div>
            </div>
                   
        </div>
        </div>
        <Footer></Footer>
    </div>
      );
    }
     
    export default SignupPage;