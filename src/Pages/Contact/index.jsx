import react from "react";
import "./index.css";

// Components
import Navbar from "../../Components/Navbar";
import ContactForm from "../../Components/Contact-Form";

function Contact() {
  return (
    <>
      <Navbar />
      <h1>Contact Page</h1>
      <ContactForm />
    </>
  );
}

export default Contact;
