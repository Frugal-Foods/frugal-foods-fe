import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../../assetts/headerImage.jpeg";
import { BsCart4 } from "react-icons/bs";
import frugalLogo from "../../assetts/frugal_logo1.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <img className="header-image" src={headerImage} alt="grocery produce" />
      <Link to="/" className="stores">
        Stores
      </Link>
      <div className="logo-container">
        <img className="frugal-logo" src={frugalLogo} alt="frugal foods logo" />
      </div>
      <Link to="/search" className="search">
        Search
      </Link>
      <Link to="/cart">
        <div className="header-openBasket">
          <BsCart4 size={40} />
        </div>
      </Link>
    </header>
  );
};

export default Header;

