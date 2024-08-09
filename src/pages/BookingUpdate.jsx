import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import UploadImage from '../Helper/Uploadimage';
import { MdDelete } from "react-icons/md";
import image1 from "../assets/booknow1.jpg";
import image2 from "../assets/booknow2.jpg";
import image3 from "../assets/booknow3.jpeg";
import { apiurl } from '../Constants/apiurl';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import "./BookingUpdate.css"

const UpdateBooking = () => {
  const { state } = useLocation();
  const { booking } = state || {};

  const [formValues, setFormValues] = useState({
    petName: booking?.petName || '',
    petType: booking?.petType || '',
    careType: booking?.careType || '',
    startDate: booking?.startDate ? new Date(booking.startDate).toISOString().split('T')[0] : '',
    endDate: booking?.endDate ? new Date(booking.endDate).toISOString().split('T')[0] : '',
    specialRequests: booking?.specialRequests || '',
    petImages: booking?.petImages || [],
    price: booking?.price || 0
  });

  const [price, setPrice] = useState(booking?.price || 0);
  const [dateError, setDateError] = useState('');
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

  const carePlanPrices = {
    basic: 799,
    standard: 1299,
    premium: 1899
  };

  const calculatePrice = () => {
    if (formValues.startDate && formValues.endDate && formValues.careType) {
      const start = new Date(formValues.startDate);
      const end = new Date(formValues.endDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

      const carePlanPrice = carePlanPrices[formValues.careType] || 0;
      const totalPrice = days * carePlanPrice;
      setPrice(totalPrice);
      setFormValues(prev => ({ ...prev, price: totalPrice }));
    } else {
      setPrice(0);
      setFormValues(prev => ({ ...prev, price: 0 }));
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [formValues.startDate, formValues.endDate, formValues.careType]);

  const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const imageUrl = await UploadImage(file);
        console.log("Uploaded image URL:", imageUrl);
        setFormValues((prev) => ({
          ...prev,
          petImages: [...prev.petImages, imageUrl]
        }));
      } catch (error) {
        console.error("Upload failed", error);
      }
    }
  }

  const validateDates = () => {
    const { startDate, endDate } = formValues;
    if (startDate && endDate) {
      if (new Date(startDate) >= new Date(endDate)) {
        setDateError('End date must be after start date.');
        return false;
      }
      setDateError('');
      return true;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateDates()) return;

    console.log('Form submitted:', formValues);
    try {
      const response = await axios.put(`${apiurl}/UpdateBooking/${booking._id}`, formValues, {
        withCredentials: true,
      });
     
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/MyBookings");
      } else {
        toast.error('Error updating your booking. Please try again later.');
      }
    } catch (error) {
      console.error('Error updating your booking:', error);
      toast.error('Error updating your booking. Please try again later.');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <Container maxWidth="md" id='source'>
      <Typography variant="h4" align="center" gutterBottom>
        Update Your Booking
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={image1}
              alt="Dog 1"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Happy Pup
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our dogs are always happy and playful. Choose the best plan for their care.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={image2}
              alt="Dog 2"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Calm Canine
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Whether it's a calm day or an active one, we have the right plan for your furry friend.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={image3}
              alt="Dog 3"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Energetic Pup
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For the energetic pups who need plenty of playtime and exercise.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3} mt={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pet Name"
              variant="outlined"
              fullWidth
              value={formValues.petName}
              onChange={(e) => setFormValues({ ...formValues, petName: e.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pet Type"
              variant="outlined"
              fullWidth
              value={formValues.petType}
              onChange={(e) => setFormValues({ ...formValues, petType: e.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Care Plan"
              variant="outlined"
              fullWidth
              SelectProps={{
                native: true,
              }}
              value={formValues.careType}
              onChange={(e) => setFormValues({ ...formValues, careType: e.target.value })}
              required
            >
              <option value="">Select a plan</option>
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Start Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              fullWidth
              value={formValues.startDate}
              onChange={(e) => setFormValues({ ...formValues, startDate: e.target.value })}
              inputProps={{ min: today }} // Disable past dates
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="End Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              fullWidth
              value={formValues.endDate}
              onChange={(e) => setFormValues({ ...formValues, endDate: e.target.value })}
              inputProps={{ min: formValues.startDate || today }} // Disable past dates and ensure end date is not before start date
              required
            />
            {dateError && <Typography color="error">{dateError}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Special Requests"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formValues.specialRequests}
              onChange={(e) => setFormValues({ ...formValues, specialRequests: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              id="petImages"
              name="petImages"
              type="file"
              multiple
              onChange={handleUploadImage}
              style={{ display: 'none' }}
            />
            <label htmlFor="petImages">
              <Button variant="contained" component="span">
                Upload Images
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <div className="image-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {formValues.petImages.map((el, index) => (
                <div className="image-wrapper" key={index} style={{ position: 'relative', marginRight: '10px' }}      onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                  <img src={el}  alt={`Pet ${index}`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                  <MdDelete
                     style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        padding: '5px',
                        fontSize: '18px',
                        transition: 'transform 0.3s',
                        transformOrigin: 'top right',
                        '&:hover': {
                            transform: 'translateY(-5px)',
    
                        }
                      }}
                    className=''
                    onClick={() => setFormValues(prev => ({
                      ...prev,
                      petImages: prev.petImages.filter((_, i) => i !== index)
                    }))}
                  />
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Total Price: ₹{price}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary" >
              Update Booking
            </Button>
            
          </Grid>
        </Grid>
        <Button type="submit" className='my-2' fullWidth variant="contained" color="error" onClick={()=>{navigate("/")}}>
              Cancel
            </Button>
      </form>
    </Container>
  );
};

export default UpdateBooking;

