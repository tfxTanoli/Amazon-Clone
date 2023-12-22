<<<<<<< HEAD
// Sidebar.jsx

import React, { useState } from 'react';  // Import React and useState hook
import { Link } from 'react-router-dom';  // Import Link component from react-router-dom
// import '../Dashboard/Style.css'

function Sidebar({ onMenuItemClick }) {
  // State to control the visibility of the submenu under "Operations"
  const [showOperationsSubMenu, setShowOperationsSubMenu] = useState(false);

  // Function to toggle the visibility of the submenu
  const toggleSubMenu = () => {
    setShowOperationsSubMenu(!showOperationsSubMenu);
  };

  return (
    // Sidebar navigation container
    <nav className='navbar  navbar-dark sidebar p-2' style={{ position: 'sticky', top: '0', fontFamily: "poppins" }}>
      {/* Brand Section */}
      <div className="container">
        <Link to="#" className="navbar-brand mt-4">
          <h5 className='text-primary fw-bold ms-3' style={{ fontFamily: "poppins", fontSize: "30px" }}>
            Amazon 2.0
          </h5>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className='navbar-nav my-5'>
        {/* Dashboard link */}
        <li className='nav-item'>
          <Link to="#" className='nav-link ' onClick={() => onMenuItemClick('dashboard')}>
            <i className='bi bi-speedometer fs-6 me-4 text-primary'></i>
            <span className="fs-6">Dashboard</span>
          </Link>
        </li>

        {/* Operations link with submenu */}
        <li className='nav-item'>
          <Link to="#" className='nav-link' onClick={toggleSubMenu}>
            <i className='bi bi-file-text me-4 text-primary'></i>
            <span>Operations</span>
          </Link>
          {/* Submenu under Operations */}
          {showOperationsSubMenu && (
            <ul className='submenu'>
              {/* Add operation */}
              <li className='nav-item'>
                <Link to="#" className='nav-link' onClick={() => onMenuItemClick('add')}>
                  <i className='bi bi-plus-circle me-2 text-primary'></i>
                  <span>Add</span>
                </Link>
              </li>
              {/* Update operation */}
              <li className='nav-item'>
                <Link to="#" className='nav-link' onClick={() => onMenuItemClick('update')}>
                  <i className='bi bi-pencil me-2 text-primary'></i>
                  <span>Update</span>
                </Link>
              </li>
              {/* Delete operation */}
              <li className='nav-item'>
                <Link to="#" className='nav-link' onClick={() => onMenuItemClick('delete')}>
                  <i className='bi bi-trash me-2 text-primary'></i>
                  <span>Delete</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Products link */}
        <li className='nav-item'>
          <Link to="#" className='nav-link' onClick={() => onMenuItemClick('products')}>
            <i className='bi bi-box me-4 text-primary'></i>
            <span>Products</span>
          </Link>
        </li>

        {/* Messages link */}
        <li className='nav-item'>
          <Link to="#" className='nav-link' onClick={() => onMenuItemClick('messages')}>
            <i className='bi bi-chat me-4 text-primary'></i>
            <span>Messages</span>
          </Link>
        </li>

        {/* Notifications link */}
        <li className='nav-item'>
          <Link to="#" className='nav-link' onClick={() => onMenuItemClick('notifications')}>
            <i className='bi bi-bell me-4 text-primary'></i>
            <span>Notifications</span>
          </Link>
        </li>

        {/* Settings link */}
        <li className='nav-item'>
          <Link to="#" className='nav-link' onClick={() => onMenuItemClick('settings')}>
            <i className='bi bi-gear me-4 text-primary'></i>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
=======
import React from "react";
import { Link } from "react-router-dom";
import "../Components/Sidebar.css";

function Sidebar() {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row ">
        <div className="col-md-2 sidebar">
          <ul>
            <li>
              <Link to="/Cards">
                <i className="bi bi-house-fill"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/Catalog">
                <i className="bi bi-box"></i> Catalog
              </Link>
            </li>
            <li>
              <Link to="/additems">
                <i className="bi bi-plus-square"></i> Add Product
              </Link>
            </li>
            <li>
              <Link to="/viewitem">
                <i className="bi bi-eye"></i> View Product
              </Link>
            </li>
            <li>
              <Link to="/updateitem">
                <i className="bi bi-pencil"></i> Update Product
              </Link>
            </li>
            <li>
              <Link to="/deleteitem">
                <i className="bi bi-trash"></i> Delete Product
              </Link>
            </li>
            <li>
              <Link to="/notification">
                <i className="bi bi-bell-fill"></i> Notifications
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <i className="bi bi-person-fill"></i> Profile
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="col-md-10 main-content"></div> */}
      </div>
    </div>
  );
}

export default Sidebar;
>>>>>>> bdfb609cc4ad6053a25c77e546c3884553e7295f
