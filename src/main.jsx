import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Orders from './components/Oders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import cartProductsLoader from './Loader/cartProductsLoader.js';
import CheckOut from './components/CheckOut/CheckOut.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
       loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'checkout',
        element: <CheckOut></CheckOut>
      },


    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
