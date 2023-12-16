import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Additems from './Additems';
import DeleteItem from './DeleteItem';
import UpdateItem from './UpdateItem';
import ViewItem from './ViewItem';
import AdminSidebar from './AdminSidebar';

function AdminPanel() {
  const [activePage, setActivePage] = useState('add');

  const sidebarStyle1 = {
    backgroundColor: '#1f1e3e', // Dark lavender
    color: '#fff', // White text
    padding: '20px',
    height: '100vh',
    borderRadius: '15px',
    position: 'sticky',
    top: '0',
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
    borderRadius: '5px',
  };

  const sidebarHoverStyle = {
    backgroundColor: '#3f51b5', // Indigo on hover
    color: '#fff', // White text on hover
    width: '100%', // Full width on hover
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

  const handleItemClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: 'rgba(37, 32, 64, 255)' }}>
      <AdminNavbar />
      <div className="row" style={{ marginTop: '5px' }}>
        <div className="container-fluid position-sticky">
          <div className="sidebar-menu d-flex position-sticky">
            <div className="col-md-2 sidebar" style={sidebarStyle1}>
              <ul>
                <li onClick={() => handleItemClick('dashboard')} style={{ ...buttonStyle, ...(activePage === 'dashboard' && sidebarHoverStyle) }}>
                  <i className="bi bi-house-fill"></i> Dashboard
                </li>
                <li onClick={() => handleItemClick('catalog')} style={{ ...buttonStyle, ...(activePage === 'catalog' && sidebarHoverStyle) }}>
                  <i className="bi bi-box"></i> Catalog
                </li>
                <li onClick={() => handleItemClick('add')} style={{ ...buttonStyle, ...(activePage === 'add' && sidebarHoverStyle) }}>
                  <i className="bi bi-plus-square"></i> Add Product
                </li>
                <li onClick={() => handleItemClick('view')} style={{ ...buttonStyle, ...(activePage === 'view' && sidebarHoverStyle) }}>
                  <i className="bi bi-eye"></i> View Product
                </li>
                <li onClick={() => handleItemClick('update')} style={{ ...buttonStyle, ...(activePage === 'update' && sidebarHoverStyle) }}>
                  <i className="bi bi-pencil"></i> Update Product
                </li>
                <li onClick={() => handleItemClick('delete')} style={{ ...buttonStyle, ...(activePage === 'delete' && sidebarHoverStyle) }}>
                  <i className="bi bi-trash"></i> Delete Product
                </li>
                <li onClick={() => handleItemClick('notifications')} style={{ ...buttonStyle, ...(activePage === 'notifications' && sidebarHoverStyle) }}>
                  <i className="bi bi-bell-fill"></i> Notifications
                </li>
                <li onClick={() => handleItemClick('profile')} style={{ ...buttonStyle, ...(activePage === 'profile' && sidebarHoverStyle) }}>
                  <i className="bi bi-person-fill"></i> Profile
                </li>
              </ul>
            </div>
            <div className="col-md-8 main-content" style={{ width: '1500px', overflow: 'hidden', backgroundColor: '#423875', color: 'white', overflow: 'scroll' }}>
              {renderActivePage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
