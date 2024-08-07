import React from 'react';
import Success from "../assets/paymentsuccess.gif";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/');
  }

  return (
    <div className='container d-flex flex-column align-items-center p-4'>
      <img src={Success} alt='Payment Successful' className='img-fluid mb-3' />
      <Button 
        variant='contained' 
        className='w-100' 
        color='success' 
        onClick={handleOrder}
      >
        Home
      </Button>
    </div>
  );
}

export default PaymentSuccess;
