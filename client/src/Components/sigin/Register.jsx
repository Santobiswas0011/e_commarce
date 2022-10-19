import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Typography, styled } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { addRegisterData } from '../../service/api';

import './siginStyle.css';

const ErrorText = styled(Typography)`
     color:red;
     font-size:15px;
`

const Register = () => {

  const [data, setData] = useState({ uName: '', phone: '', country: '', address: '', email: '', password: '' });
  const { uName, phone, country, address, email, password } = data;

  const [error, setError] = useState("");
  
  const navigate=useNavigate("");

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setData({ ...data, [fieldName]: fieldValue });

  };

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await addRegisterData(data);
    if (res.status === 401) {
      setError(res.data.message);
      setTimeout(() => {
        setError("");
        setData({uName: '', phone: '', country: '', address: '', email: '', password: '' })
      },3000);
    } else {
      toast.success(res.data.message, {
        position: "top-center"
      });
      setTimeout(()=>{
        navigate('/login')
      },3000)
    }

  }


  return (
    <div className='styleForm'>
      <form className='form'>
        <h2>Create Account</h2>
        <div>
          <input type="text" onChange={handleChange} value={uName} name="uName" placeholder='Enter your name' required />
        </div>
        <div>
          <input type="text" onChange={handleChange} value={phone} name="phone" placeholder='Enter phone number' required />
        </div>
        <div>
          <input type="text" onChange={handleChange} value={country} name="country" placeholder='Enter your country' required />
        </div>
        <div>
          <input type="text" onChange={handleChange} value={address} name="address" placeholder='Enter full address' required />
        </div>
        <div>
          <input type="email" onChange={handleChange} value={email} name="email" placeholder='Enter your email' required />
        </div>
        <div>
          <input type="password" onChange={handleChange} value={password} name="password" placeholder='Enter password' required />
        </div>
        {
          error &&
          <ErrorText>{error}</ErrorText>
        }
        <div>
          <button onClick={handleClick} className='button'>SIGN UP</button>
        </div>
        <p></p>
        <div>
          <span><Link className='linkStyle' to="/login">Already have an account ? click here</Link></span>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Register;
