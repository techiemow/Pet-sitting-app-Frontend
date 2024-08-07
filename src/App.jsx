import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { setUserDetails } from "./store/Userslice";
import { useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { apiurl } from "./Constants/apiurl";
import "./App.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';




function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);


  const fetchUserDetails = async () => {
    try {
      const dataResponse = await axios.get(`${apiurl}/UserDetails`, {
        withCredentials: true,
      });
      console.log('user', dataResponse.data.data);
      
      if (dataResponse.data.success) {
        dispatch(setUserDetails(dataResponse.data.data));
      }
    } catch (error) {
      console.error('Failed to fetch user details:', error);

    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);



  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', // Your primary color
      },
      secondary: {
        main: '#dc004e', // Your secondary color
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
     <div>
      <ToastContainer position="top-center" autoClose={5000} />
       <Navbar/>
       {isLoading ? (
      <div className="loading" style={{ minHeight: "100vh"}}>Loading...</div>
    ) :(
      <main style={{ minHeight: "100vh"}} className="source">
      <Outlet />
    </main>
    )}
       <Footer />
       
     </div>
     </ThemeProvider>
  )
}

export default App
