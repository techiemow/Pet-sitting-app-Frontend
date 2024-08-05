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

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usertoken = localStorage.getItem('login');

  const handleNavigation = (route) => {
    navigate(route);
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
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary ">
        <div className="container-fluid justify-content-between">
          <div className="navbar-header d-flex align-items-center">
            <img src={logo} width={50} alt='Paws and Claws' />
            <a className="navbar-brand" href="/">Paws & Claws</a>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page"  onClick={() => handleNavigation('/')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  onClick={() => handleNavigation('/BookNow')}>Book Now</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link"  onClick={() => handleNavigation('/Contact')}>Contact</a>
              </li>
            </ul>
          </div>

          <div className="d-flex m-3">
            {usertoken ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
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
      </nav>
    </div>
  );
};

export default Navbar;
