import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { apiurl } from '../Constants/apiurl';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const userId = useSelector(state => state?.User?.User?._id); // Ensure _id is accessed safely

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${apiurl}/profile`, { withCredentials: true });
        setUser(response.data.user);
        setBookings(response.data.bookings);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>; // Show a loading message or spinner
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Typography variant="h6">
        Name: {user.username || 'N/A'}
      </Typography>
      <Typography variant="h6">
        Email: {user.email || 'N/A'}
      </Typography>

      <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
        Your Bookings
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet Name</TableCell>
              <TableCell>Pet Type</TableCell>
              <TableCell>Care Type</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking._id}>
                <TableCell>{booking.petName || 'N/A'}</TableCell>
                <TableCell>{booking.petType || 'N/A'}</TableCell>
                <TableCell>{booking.careType || 'N/A'}</TableCell>
                <TableCell>{new Date(booking.startDate).toLocaleDateString() || 'N/A'}</TableCell>
                <TableCell>{new Date(booking.endDate).toLocaleDateString() || 'N/A'}</TableCell>
                <TableCell>₹{booking.price || 'N/A'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Profile;
