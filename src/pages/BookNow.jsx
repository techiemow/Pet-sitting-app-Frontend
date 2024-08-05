import React from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent, CardMedia, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./BookNow.css"

// Define the validation schema
const validationSchema = Yup.object({
  petName: Yup.string().required('Pet name is required'),
  petType: Yup.string().required('Pet type is required'),
  careType: Yup.string().required('Care type is required'),
  startDate: Yup.date().required('Start date is required').nullable(),
  endDate: Yup.date().required('End date is required').nullable(),
  specialRequests: Yup.string()
});

// Define the initial form values
const initialValues = {
  petName: '',
  petType: '',
  careType: '',
  startDate: '',
  endDate: '',
  specialRequests: ''
};

const handleSubmit = (values) => {
  console.log('Form submitted:', values);
  // Handle form submission (e.g., send data to an API)
};

const BookNow = () => {
  return (
    <div>
    <Container component="main" maxWidth="md" id='source'>
      <Typography variant="h4" align="center" gutterBottom>
        Book Pet Care
      </Typography>
      <Grid container spacing={4}>
        {/* Dog Images */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/path/to/dog1.jpg"
              alt="Dog 1"
            />
            <CardContent>
              <Typography variant="h6" component="div">
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
              image="/path/to/dog2.jpg"
              alt="Dog 2"
            />
            <CardContent>
              <Typography variant="h6" component="div">
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
              image="/path/to/dog3.jpg"
              alt="Dog 3"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Energetic Pup
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For the energetic pups who need plenty of playtime and exercise.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2} mt={4}>
              <Grid item xs={12} sm={6}>
                <Field
                  name="petName"
                  as={TextField}
                  label="Pet Name"
                  fullWidth
                  variant="outlined"
                  error={touched.petName && Boolean(errors.petName)}
                  helperText={touched.petName && errors.petName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="petType"
                  as={TextField}
                  label="Pet Type"
                  fullWidth
                  variant="outlined"
                  error={touched.petType && Boolean(errors.petType)}
                  helperText={touched.petType && errors.petType}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Care Plan</InputLabel>
                  <Field
                    name="careType"
                    as={Select}
                    label="Care Plan"
                    error={touched.careType && Boolean(errors.careType)}
                  >
                    <MenuItem value="basic">Basic</MenuItem>
                    <MenuItem value="standard">Standard</MenuItem>
                    <MenuItem value="premium">Premium</MenuItem>
                  </Field>
                  <FormHelperText>{touched.careType && errors.careType}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="startDate"
                  as={TextField}
                  label="Start Date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  error={touched.startDate && Boolean(errors.startDate)}
                  helperText={touched.startDate && errors.startDate}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="endDate"
                  as={TextField}
                  label="End Date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  error={touched.endDate && Boolean(errors.endDate)}
                  helperText={touched.endDate && errors.endDate}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="specialRequests"
                  as={TextField}
                  label="Special Requests"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit Booking
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
    </div>
  );
};

export default BookNow;
