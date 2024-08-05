import { createBrowserRouter } from 'react-router-dom'
import SignUp from '../Accounts/SignUp';
import Login from '../Accounts/Login';
import App from '../App';



const router  = createBrowserRouter(
    [
        
    { path: "/",
     element:<App/>,
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