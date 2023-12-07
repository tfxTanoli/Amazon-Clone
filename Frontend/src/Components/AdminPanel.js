import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Additems from './Additems';
import DeleteItem from './DeleteItem';
import UpdateItem from './UpdateItem';
import ViewItem from './ViewItem';

function AdminPanel() {
  const [activePage, setActivePage] = useState('add');

  const sidebarStyle = {
    backgroundColor: '#e6e6fa', // Light lavender
    color: '#1f3a93', // Dark navy blue
    padding: '20px',
    height: '100vh',
    borderRadius: '15px', // Rounded corners for softness
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '15px 20px',
    margin: '10px 0',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1f3a93', // Dark navy blue
    textDecoration: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    borderRadius: '5px', // Rounded corners for buttons
  };

  const sidebarHoverStyle = {
    backgroundColor: '#f5e5db', // Lighter lavender on hover for subtle highlight
  };

  const changePage = (page) => {
    setActivePage(page);
  };

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
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderRadius: '15px', // Rounded corners for softness
        }}
      >
        <img src="admin.png" style={{ paddingLeft: '25px' }} alt="Admin Logo" />
        <Link
          to="/Home"
          className="navbar-brand"
          style={{ color: '#fbf0e0' }} // Light peach for text
        >
          Administrator
        </Link>
        <Link
          to="/landingpage"
          className="navbar-brand"
          style={{ color: '#fbf0e0' }}
        >
          LandingPage
        </Link>
        <Link
          to="/products"
          className="navbar-brand"
          style={{ color: '#fbf0e0' }}
        >
          Show All Products
        </Link>
      </nav>
      <div className="row" style={{ height: '100vh', marginTop: '5px' }}>
        <div className="col-md-3">
          <div className="sidebar" style={sidebarStyle}>
            <button
              style={{
                ...buttonStyle,
                ...(activePage === 'add' && sidebarHoverStyle),
              }}
              onClick={() => changePage('add')}
            >
              <i className="fas fa-plus-circle"></i> Add Item
            </button>
            <button
              style={{
                ...buttonStyle,
                ...(activePage === 'delete' && sidebarHoverStyle),
              }}
              onClick={() => changePage('delete')}
            >
              <i className="fas fa-trash-alt"></i> Delete Item
            </button>
            <button
              style={{
                ...buttonStyle,
                ...(activePage === 'update' && sidebarHoverStyle),
              }}
              onClick={() => changePage('update')}
            >
              <i className="fas fa-edit"></i> Update Item
            </button>
            <button
              style={{
                ...buttonStyle,
                ...(activePage === 'view' && sidebarHoverStyle),
              }}
              onClick={() => changePage('view')}
            >
              <i className="fas fa-eye"></i> View Item
            </button>
          </div>
        </div>
        <div className="col-md-9" style={{maxHeight:"70vh",overflowY:"scroll"}}>
          {renderActivePage()} {/* Render the active page */}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
