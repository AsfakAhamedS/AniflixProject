<<<<<<< HEAD
import React from "react";
import { Link } from "react-router";
import './footstyle.css';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer(){
  return (
    <footer className="footer" >
      <div className="footer-container">
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/popular">Popular</Link></li>
            <li><Link to="/home">Categories</Link></li>
            <li><Link to="/home">Blog</Link></li>
            <li><Link to="/home">Contact</Link></li> 
          </ul>  
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Aniflix. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
=======
import React from "react";
import { Link } from "react-router";
import './footstyle.css';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer(){
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/popular">Popular</Link></li>
            <li><Link to="/home">Categories</Link></li>
            <li><Link to="/home">Blog</Link></li>
            <li><Link to="/home">Contact</Link></li> 
          </ul>  
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Aniflix. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> 0aa03492bee25fadddf8443fcd674a7eba89e74b
