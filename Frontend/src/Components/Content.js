import React, { createContext, useContext, useEffect, useState } from "react";
import "./Content.css";
import { Link } from "react-router-dom";
import { getProduct } from "../Service/api";
// import Navbar from './Navbar';

import { badgeContext } from "../Context/BadgeState";
// import { testContext } from '../Context/ContentState';
import Navbar from "./Navbar";

export const contentContext = createContext();
function Content(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    showProducts();
  }, []);

  const showProducts = async () => {
    const result = await getProduct();
    if (result) {
      console.log("data fetch hogya hai", result);
      setProducts(result.data);
    }
  };
  const { badgeCount, setBadgeCount } = useContext(badgeContext);

  const handleAddToCart = () => {
    // alert(category);
    const updatedBadgeCount = badgeCount + 1;
    setBadgeCount(updatedBadgeCount);
  };

  // const handleCancelCart =()=>{
  //  setBadgeCount(badgeCount-1);
  // }

  useEffect(() => {
    // Update the badge count in local storage
    localStorage.setItem("badgeCount", badgeCount);
  }, [badgeCount]);

  // const {cards,setCards} = useContext(testContext);

  return (
    <div className="content container-fluid " style={{ backgroundColor: "#e2e7e6" }}>
    <Navbar />
    <div className="panel" style={{ backgroundColor: "#273c3c", color: "white", display: "flex", alignItems: "center" }}>
      <div className="panel-opts container">
        <div className="row justify-content-center">
          <div className="col-md-2 col-sm-4 col-6">
            <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
              <p>Admin Panel</p>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6">
            <Link to="/customer-service" style={{ color: "white", textDecoration: "none" }}>
              <p>Customer Service</p>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <p>Home</p>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6">
            <Link to="/gift-cards" style={{ color: "white", textDecoration: "none" }}>
              <p>Gift Cards</p>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6">
            <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
              <p>Products</p>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6">
            <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
              <p>Signup</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
      <div className="row">
      <div className="col-md-12">
        <div className="background-image" style={{ backgroundImage: `url("kitchen.jpg")` }}></div>
      </div>
    </div>
      <div className="content mt-5" style={{ backgroundColor: "#e2e7e6" }}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div key={product.productId} className="col">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top img-fluid"
                alt={product.productTitle}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.productTitle}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <button className="cart-button btn btn-primary" onClick={() => handleAddToCart()}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

      <div className="row mt-5 ">
<div className="col-md-10 offset-md-1">
  <div
    id="carouselExampleCaptions"
    className="carousel slide carousel-fade rounded"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="gaming.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block text-center d-flex align-items-center justify-content-center ">
          <h5>Gaming Accessories</h5>
          <p>Best-Gaming Shop.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="toys.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Brand New Toys</h5>
          <p>New Arrival In Toys.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="fit.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Fit Your Needs</h5>
          <p>Responsible to make you fit.</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
</div>
    </div>
  );
}

export default Content;