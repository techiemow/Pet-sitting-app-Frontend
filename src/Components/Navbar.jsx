import React from 'react';
import Button from '@mui/material/Button';
import logo from "../assets/paws.png";
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { setUserDetails } from '../store/Userslice';
import Cookies from "js-cookie";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import "./Navbar.css";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usertoken = localStorage.getItem('login');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleNavigation = (route) => {
    navigate(route);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (route) => {
    setAnchorEl(null);
    if (route) {
      handleNavigation(route);
    }
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    localStorage.removeItem('login');
    localStorage.removeItem('usertoken');
    Cookies.remove("token");
    dispatch(setUserDetails(null));
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid justify-content-between">
          <div className="navbar-header d-flex align-items-center">
            <img src={logo} width={50} alt='Paws and Claws' />
            <a className="navbar-brand" href="/">Paws & Claws</a>
          </div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center bg-body-tertiary" id="navbarSupportedContent p-3" >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" onClick={() => handleNavigation('/')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleNavigation('/BookNow')}>Book Now</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleNavigation('/Plans')}>Plans</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleNavigation('/Contact')}>Contact</a>
              </li>
            </ul>
            <div className="d-flex">
              {usertoken ? (
                <Box sx={{ gap: 5, display: 'flex' }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={() => handleClose()}
                  >
                    <MenuItem onClick={() => handleClose('/Profile')}>Profile</MenuItem>
                    <MenuItem onClick={() => handleClose('/MyBookings')}>My Bookings</MenuItem>
                  </Menu>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </Box>
              ) : (
                <Box sx={{ gap: 5, display: 'flex' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleNavigation('/Login')}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleNavigation('/SignUp')}
                  >
                    Sign Up
                  </Button>
                </Box>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
