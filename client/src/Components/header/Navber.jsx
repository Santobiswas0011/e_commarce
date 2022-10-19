import React from 'react';

import { AppBar, Box, Button, Toolbar, styled } from '@mui/material';

import { Link } from 'react-router-dom';

import './header.css';


const Component = styled(AppBar)`
     background:#444;
     height:85px;
     display: flex;
     justify-content: center;
`
const Image=styled('img')({
    width:'70px'
});

const Navber = () => {
    return (
        <Box>
            <Component>
                <Toolbar>
                    <Box>
                        <Image src="https://i.postimg.cc/PrH7rvVK/logoweb.png" alt="" />
                    </Box>
                    <Box style={{marginLeft:"20%"}}>
                        <Link className='styleLink' to='/'>Home</Link>
                        <Link className='styleLink' to='/register'>Register</Link>
                        <Link className='styleLink' to='/login'>Login</Link>
                    </Box>
                    <Box>

                    </Box>
                </Toolbar>
            </Component>
        </Box>
    )
}


export default Navber;
