import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import UploadImage from '../Helper/Uploadimage';
import { MdDelete } from "react-icons/md";
import image1 from "../assets/booknow1.jpg";
import image2 from "../assets/booknow2.jpg";
import image3 from "../assets/booknow3.jpeg";
import { apiurl } from '../Constants/apiurl';
import { toast } from 'react-toastify';
import './BookNow.css';
import axios from 'axios';

const BookNow = () => {
  const [formValues, setFormValues] = useState({
    petName: '',
    petType: '',
    careType: '',
    startDate: '',
    endDate: '',
    specialRequests: '',
    petImages: [],
    price: 0 // Add price to formValues
  });
  
  const [price, setPrice] = useState(0);

  const carePlanPrices = {
    basic: 799,
    standard: 1299,
    premium: 1899
  };

  const calculatePrice = () => {
    if (formValues.startDate && formValues.endDate && formValues.careType) {
      const start = new Date(formValues.startDate);
      const end = new Date(formValues.endDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1; // Add 1 to include both start and end dates

      const carePlanPrice = carePlanPrices[formValues.careType] || 0;
      const totalPrice = days * carePlanPrice;
      setPrice(totalPrice);
      setFormValues(prev => ({ ...prev, price: totalPrice })); // Update formValues with price
    } else {
      setPrice(0);
      setFormValues(prev => ({ ...prev, price: 0 })); // Reset formValues price
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted:', formValues);
    try {
      const response = await axios.post(`${apiurl}/NewBooking`, formValues, {
        withCredentials: true,
      });
      console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.message);
        setFormValues({
          petName: '',
          petType: '',
          careType: '',
          startDate: '',
          endDate: '',
          specialRequests: '',
          petImages: [],
          price: 0
        });
        setPrice(0);
      } else {
        toast.error('Error booking your pet. Please try again later.');
      }
    } catch (error) {
      console.error('Error booking your pet:', error);
      toast.error('Error booking your pet. Please try again later.');
    }
  };

  return (
    <Container maxWidth="md" id='source'>
      <Typography variant="h4" align="center" gutterBottom>
        Going For a Vacation
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
              required
            />
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
                <div className="image-wrapper" key={index} style={{ position: 'relative', marginRight: '10px' }}>
                  <img src={el} alt={`Pet ${index}`} style={{ width: '100px', height: '100px' }} />
                  <div
                    className="delete-icon"
                    onClick={() => {
                      const newPetImages = formValues.petImages.filter((_, i) => i !== index);
                      setFormValues({ ...formValues, petImages: newPetImages });
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      backgroundColor: 'red',
                      color: 'white',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      padding: '5px',
                    }}
                  >
                    <MdDelete />
                  </div>
                </div>
              ))}
              {formValues.petImages.length === 0 && (
                <Typography color="error">*Please upload pet images</Typography>
              )}
            </div>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="h6">Total Price: ${price}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Book Now
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default BookNow;
