import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Myform from './Myform'
import Mobilelist from './Mobilelist'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Countries from './Countries';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>, 
      children:[
        {
          path:'/Countries',
          element:<Countries></Countries>
        }
      ] 
    },
    // {
    //   path:'/Myform',
    //   element:<Myform></Myform>,
      
    // },
   
   
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <RouterProvider router={router} />
    
    </div>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
