import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-media-section">
        <span className="follow-us">Follow us on</span>
        <div className="social-icons">
          <a href="#" className="icon whatsapp"><i className="fab fa-whatsapp"></i></a>
          <a href="#" className="icon facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="icon twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" className="icon instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" className="icon linkedin"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="icon youtube"><i className="fab fa-youtube"></i></a>
          <a href="#" className="icon telegram"><i className="fab fa-telegram"></i></a>
        </div>
      </div>
      <div className="policies-section">
        <a href="#" className="policy-link">Terms and Conditions</a>
        <span className="divider">|</span>
        <a href="#" className="policy-link">Privacy Policy</a>
        <span className="divider">|</span>
        <a href="#" className="policy-link">Refund / Cancellation Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
