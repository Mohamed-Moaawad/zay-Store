import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//======= bootstrap =======
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Navs from './Components/Navs.jsx';
import Shop from './Pages/Shop';
import ProductDetals from './Pages/ProductDetals';
import About from './Pages/About';
import CreateProduct from './Pages/CreateProduct';
import Contact from './Pages/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h2>errorElement</h2>
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/create",
    element: <CreateProduct/>,
  },
  {
    path: "/detals/:productId",
    element: <ProductDetals/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
