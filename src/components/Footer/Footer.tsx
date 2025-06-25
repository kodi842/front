import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} BMW + ChatGPT</p>
  </footer>
);

export default Footer;