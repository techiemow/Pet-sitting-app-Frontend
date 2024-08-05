import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes'
import { store } from './store/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';




ReactDOM.createRoot(document.getElementById('root')).render(

    
    <Provider store={store}>
    <RouterProvider router={router} />
 </Provider>
 
)
