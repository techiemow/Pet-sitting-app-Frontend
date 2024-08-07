import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiurl } from '../Constants/apiurl';
import { Container, Typography, Card, CardContent, Grid, Button, Box, CardMedia } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const User = useSelector(state => state?.User?.User);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${apiurl}/bookings`, {
          withCredentials: true
        });
        setBookings(response.data.data);
      } catch (error) {
        console.error("There was an error fetching the bookings!", error);
      }
    };

    fetchBookings();
  }, []);

  const handlePaymentSuccess = async (response) => {
    try {
      const paymentResponse = await axios.post(`${apiurl}/payment/success`, {
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
        amount: response.amount, // Add the amount
        email: User.email, // Add the email
        petDetails: response.petDetails // Add the pet details
      }, {
        withCredentials: true
      });

      console.log('Payment Success:', paymentResponse.data);

      if (paymentResponse.data.success) {
        navigate('/PaymentSuccess');
      } else {
        navigate('/PaymentFailure');
      }
    } catch (error) {
      console.error('Error handling payment success:', error);
      navigate('/PaymentFailure');
    }
  };

  const handlePayment = async (booking) => {
    try {
      const response = await axios.post(`${apiurl}/checkout`, {
        amount: booking.price,
        email: User.email,
        currency: 'INR'
      }, {
        withCredentials: true
      });

      const { order_id, amount } = response.data;

      // Razorpay payment options
      const options = {
        key: "rzp_test_DClMygpDU9TijX",
        amount: amount, // Amount in paise
        currency: 'INR',
        name: "Paws and Claws",
        description: 'Business Transaction',
        order_id: order_id, // Order ID created in the backend
        handler: (response) => handlePaymentSuccess({ ...response, amount: booking.price, petDetails: booking }),
        prefill: {
          email: User.email, // Correct email
        },
        theme: {
          color: '#3399cc',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  const handledeleteBooking = async(id) =>{
    try {
      const response = await axios.delete(`${apiurl}/DeleteBooking/${id}`, {
        withCredentials: true
      });
      console.log('Booking deleted:', response.data);
      setBookings(bookings.filter(b => b._id!== id));
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  }


  const handleEditBooking = (booking) => {
    navigate('/UpdateBooking', { state: { booking } });
  };

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        paddingTop: 4, 
        backgroundColor: '#f5f5f5', // Mild background color
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 1s ease-in-out'
      }}
    >
      <Typography variant="h3" gutterBottom align="center">
        My Bookings
      </Typography>
      <Grid container spacing={3}>
        {bookings.map(booking => (
          <Grid item xs={12} sm={6} md={4} key={booking._id}>
            <Card 
              sx={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={booking.petImages[0]} // Display the first image
                alt={booking.petName}
              />
              <CardContent>
                <Typography variant="h5" className='text-center' component="div">
                  {booking.petName}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Type: {booking.petType}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Care: {booking.careType}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Start Date: {new Date(booking.startDate).toLocaleDateString()}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  End Date: {new Date(booking.endDate).toLocaleDateString()}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Special Requests: {booking.specialRequests}
                </Typography>
                <Typography variant="body1" color="text.primary" sx={{ mt: 2 }}>
                  Price: ₹{booking.price}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ mr: 1 }} 
                    onClick={() => handlePayment(booking)} // Pass the price to handlePayment
                  >
                    Pay Now
                  </Button>
                  <Button variant="outlined" color="error" sx={{ mr: 1 }} 
                  onClick={()=>{handledeleteBooking(booking._id)}}>
                    Delete
                  </Button>
                  <Button variant="outlined" onClick={() => handleEditBooking(booking)}>
                    Edit
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyBookings;
