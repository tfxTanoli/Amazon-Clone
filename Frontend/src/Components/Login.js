import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from '../Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    marginTop: '200px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    fontSize: '1rem',
  };

  const handleSignin = () => {
    // Check if the email and password match your criteria
    if (email === 'usman5194999@gmail.com' && password === 'tfxUsman124') {
      setMessage('Sign in successful');
      
      // Clear the email and password fields on success
    //   setEmail('');
    //   setPassword('');
    } else {
      setMessage('Sign in failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <div>
        <Navbar/>
      </div>
    <form style={formStyle}>
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form1Example1"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label" htmlFor="form1Example1" style={labelStyle}>
          Email address
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="password"
          id="form1Example2"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="form-label" htmlFor="form1Example2" style={labelStyle}>
          Password
        </label>
      </div>

      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form1Example3"  />
            <label className="form-check-label" htmlFor="form1Example3">
              Remember me
            </label>
          </div>
        </div>

        <div className="col">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <button type="button" className="btn btn-primary btn-block" onClick={handleSignin}>
        Sign in
      </button>

      {message && <p>{message}</p>}
    </form>

   
      <Footer/>
   
    </div>
  );
};

export default Login;
