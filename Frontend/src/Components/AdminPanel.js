<<<<<<< HEAD
// AdminPanel.jsx

import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import Dashboard from './Dashboard';
// import Products from './Products';
import LandingPage from "./LandingPage";
import AddProducts from './Additems';
import DeleteProducts from './DeleteItem';
import UpdateProduct from './UpdateItem';

function AdminPanel() {
  // State to track the selected menu item
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  // Function to handle menu item clicks
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  // Function to render the appropriate component based on the selected menu item
  const renderComponent = () => {
    switch (selectedMenuItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <LandingPage />;
      case 'add':
        return <AddProducts />;
      case 'delete':
        return <DeleteProducts />;
      case 'update':
        return <UpdateProduct />;
      default:
        return null; // No other components available for now
=======
import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Additems from "./Additems";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";
import ViewItem from "./ViewItem";
import Cards from "./Cards";
import "./Sidebar.css";

function AdminPanel() {
  const [activePage, setActivePage] = useState("Cards");

  const changePage = (page) => {
    setActivePage(page);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case "add":
        return <Additems />;
      case "delete":
        return <DeleteItem />;
      case "update":
        return <UpdateItem />;
      case "Cards":
        return <Cards />;
      case "view":
        return <ViewItem />;
      default:
        return <Cards />;
>>>>>>> bdfb609cc4ad6053a25c77e546c3884553e7295f
    }
  };

  const handleItemClick = (page) => {
    setActivePage(page);
  };

  return (
<<<<<<< HEAD
    <div className="container-fluid bg-dark text-white min-vh-100">
      {/* Main Row */}
      <div className="row">
        {/* Sidebar Column */}
        <div className="col-2 bg-black min-vh-100">
          {/* Sidebar component with onMenuItemClick prop */}
          <Sidebar onMenuItemClick={handleMenuItemClick} />
        </div>
        {/* Main Content Column */}
        <div className="col-10 my-4">
          {/* Render the appropriate component based on the selected menu item */}
          {renderComponent()}
=======
    <div
      className="container-fluid"
      // style={{ backgroundColor: "rgba(37, 32, 64, 255)" }}
    >
      <AdminNavbar />

      <div className="container-fluid overflow-hidden">
        <div className="row">
          <div className="col-md-2 sidebar ">
            <ul>
              <li
                onClick={() => handleItemClick("Cards")}
                style={{ ...(activePage === "Cards"), color: "white" }}
              >
                <i className="bi bi-house-fill"></i> Dashboard
              </li>
              <li
                onClick={() => handleItemClick("catalog")}
                style={{ ...(activePage === "catalog"), color: "white" }}
              >
                <i className="bi bi-box"></i> Catalog
              </li>
              <li
                onClick={() => handleItemClick("add")}
                style={{ ...(activePage === "add"), color: "white" }}
              >
                <i className="bi bi-plus-square"></i> Add Product
              </li>
              <li
                onClick={() => handleItemClick("view")}
                style={{ ...(activePage === "view"), color: "white" }}
              >
                <i className="bi bi-eye"></i> View Product
              </li>
              <li
                onClick={() => handleItemClick("update")}
                style={{ ...(activePage === "update"), color: "white" }}
              >
                <i className="bi bi-pencil"></i> Update Product
              </li>
              <li
                onClick={() => handleItemClick("delete")}
                style={{ ...(activePage === "delete"), color: "white" }}
              >
                <i className="bi bi-trash"></i> Delete Product
              </li>
              <li
                onClick={() => handleItemClick("notifications")}
                style={{ ...(activePage === "notifications"), color: "white" }}
              >
                <i className="bi bi-bell-fill"></i> Notifications
              </li>
              <li
                onClick={() => handleItemClick("profile")}
                style={{ ...(activePage === "profile"), color: "white" }}
              >
                <i className="bi bi-person-fill"></i> Profile
              </li>
            </ul>
          </div>
          <div
            className="col-md-9 main-content mx-3"
            style={{
              border:"none",
              overflow: "hidden",
              backgroundColor: "#1f1e3e",
              color: "white",
            }}
          >
            {renderActivePage()}
          </div>
>>>>>>> bdfb609cc4ad6053a25c77e546c3884553e7295f
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;