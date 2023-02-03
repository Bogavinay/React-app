import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/countries'>countries</Link> 
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default Navbar;