import React from 'react';
import logo from "../assets/fricanologo1.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="footer-section">
          <h3>Address:</h3>
          <span><p className="footer__icons"><i class="bi bi-geo-alt-fill"></i> Coral Gables,</p></span>
          <p>Miami, Florida</p>
          <span><p className="footer__icons"><i class="bi bi-telephone-forward-fill"></i>  305-000-00-00</p></span>
        </div>
        <div className="footer-section-schedule">
          <h3>Schedule:</h3>
          <span><p className="footer__icons"><i class="bi bi-stopwatch-fill"></i> Monday to Friday: 09-19</p></span>
          <span><p className="footer__icons"><i class="bi bi-stopwatch-fill"></i> Saturday: 10-18</p></span>
          <span><p className="footer__icons"><i class="bi bi-stopwatch-fill"></i> Sunday: Closed</p></span>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          {/* Asegúrate de reemplazar los # con los enlaces reales */}
          <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
          <a href="#" className="social-link"><i className="bi bi-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;