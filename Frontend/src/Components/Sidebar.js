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
