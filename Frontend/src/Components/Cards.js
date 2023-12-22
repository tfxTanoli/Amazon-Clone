import React from "react";
import "../Components/Cards.css";

const Cards = () => (
  <div className="container-fluid">
    <div className="row">
      <div id="c1" className="col-md-3 mx-5 mt-5">
        <i className="bi bi-currency-dollar" style={{ fontSize: "48px", color: "yellow" }}></i>
        <span className="earned-label">Earned</span>
        <span className="amount">$154,000</span>
        <span className="growth-rate" style={{fontSize:"1.5rem"}}>+22%</span>
      </div>
      <div id="c2" className="col-md-3 mx-5 mt-5">
        <i className="bi bi-cart" style={{ fontSize: "48px", color:"#f332ed" }}></i>
        <span className="earned-label">Orders</span>
        <span className="amount">$154,000</span>
        <span className="growth-rate" style={{fontSize:"1.5rem"}}>+22%</span>
      </div>
    </div>
  </div>
);

export default Cards;
