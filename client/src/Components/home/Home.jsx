import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import Plan from './Plan';

const ImageStyle = styled('img')({
  width: '100%',
  height: '86vh'
});

const Text = styled(Typography)`
    text-align:center;
    font-size:40px;
    font-weight:600;
    text-transform: uppercase;
    color:brown;
    font-style: italic;
    padding:15px;
`

const Container=styled(Box)`
    display:flex;
    padding:15px;
    margin:0  100px;
    & > div {
       padding:10px 50px;
    }
`
const Image=styled('img')({
     width:'220px',
     height:'200px',
});

const HText=styled(Typography)`
    font-size:30px;
`
const Hpara=styled(Typography)`
     text-align: justify;
     font-size:14px;
`


const Home = () => {
  return (
    <>
      <Box>
        <ImageStyle src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </Box>
      <>
        <Text>Services</Text>
        <Container>
          <Box>
            <Image src="logo1.png" alt="" />
            <HText>Shop & Ship</HText>
            <Hpara>
              Sign up for FREE and get a FREE virtual shipping address; shop from ANY Indian online store; store your purchases in your PERSONAL LOCKER & consolidate; we'll repackage & ship them to your doorsteps!
              International Cards giving you trouble at checkout? Take away our Personal Shopper!
            </Hpara>
          </Box>
          <Box>
            <Image src="logo2.png" alt="" />
            <HText>Sololane Courier</HText>
            <Hpara>
              Schedule a Pickup from ANY part of India, our professionals will come to your doorsteps in 24-48 hours & dispatch your package to the destination ANYWHERE around the globe in 3-6 business days!
              Need to courier something abroad for a loved one? Worry No More Re! Just Shopp!
            </Hpara>
          </Box>
        </Container>
        <Box>
          <Plan />
        </Box>
      </>
    </>
  )
}

export default Home;
