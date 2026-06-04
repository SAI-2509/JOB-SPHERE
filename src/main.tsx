import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './Components/About.tsx';
import Notfound from './Components/Notfound.tsx';
import Login from './Components/Login.tsx';
import Applied from './Components/Applied.tsx';
import Register from './Components/Register.tsx';
import Home from './Components/Home.tsx';


//ROUTER PATHS
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Notfound/>    
  },
   {
    path:'/about/:id',
    element:<About/>,
    errorElement:<Notfound/>    
  },{
    path:'/login',
    element:<Login/>,
    errorElement:<Notfound/>
  },{
    path:"/applied",
    element:<Applied/>
  },{
    path:"/register",
    element:<Register/>
  },{  
    path:"/joblist",
    element:<App/>
  }

])


createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
