import react from "react";
import "./index.css";

function Product() {
  return (
    <>
      <div className="productCard">
        <div className="product-img">
          <img
            src="../../assets/images/product/img-1.jpg"
            alt="Product Image"
          />
        </div>
        <div className="product-detail">
          <h4 className="name">Product Name</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut a ab
            ut perspiciatis laborum, optio debitis dolorum eos quos illum facere
            odit nostrum quisquam! Saepe odit inventore deserunt excepturi
            officia.
          </p>
          <h4>
            Price: <span className="price">1200</span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Product;
