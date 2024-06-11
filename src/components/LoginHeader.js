import React from 'react'
//import logo from '../../src/components/Logo.jpg'
 
const LoginHeader = () => {
  return (
    <div style={{ backgroundColor: 'black' }}> 
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black', color: 'white' }}> 
        <a className="navbar-brand" href="" style={{ color: 'white' }}> {/* Set the brand link to have white text */}
          
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/login" style={{ color: 'white' }}>Login</a> 
            <a className="nav-item nav-link" href="/" style={{ color: 'black' }}>Home</a> 
          </div>
        </div>
      </nav>
    </div>
  );
 
}

//<img src={logo} width="125" height="75" alt=""></img>
 
export default LoginHeader