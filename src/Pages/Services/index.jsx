import react from "react";
import "./index.css";

// Components
import Navbar from "../../Components/Navbar";
import Product from "../../Components/Product";

function Services() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Services Pages</h1>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <Product />
          </div>
          <div className="col-md-6 col-lg-4">
            <Product />
          </div>
          <div className="col-md-6 col-lg-4">
            <Product />
          </div>
          <div className="col-md-6 col-lg-4">
            <Product />
          </div>
          <div className="col-md-6 col-lg-4">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
