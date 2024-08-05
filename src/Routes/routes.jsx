import { createBrowserRouter } from 'react-router-dom'
import SignUp from '../Accounts/SignUp';
import Login from '../Accounts/Login';
import App from '../App';
import Home from '../Components/Home';



const router  = createBrowserRouter(
    [
        
    { path: "/",
     element:<App/>,
     children:[
      {
        path: "/",
        element: <Home />
      },
     ]
    },
    {
        path:"/Login",
        element:<Login/>
    },
            
    {
      path:"/SignUp",
      element:<SignUp />
    },
    ]
)

export default router;