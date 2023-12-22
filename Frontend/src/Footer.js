import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-4 border-top mt-4" style={{ backgroundColor: "#e2e7e6" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
            </Link>
            <p className="text-muted">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
          </div>

          <div className="col-md-3">
            <h5 className='mx-3'>Basic</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><Link to="/landingpage" className="nav-link text-muted">Home</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link text-muted">Contact Us</Link></li>
              <li className="nav-item"><Link to="/FAQs" className="nav-link text-muted">FAQs</Link></li>
              <li className="nav-item"><Link to="/privacy-policies" className="nav-link text-muted">Privacy & Policy</Link></li>
              <li className="nav-item"><Link to="/About" className="nav-link text-muted">About</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Get To Know Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><Link to="/careers" className="nav-link text-muted">Careers</Link></li>
              <li className="nav-item"><Link to="/blogs" className="nav-link text-muted">Blogs</Link></li>
              <li className="nav-item"><Link to="/amazon-devices" className="nav-link text-muted">Amazon Devices</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Amazon Payment Products</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><Link to="/amazon-business-cards" className="nav-link text-muted">Amazon Business Card</Link></li>
              <li className="nav-item"><Link to="/shop-with-points" className="nav-link text-muted">Shop With Points</Link></li>
              <li className="nav-item"><Link to="/reload-balance" className="nav-link text-muted">Reload Your Balance</Link></li>
              <li className="nav-item"><Link to="/amazon-currency-converter" className="nav-link text-muted">Amazon Currency Converter</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
