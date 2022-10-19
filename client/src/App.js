import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Box} from '@mui/material';

import { GoogleOAuthProvider } from '@react-oauth/google';

// Component import
import Home from './Components/home/Home';
import Navber from './Components/header/Navber';
import Register from './Components/sigin/Register';
import Login from './Components/sigin/Login';

const App = () => {
  const clientId="307065475859-sr4hn21abkhvudsb15ijd6vg37eq6tca.apps.googleusercontent.com";
  /*  */
  return (
    <GoogleOAuthProvider clientId={clientId}>
       <BrowserRouter>
         <Navber />
         <Box style={{marginTop:85}}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/register' element={<Register />} />
               <Route path='/login' element={<Login />} />
            </Routes>
         </Box>
       </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App;
