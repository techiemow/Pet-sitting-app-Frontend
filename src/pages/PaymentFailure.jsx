import React from 'react';
import { useNavigate } from 'react-router-dom';
import failure from "../assets/failure.webp";
import { Button } from '@mui/material';

const PaymentFailure = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/');
  }

  return (
    <div className='container d-flex flex-column align-items-center p-4 bg-light'>
      <img src={failure} alt='Payment Failed' className='img-fluid mb-3' />
      <h1 className='text-danger mb-2'>Payment Canceled!</h1>
      <Button 
        variant="contained" 
        color="error" 
        onClick={handleOrder}
      >
        Home 
      </Button>
    </div>
  );
}

export default PaymentFailure;
