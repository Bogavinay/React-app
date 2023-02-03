import logo from './logo.svg';
import Counter from './Counter'
import "./App.css"
import React from 'react';
import Navbar from './Navbar';
import { Link, Outlet } from 'react-router-dom';
function App() {
 

  return (
    <div className="border border-2  border-danger m-2 p-2 " >
    <Navbar></Navbar>
    <Outlet></Outlet>
    
    {/* <Link to='/Countries'>countries</Link> */}
    {/* <Link to='/Myform'>myform</Link>&nbsp;&nbsp;&nbsp; */}
    {/* <Link to='/Mobilelist'>Mobilelist</Link>  */}
    {/* <Outlet></Outlet> */}
    </div>
  );
}



export default App;
