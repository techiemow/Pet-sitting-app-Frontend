import React from 'react'
import Button from '@mui/material/Button';
import logo from  "../assets/paws.png"
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate()
  const handleAccount = (e, route) => {
    navigate(route);
  };



  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div>
    <img src={logo} width={50} alt='Paws and claws'/>
    <a class="navbar-brand" href="#">Paws & Claws</a>
    </div>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">


      </ul>
      <div class="d-flex m-3">
     
      <Box sx={{ gap: 5 }}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={(e) => handleAccount(e, '/Login')}
            >
              Login
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={(e) => handleAccount(e, '/SignUp')}
            >
              Sign Up
            </Button>
          </Box>
      
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar