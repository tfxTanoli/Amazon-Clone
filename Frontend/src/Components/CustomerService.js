import Footer from "../Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function CustomerService() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div
          className="row"
          style={{
            height: "60px",
            backgroundColor: "#007185",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            className="row"
            style={{
              height: "60px",
              backgroundColor: "#007185",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link
                to="/customer-service"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "10px",
                  marginLeft: "20px",
                }}
              >
                Customer Service
              </Link>
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: "25px",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                |
              </p>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "10px",
                  marginLeft: "20px",
                }}
              >
                Home
              </Link>
              <Link
                to="/digital-service-and-support"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "20px",
                }}
              >
                Digital Services And Device Support
              </Link>
            </div>
            {/* ... (unchanged code) ... */}
          </div>

          <div
            className="col-md-12"
            style={{ backgroundColor: "#007185", paddingLeft: "20px" }}
          >
            <h1 style={{ color: "white" }}>
              Welcome To Amazon Customer Service
            </h1>
            <h6 style={{ color: "white", marginTop: "15px" }}>
              What would you like help with today? You can quickly take care of
              most things here, or connect with us when needed.
            </h6>

            {/* Using Bootstrap grid classes */}
            <div className="row" style={{ marginTop: "20px" }}>
              {/* Card 1 */}
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card w-75 mb-3 d-flex align-items-center">
                  <img
                    src="fshub.png"
                    className="card-img-start"
                    alt="Card 1"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">A delivery, return or order</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card w-75 mb-3 d-flex align-items-center">
                  <img
                    src="prime.png"
                    className="card-img-start"
                    alt="Card 2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">Prime Offers</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card w-75 mb-3 d-flex align-items-center">
                  <img
                    src="payment.png"
                    className="card-img-top"
                    alt="Card 2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      Payment, charges or gift cards
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card w-75 mb-3 d-flex align-items-center">
                  <img
                    src="ebook.png"
                    className="card-img-top"
                    alt="Card 2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      eBook, Prime Videos, Music or Games
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card w-75 mb-3 d-flex align-items-center">
                  <img
                    src="accessibility.png"
                    className="card-img-top"
                    alt="Card 2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">Accessibility</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card w-75 mb-3 d-flex align-items-center">
                  <img
                    src="report.png"
                    className="card-img-top"
                    alt="Card 2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">Report Something Suspicious</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card w-75 mb-3 d-flex align-items-center">
                  <img
                    src="membership.png"
                    className="card-img-top"
                    alt="Card 2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      MemberShips, subscriptions or communications
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card w-75 mb-3 d-flex align-items-center">
                  <img
                    src="login.png"
                    className="card-img-top"
                    alt="Card 2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">Login & Password</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="card w-75 mb-3 d-flex align-items-center">
                  <img
                    src="something else.png"
                    className="card-img-top"
                    alt="Card 2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">Something else</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CustomerService;
