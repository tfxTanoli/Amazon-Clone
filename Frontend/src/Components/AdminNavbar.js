import React from "react";
import {Link} from 'react-router-dom';
import "./AdminNavbar.css";

function AdminNavbar(){
    return(
        <div className="container-fluid">
           < div className="nav-bar">
        <div className="logo">
          <Link className="Link" path="/">
          </Link>
        </div>
        <div className="shop">
          <i className="bi bi-cart-fill"> My Shop</i>
        </div>
        <div className="settings">
          <i className="bi-gear-fill"> Settings</i>
        </div>
        <div className="support">
          <i className="bi-chat-fill"> Support</i>
        </div>
        <div className="search-container">
          <div className="search-div">
            <i className="bi bi-search"></i>
          </div>
        </div>
        </div>
        </div>
    )
}
export default AdminNavbar;