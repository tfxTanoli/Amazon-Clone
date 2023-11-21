import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Additems from './Additems'; 
import DeleteItem from './DeleteItem';
import UpdateItem from './UpdateItem';
import ViewItem from './ViewItem';

function AdminPanel() {
  const [activePage, setActivePage] = useState('add'); // Use state to track the active page

  const sidebarStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '20px',
    height: '100vh',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '15px 20px',
    margin: '10px 0',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    textDecoration: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const sidebarHoverStyle = {
    backgroundColor: '#2980b9',
  };

  // Function to change the active page
  const changePage = (page) => {
    setActivePage(page);
  };

  // Render the active page component
  const renderActivePage = () => {
    switch (activePage) {
      case 'add':
        return <Additems />;
      case 'delete':
        return <DeleteItem />;
      case 'update':
        return <UpdateItem />;
      case 'view':
        return <ViewItem />;
      default:
        return <Additems />;
    }
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <img src='admin.png' style={{ paddingLeft: "25px" }} />
        <Link to="/Home" className="navbar-brand">Administrator</Link>
        <Link to="/landingpage" className="navbar-brand">LandingPage</Link>
        <Link to="/products" className="navbar-brand">Show All Products</Link>
      </nav>
      <div className="row" style={{ height: "100vh", marginTop: "5px" }}>
        <div className="col-md-3">
          <div className="sidebar" style={sidebarStyle}>
            <button style={{ ...buttonStyle, ...(activePage === 'add' && sidebarHoverStyle) }} onClick={() => changePage('add')}>
              Add Item
            </button>
            <button style={{ ...buttonStyle, ...(activePage === 'delete' && sidebarHoverStyle) }} onClick={() => changePage('delete')}>
              Delete Item
            </button>
            <button style={{ ...buttonStyle, ...(activePage === 'update' && sidebarHoverStyle) }} onClick={() => changePage('update')}>
              Update Item
            </button>
            <button style={{ ...buttonStyle, ...(activePage === 'view' && sidebarHoverStyle) }} onClick={() => changePage('view')}>
              View Item
            </button>
          </div>
        </div>
        <div className="col-md-9">
          {renderActivePage()} {/* Render the active page */}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
