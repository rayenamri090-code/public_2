import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo/logoWhite.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm py-4 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">

        {/* Logo => goes to Menu Page */}
        <Link to="/menu" className="flex items-center gap-2 hover:opacity-80">
          <img src={logo} className="w-6 h-6" alt="logo" />
          <span className="text-white font-medium text-sm">BlackWave</span>
        </Link>

        {/* Links */}
        <nav className="flex gap-4 text-xs">
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/shipping" className="hover:text-white">Shipping</Link>
          <Link to="/faq" className="hover:text-white">FAQ</Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-500">© 2025 BlackWave</p>
      </div>
    </footer>
  );
};

export default Footer;
