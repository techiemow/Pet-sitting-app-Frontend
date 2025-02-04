import { createBrowserRouter } from 'react-router-dom'
import SignUp from '../Accounts/SignUp';
import Login from '../Accounts/Login';
import App from '../App';
import Home from '../Components/Home';
import BookNow from '../pages/BookNow';
import Contact from '../pages/Contact';
import PricingPlans from '../pages/PricingPlans';
import MyBookings from '../pages/MyBookings';
import BookingUpdate from '../pages/BookingUpdate';
import PaymentFailure from '../pages/PaymentFailure';
import PaymentSuccess from '../pages/PaymentSucess';
import Profile from '../pages/Profile';



const router  = createBrowserRouter(
    [
        
    { path: "/",
     element:<App/>,
     children:[
      {
        path: "/",
        element: <Home />

      },
      {
        path:"/SignUp",
        element:<SignUp />
      },
      {
        path:"/Login",
        element:<Login/>
    },
    {
      path:"/BookNow",
      element:<BookNow />
    },
    {
      path:"/Contact",
      element:<Contact/>
    },
    {
      path:"/Plans",
      element:<PricingPlans  />
    },
    {
      path: "/MyBookings",
      element:<MyBookings />
    },
    {
      path:"/UpdateBooking",
      element:<BookingUpdate />
    },
    {
      path:"/PaymentSuccess",
      element:<PaymentSuccess/>
    },
    {
      path:"/PaymentFailure",
      element:<PaymentFailure />
    },
    {
      path:"/Profile",
      element:<Profile/>
    },
    {
      path: "*",
      element:<h1>Page Not Found</h1>
    }

     ]
    },
  
            
 
    ]
)

export default router;