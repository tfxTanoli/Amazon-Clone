// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { badgeContext } from '../Context/BadgeState';
import { useContext } from 'react';
function Navbar() {

    const {badgeCount,setBadgeCount} = useContext(badgeContext);

    return (
        <div className="nav-bar" style={{ fontFamily: "Arial", display: "flex", alignItems: "center", height: "90px", backgroundColor: "#0f1111", color: "white", justifyContent: "space-between", padding: "0 20px" }}>
                <div className="nav-logo" style={{ height: "60px", width: "100px" }}>
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                        <div className="logo" style={{ height: "50px", width: "100%", backgroundImage: `url("logo.png")`, backgroundSize: "cover" }}>
                        </div>
                    </a>
                </div>

                <div className="nav-loc">
                    <Link to="/delivery" style={{ color: "white", textDecoration: "none" }}>
                        <p style={{ margin: "0" }}>Deliver to</p>
                    </Link>
                    <div className="nav-icon" style={{ display: "flex", alignItems: "center" }}>
                        <i className="fas fa-location-dot" style={{ marginRight: "5px" }}></i>
                        <p style={{ margin: "0" }}>Pakistan</p>
                    </div>
                </div>

                <div className="nav-search" style={{ display: "flex", flex: "1", marginLeft: "10px" }}>
                    <select style={{ height: "35px", width: "50px", color: "black" }}>
                        <option>All</option>
                    </select>
                    <input type='text' placeholder='Search Amazon' style={{ fontSize: "1rem", height: "35px", width: "90%", marginLeft: "5px", padding: "7px 10px 10px 0px" }}></input>
                    <div className='searchbtn' style={{ display: "flex", justifyContent: "center", width: "45px", height: "35px", color: "black", alignItems: "center", marginLeft: "5px" }}>
                        <button style={{ backgroundColor: "#fcad03",height:"2.4rem",padding:"5px"}}><i className="fa-solid fa-magnifying-glass" style={{ fontSize: "1.4rem",cursor:"pointer"}}></i></button>
                    </div>
                </div>

                <div className='nav-acc' style={{ display: "flex", alignItems: "center" }}>
                    <div className='nav-acc-text' style={{ marginRight: "10px", marginTop: "10px" }}>
                        <p>
                            <Link to="/sign-in" style={{ color: "white", textDecoration: "none" }}>
                                <span className='text1'>Hello, sign in</span>
                            </Link>
                            <br></br>
                            <Link to="/sign-in" style={{ color: "white", textDecoration: "none" }}>
                                <span className='text2' style={{ fontSize: "18px", fontWeight: "bold" }}>Accounts & Lists</span>
                            </Link>
                        </p>
                    </div>
                </div>

                <div className='nav-ret-order' style={{ display: "flex", alignItems: "center" }}>
                    <div className='nav-ret-order-text' style={{ marginRight: "10px", marginTop: "10px" }}>
                        <p>
                            <Link to="/returns-orders" style={{ color: "white", textDecoration: "none" }}>
                                <span className='returns'>Returns &</span>
                                <br></br>
                                <span className='orders' style={{ fontSize: "18px", fontWeight: "bold", marginLeft: "4px" }}>Orders</span>
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="nav-cart-icon dropdown-items" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10px" }}>
                    <span style={{ width: "41px", height: "28px" }}>
                        <Link to="/cart" style={{ color: "whitesmoke" }}>
                            <i className="fa-solid fa-cart-shopping" style={{ fontSize: "2rem", fontWeight: "bold" }}></i>
                            
                <span class="position-relative bottom-100 start-100 ms-1  translate-middle badge rounded-pill bg-danger">
        {badgeCount}
        </span>
                        </Link>
                    </span>
                </div>
            </div>
        
    );
}

export default Navbar;
