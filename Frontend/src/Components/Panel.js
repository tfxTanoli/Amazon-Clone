  import React from 'react';
  import { Link } from 'react-router-dom';
  function Panel() {
    return (
      <div className="panel" style={{ backgroundColor: "#273c3c", color: "white", display: "flex", alignItems: "center" }}>

        <div className="panel-opts" style={{ color: "white", display: "flex", alignItems: "center", width: "80%" }}>
          <Link to ="/registration" style={{color:"white",textDecoration:"none"}}>
          <p style={{ margin: "0 20px", marginBottom: "32px",marginTop:"10px" }}>How To Register</p>
          </Link>
          <Link to = "/customer-service"style={{color:"white",textDecoration:"none"}}>
          <p style={{ margin: "0 20px", marginBottom: "32px",marginTop:"10px" }}>Customer Service</p>
          </Link>
          <Link to = "/" style={{color:"white",textDecoration:"none"}}>
          <p style={{ margin: "0 20px", marginBottom: "32px",marginTop:"10px" }}>Home</p>
          </Link>
          <Link to = "/gift-cards" style={{color:"white",textDecoration:"none"}}>
          <p style={{ margin: "0 20px", marginBottom: "32px",marginTop:"10px" }}>Gift Cards</p>
          </Link>

          <Link to = "/products" style={{color:"white",textDecoration:"none"}}>
          <p style={{ margin: "0 20px", marginBottom: "32px",marginTop:"10px" }}>Products</p>
          </Link>

          <Link to = "/signup" style={{textDecoration:"none",color:"white"}}>
          <p>Signup</p>
           </Link>
        </div>
      </div>
    );
  }

  export default Panel;
