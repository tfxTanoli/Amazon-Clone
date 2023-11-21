import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from './Navbar';



function CustomerService() {
    return (
        <div>
            <Navbar/>
        <div className="container-fluid" >
           
            <div className="row" style={{ height: "60px", backgroundColor: "#007185", display: "flex", alignItems: "center",flexWrap:"wrap" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link to="/customer-service" style={{ textDecoration: "none", color: "white", marginRight: "10px", marginLeft: "20px" }}>
                        Customer Service
                    </Link>
                    <p style={{ fontWeight: "bolder", fontSize: "25px", color: "white", marginTop: "10px" }}>|</p>
                    <Link to="/landingpage" style={{ textDecoration: "none", color: "white", marginRight: "10px", marginLeft: "20px" }}>
                        Home
                    </Link>
                    <Link to="/digital-service-and-support" style={{ textDecoration: "none", color: "white", marginLeft: "20px" }}>
                        Digital Services And Device Support
                    </Link>
                </div>
                <div className='col-md-12' style={{ height: "85vh", backgroundColor: "#007185", paddingLeft: "20px" }}>
                    <h1 style={{ color: "white" }}>Welcome To Amazon Customer Service</h1>
                    <h5 style={{ color: "white", marginTop: "15px" }}>What would you like help with today? You can quickly take care of most things here, or connect with us when needed.</h5>
                    
                    {/* Repeat this div structure five times */}
                    <div className="row" style={{display:"flex",flexwrap:"wrap",marginTop:"20px"}}>
                        <div className="col-md-1" style={{ backgroundColor: "white", width: "80px", height: "110px", marginTop: "2rem", marginLeft: "20px" }}>
                            <img src="fshub.png" style={{ width: "70px", height: "70px", paddingTop: "10px", marginTop: "20px" }} alt="Logo" />
                        </div>
                        <div className="col-md-11" style={{ backgroundColor: "white", width: "425px", height: "110px", marginTop: "2rem" }}>
                            {/* Content for the second div */}
                            <p style={{ marginTop: "40px", fontWeight: "bold", marginRight: "40px", fontSize: "18px", borderRadius: "50px" }}>
                                A delivery, return, or order
                            </p>
                        </div>
                        <div className="col-md-1" style={{ backgroundColor: "white", width: "80px", height: "110px", marginTop: "2rem", marginLeft: "20px" }}>
                            <img src="prime.png" style={{ width: "70px", height: "70px", paddingTop: "10px", marginTop: "20px" }} alt="Logo" />
                        </div>
                        <div className="col-md-11" style={{ backgroundColor: "white", width: "425px", height: "110px", marginTop: "2rem" }}>
                            <p style={{ marginTop: "40px", fontWeight: "bold", marginRight: "40px", fontSize: "18px", borderRadius: "50px" }}>
                                Prime
                            </p>
                        </div>
                        <div className="col-md-1" style={{ backgroundColor: "white", width: "80px", height: "110px", marginTop: "2rem", marginLeft: "20px" }}>
                            <img src="payment.png" style={{ width: "70px", height: "70px", paddingTop: "10px", marginTop: "20px" }} alt="Logo" />
                        </div>
                        <div className="col-md-11" style={{ backgroundColor: "white", width: "425px", height: "110px", marginTop: "2rem" }}>
                            <p style={{ marginTop: "40px", fontWeight: "bold", marginRight: "40px", fontSize: "18px", borderRadius: "50px" }}>
                                Payment,charges or gift cards
                            </p>
                        </div>
                        <div className="col-md-1" style={{ backgroundColor: "white", width: "80px", height: "110px", marginTop: "2rem", marginLeft: "20px" }}>
                            <img src="membership.png" style={{ width: "70px", height: "70px", paddingTop: "10px", marginTop: "20px" }} alt="Logo" />
                        </div>
                        <div className="col-md-11" style={{ backgroundColor: "white", width: "425px", height: "110px", marginTop: "2rem" }}>
                            <p style={{ marginTop: "40px", fontWeight: "bold", marginRight: "40px", fontSize: "18px", borderRadius: "50px" }}>
                                MemberShips, subscriptions or communications
                            </p>
                        </div>
                        <div className="col-md-1" style={{ backgroundColor: "white", width: "80px", height: "110px", marginTop: "2rem", marginLeft: "20px" }}>
                            <img src="ebook.png" style={{ width: "70px", height: "70px", paddingTop: "10px", marginTop: "20px" }} alt="Logo" />
                        </div>
                        <div className="col-md-11" style={{ backgroundColor: "white", width: "425px", height: "110px", marginTop: "2rem" }}>
                            <p style={{ marginTop: "40px", fontWeight: "bold", marginRight: "40px", fontSize: "18px", borderRadius: "50px" }}>
                               eBook, Prime Videos, Music Or Games
                            </p>
                        </div>
                        <div className="col-md-1" style={{ backgroundColor: "white", width: "80px", height: "110px", marginTop: "2rem", marginLeft: "20px" }}>
                            <img src="login.png" style={{ width: "70px", height: "70px", paddingTop: "10px", marginTop: "20px" }} alt="Logo" />
                        </div>
                        <div className="col-md-11" style={{ backgroundColor: "white", width: "425px", height: "110px", marginTop: "2rem" }}>
                            <p style={{ marginTop: "40px", fontWeight: "bold", marginRight: "40px", fontSize: "18px", borderRadius: "50px" }}>
                               Login & Password
                            </p>
                        </div>
                        <div className="col-md-1" style={{ backgroundColor: "white", width: "80px", height: "110px", marginTop: "2rem", marginLeft: "20px" }}>
                            <img src="something else.png" style={{ width: "70px", height: "70px", paddingTop: "10px", marginTop: "20px" }} alt="Logo" />
                        </div>
                        <div className="col-md-11" style={{ backgroundColor: "white", width: "425px", height: "110px", marginTop: "2rem" }}>
                            <p style={{ marginTop: "40px", fontWeight: "bold", marginRight: "40px", fontSize: "18px", borderRadius: "50px" }}>
                                Something Else
                            </p>
                        </div>
                        <div className="col-md-1" style={{ backgroundColor: "white", width: "80px", height: "110px", marginTop: "2rem", marginLeft: "20px" }}>
                            <img src="accessibility.png" style={{ width: "70px", height: "70px", paddingTop: "10px", marginTop: "20px" }} alt="Logo" />
                        </div>
                        <div className="col-md-11" style={{ backgroundColor: "white", width: "425px", height: "110px", marginTop: "2rem" }}>
                            <p style={{ marginTop: "40px", fontWeight: "bold", marginRight: "40px", fontSize: "18px", borderRadius: "50px" }}>
                               Aceessibility
                            </p>
                        </div>
                        <div className="col-md-1" style={{ backgroundColor: "white", width: "80px", height: "110px", marginTop: "2rem", marginLeft: "20px" }}>
                            <img src="report.png" style={{ width: "70px", height: "70px", paddingTop: "10px", marginTop: "20px" }} alt="Logo" />
                        </div>
                        <div className="col-md-11" style={{ backgroundColor: "white", width: "425px", height: "110px", marginTop: "2rem" }}>
                            <p style={{ marginTop: "40px", fontWeight: "bold", marginRight: "40px", fontSize: "18px", borderRadius: "50px" }}>
                                Report Something Suspicious
                            </p>
                        </div>
                    </div>
                    
                    
                    </div>
                    <Footer/>
                    
                </div>
            </div>
            </div>
       
    );
}

export default CustomerService;
