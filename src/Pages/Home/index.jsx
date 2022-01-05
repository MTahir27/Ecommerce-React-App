import react from "react";
import "./index.css";

// Components
import Navbar from "../../Components/Navbar";
import ContactForm from "../../Components/Contact-Form";

function Home() {
  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
      <ContactForm />
    </>
  );
}

export default Home;
