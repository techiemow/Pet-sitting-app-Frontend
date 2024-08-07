import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import image from "../assets/image.png";
import image2 from "../assets/price2.jpg";
import image3 from "../assets/price-3.jpg";
import { useNavigate } from 'react-router-dom';
import displayINRCurrency from '../Helper/DisplayINR';

const AnimatedCard = styled(Card)({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const PricingPlans = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" color="textSecondary" align="center" gutterBottom>
        Pricing Plan
      </Typography>
      <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
        Choose the <span style={{ color: '#1976d2' }}>Best Price</span>
      </Typography>
      <Grid container spacing={4}>
        {/* Basic Plan */}
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" height="100%">
            <AnimatedCard sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                alt="Basic Plan"
                height="250"
                image={image} // Replace with actual image path
              />
              <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', flex: 1 }}>
                <Typography variant="h3" component="div" gutterBottom>
                  Basic
                </Typography>
                <Typography variant="h2" component="div">
                  <small style={{ fontSize: '22px', lineHeight: '45px' }}>₹</small>
                  {displayINRCurrency(799)}
                  <small style={{ fontSize: '16px', lineHeight: '40px' }}>/day</small>
                </Typography>
              
              </CardContent>
              <CardContent style={{ marginTop: "25px" }}>
                <ul style={{ listStyleType: "none" }}>
                  <li>Pet Boarding</li>
                  <li>Pet Feeding</li>
                  <li>Basic Grooming</li>
                  <li>Play Time</li>
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="contained" color="primary" onClick={() => { navigate("/BookNow") }}>
                  Sign Up Now
                </Button>
              </CardActions>
            </AnimatedCard>
          </Box>
        </Grid>
        {/* Standard Plan */}
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" height="100%">
            <AnimatedCard sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                alt="Standard Plan"
                height="250"
                image={image2}
              />
              <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', flex: 1 }}>
                <Typography variant="h3" component="div" gutterBottom>
                  Standard
                </Typography>
                <Typography variant="h2" component="div">
                  <small style={{ fontSize: '22px', lineHeight: '45px' }}>₹</small>
                  {displayINRCurrency(1299)}
                  <small style={{ fontSize: '16px', lineHeight: '40px' }}>/day</small>
                </Typography>
              </CardContent>
              <CardContent>
                <ul style={{ listStyleType: "none" }}>
                  <li>Pet Boarding</li>
                  <li>Pet Feeding</li>
                  <li>Advanced Grooming</li>
                  <li>Play Time</li>
                  <li>Basic Training</li>
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="contained" color="secondary" onClick={() => { navigate("/BookNow") }}>
                  Sign Up Now
                </Button>
              </CardActions>
            </AnimatedCard>
          </Box>
        </Grid>
        {/* Premium Plan */}
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" height="100%">
            <AnimatedCard sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                alt="Premium Plan"
                height="250"
                image={image3}
              />
              <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', flex: 1 }}>
                <Typography variant="h3" component="div" gutterBottom>
                  Premium
                </Typography>
                <Typography variant="h2" component="div" style={{ marginBottom: "15px" }}>
                  <small style={{ fontSize: '22px', lineHeight: '45px' }}>₹</small>
                  {displayINRCurrency(1899)}
                  <small style={{ fontSize: '16px', lineHeight: '40px' }}>/day</small>
                </Typography>
              </CardContent>
              <CardContent>
                <ul style={{ listStyleType: "none" }}>
                  <li>Pet Boarding</li>
                  <li>Pet Feeding</li>
                  <li>Full Grooming</li>
                  <li>Play Time</li>
                  <li>Advanced Training</li>
                  <li>Veterinary Care</li>
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="contained" color="primary" onClick={() => { navigate("/BookNow") }}>
                  Sign Up Now
                </Button>
              </CardActions>
            </AnimatedCard>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PricingPlans;
