import { Link } from 'react-router-dom'; // Import the Link component

function Footer() {
  return (
    <div>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 py-5 my-5 border-top" style={{ backgroundColor: "#e2e7e6" }}>
        <div className="col">
          <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          </Link>
          <p className="text-muted" style={{ marginLeft: "20px" }}>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>

        <div className="col">
          <h5>Basic</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/landingpage" className="nav-link p-0 text-muted">Home</Link></li>
            <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-muted">Contact Us</Link></li>
            <li className="nav-item mb-2"><Link to="/FAQs" className="nav-link p-0 text-muted">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="/privacy-policies" className="nav-link p-0 text-muted">Privacy & Policy</Link></li>
            <li className="nav-item mb-2"><Link to="/About" className="nav-link p-0 text-muted">About</Link></li>
          </ul>
        </div>

        <div className="col">
          <h5>Get To Know Us</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/careers" className="nav-link p-0 text-muted">Careers</Link></li>
            <li className="nav-item mb-2"><Link to="/blogs" className="nav-link p-0 text-muted">Blogs</Link></li>
            <li className="nav-item mb-2"><Link to="/amazon-devices" className="nav-link p-0 text-muted">Amazon Devices</Link></li>
          </ul>
        </div>

        <div className="col">
          <h5>Amazon Payment Products</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/amazon-business-cards" className="nav-link p-0 text-muted">Amazon Business Card</Link></li>
            <li className="nav-item mb-2"><Link to="/shop-with-points" className="nav-link p-0 text-muted">Shop With Points</Link></li>
            <li className="nav-item mb-2"><Link to="/reload-balance" className="nav-link p-0 text-muted">Reload Your Balance</Link></li>
            <li className="nav-item mb-2"><Link to="/amazon-currency-converter" className="nav-link p-0 text-muted">Amazon Currency Converter</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
