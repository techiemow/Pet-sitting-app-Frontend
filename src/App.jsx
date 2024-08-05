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

  return (

     <div>
      <ToastContainer position="top-center" autoClose={5000} />
       <Navbar/>
       {isLoading ? (
      <div className="loading">Loading...</div>
    ) :(
      <main style={{ minHeight: "100vh"}} className="source">
      <Outlet />
    </main>
    )}
       <Footer />
       
     </div>
  )
}

export default App
