import React from 'react';
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './siginStyle.css';
import { Typography, styled, Box } from '@mui/material';

import { GoogleLogin } from '@react-oauth/google';

import jwt_decode from 'jwt-decode';

import { loginData, googleLogin } from '../../service/api';

const ErrorText = styled(Typography)`
     color:red;
     font-size:15px;
`

const Login = () => {


  const [data, setData] = useState({ email: '', password: '' });
  const { email, password } = data;

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onLoginSuccess = async (res) => {
    const decode = jwt_decode(res.credential);
    console.log(decode.email);
    const res_p = await googleLogin(decode.email);
    if (res_p.status === 406) {
      setError(res_p.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      localStorage.setItem('accessToken', `Bearer ${res_p.data.token}`)
      toast.success('Login successfully', {
        position: "top-center"
      });
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 3000);

      // console.log(res_p.data.token)
    }
  
  }
  const onLoginError = (res) => {
    console.log("Login faild", + res)
  }

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setData({ ...data, [fieldName]: fieldValue });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await loginData(data);
    if (res.status === 406) {
      setError(res.data.message);
      setTimeout(() => {
        setError("");
        setData({ email: '', password: '' })
      }, 3000);
    } else if (res.status === 400) {
      setError(res.data.message);
      setTimeout(() => {
        setError("");
        setData({ email: '', password: '' })
      }, 3000);
    } else {
      localStorage.setItem('accessToken', `Bearer ${res.data.token}`)
      toast.success('Login successfully', {
        position: "top-center"
      });
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 3000);

    }
  }

  return (
    <div className='styleForm'>
      <form className='form'>
        <h2>Login your account</h2>
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
          <button onClick={handleClick} className='button'>SIGN IN</button>
        </div>
        <Box className='googleLogin'>
          <GoogleLogin
            onSuccess={onLoginSuccess}
            onError={onLoginError}
          />
        </Box>
        <p></p>
        <div>
          <span><Link className='linkStyle' to="/register">Create an account ? Click here</Link></span>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}


export default Login;
