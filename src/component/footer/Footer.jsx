import React from "react";
import "./footer.css"; // Assuming you create a separate CSS file
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <h1 className="titleFooter">Algorithm Visualizer</h1>
      <div className="footerSectionContainer">
        {/* Links Section 1 */}
        <div className="section1">
          <a href="/aboutus">About Us</a>
          <a href="/principles">Principles</a>
          <a href="/careers">Careers</a>
          <a href="/educators">Educators</a>
          <a href="/press">Press</a>
        </div>
        <div className="social-icons">
          <Link to="/AboutUs">Facebook</Link>
          <a href="https://www.linkedin.com">LinkedIn</a>
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.youtube.com">YouTube</a>
        </div>
        <div className="social-icons">
          <small>
            &copy; {new Date().getFullYear()} Algorithm Visualizer. All rights
            reserved.
          </small>
        </div>
      </div>
      {/* <div className="footerSection2Container">
        <div className="section2">
          <a href="/product">Product</a>
          <a href="/courses">Courses</a>
          <a href="/today">Today</a>
          <a href="/pricing">Pricing</a>
          <a href="/testimonials">Testimonials</a>
        </div>
      </div> */}
      
    </footer>
  );
};

export default Footer;
