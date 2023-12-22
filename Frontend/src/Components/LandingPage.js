import Content from "./Content";
import Footer from "../Footer";

function Landingpage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Content />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
