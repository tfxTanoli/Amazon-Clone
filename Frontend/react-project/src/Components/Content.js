    import React, {   createContext , useContext, useEffect } from 'react';
    import './Content.css';
    import { Link } from 'react-router-dom';
    // import Navbar from './Navbar';

    import { badgeContext } from '../Context/BadgeState';
  import { testContext } from '../Context/ContentState';
import Navbar from './Navbar';
    
    export const contentContext = createContext();
    function Content(props) {
      
      const {badgeCount,setBadgeCount} = useContext(badgeContext);
      
      const handleAddToCart = () =>{
        
        <contentContext.Provider value={{cards}}>
          {props.children}
        </contentContext.Provider>
      // alert(category);
        const updatedBadgeCount = (badgeCount+1);
        setBadgeCount(updatedBadgeCount);
      }
      
      // const handleCancelCart =()=>{
      //  setBadgeCount(badgeCount-1);
      // }

      useEffect(() => {
        // Update the badge count in local storage
        localStorage.setItem('badgeCount', badgeCount);
      }, [badgeCount]);

    const {cards,setCards} = useContext(testContext);



      return (
        <div className='content' style={{ backgroundColor: "#e2e7e6" }}>
          <Navbar/>
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
          </div>
        </div>
        <div className="background-image" style={{ backgroundImage: `url("kitchen.jpg")`, backgroundSize: "cover", height: "500px" }}>
        </div>
        <div className='content' style={{ backgroundColor: "#e2e7e6" }}>
        {/* ... (rest of your code) */}
        <div className='product-section' style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
          {cards.map((card) => (
            <div key={card.id} className={`card${card.id}`} style={{ marginTop: "10px", height: "400px", width: "23%", backgroundColor: "white" }}>
              <div className='card-content' style={{ padding: "20px 0px 15px", marginLeft: "1rem", marginRight: "1rem" }}>
                <h2>{card.title}</h2>
                <div className={`card${card.id}-image`}>
                  <img src={card.image} alt={card.title} style={{ height: "250px", width: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ marginTop:"30px" }}>Price: {card.price}</p>
          <button className='cart-button btn btn-outline-dark' onClick={() => handleAddToCart()} style={{ width: "40%", padding: "10px", borderColor: "lightblue", backgroundColor: "lightblue", color: "white",marginRight:"20px" }}>
            Add to Cart
          </button>
        </div>
                {/* <button style={{ width: "40%", padding: "10px", marginLeft: "20px", marginTop: "20px", borderColor: "lightblue", backgroundColor: "lightgrey" }} onClick={handleCancelCart}>Cancel Cart</button> */}
              </div>
            </div>
          ))}
         
        </div>
        </div>
          
          <div className='container mt-5' style={{ height: "100vh", paddingBottom: "20px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NeTYaTU5ocA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className='row'>
            <div className="col-sm-10" style={{ marginLeft: "120px", paddingBottom: "10px", paddingRight: "5px", paddingLeft: "4px" }}>
              <div id="carouselExampleCaptions" className="carousel slide carousel-fade rounded h-10" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
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