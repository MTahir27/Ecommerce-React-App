import react from "react";
import "./index.css";

// Components
import Navbar from "../../Components/Navbar";
import ContactForm from "../../Components/Contact-Form";
import Product from "../../Components/Product";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Home Page</h1>
        <h3>Products</h3>
        <Product />
      </div>
      <ContactForm />
    </>
  );
}

export default Home;
