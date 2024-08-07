import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiurl } from '../Constants/apiurl';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${apiurl}/bookings`,{
          withCredentials: true
        }); // Adjust the URL if necessary
        console.log(response);
        
        setBookings(response.data.data);
      } catch (error) {
        console.error("There was an error fetching the bookings!", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>
      <div className="booking-list">
        {bookings.map(booking => (
          <div key={booking._id} className="booking">
            <h2>{booking.petName}</h2>
            <p>Type: {booking.petType}</p>
            <p>Care: {booking.careType}</p>
            <p>Start Date: {new Date(booking.startDate).toLocaleDateString()}</p>
            <p>End Date: {new Date(booking.endDate).toLocaleDateString()}</p>
            <p>Special Requests: {booking.specialRequests}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
