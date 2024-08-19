import React from 'react'
import { Card, Typography } from '@mui/material';
import Side from '../assets/loginside.jpg'
import Bit from '../assets/bitpro.png'
import RegistrationInputs from './RegistrationInputs';
import '../components/reginputs.css'

function MyCard() {
  return (
    <>

    <Card
    sx={{ borderRadius: '50px', width: '1150px', height: '550px', margin: 'auto', position: 'fixed', 
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'white', 
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.35)', 
        '&:hover': {
          boxShadow: '0 0 20px rgba(150, 225, 249)'
        }
        
      }}>

    <img src={Side} alt=""
          style={{ height:'522px', width: '570px', marginTop: '15px', borderRadius: '40px 40px 40px 40px',
                    position: 'fixed', marginLeft: '565px', 
                  }}/> 

    <img src={Bit} alt="" 
          style={{ display: 'block', height: '100px', width: '190px', marginTop: '0px', marginLeft: '168px' }} />

    <Typography variant="h6" 
      sx={{ fontFamily: 'Poppins', mt: 0, ml: '70px', fontWeight:'650' }}>
          Bannari Amman Institute of Technology
    </Typography>

    <Typography variant="h6" 
      sx={{ fontFamily: 'Roboto', mt: '7px', ml: '200px', fontSize: '17.5px', fontWeight: '700' }}>
          Create Account
    </Typography>

    <RegistrationInputs/>
  </Card>
  </>
  )
}

export default MyCard