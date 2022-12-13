import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../../assetts/headerImage.jpeg";
import { BsCart4 } from "react-icons/bs";
import frugalLogo from "../../assetts/frugal_logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <img className="header-image" src={headerImage} alt="grocery produce" />
      <Link to="/">
        <button className="list">Find Stores</button>
      </Link>
      <div className="logo-container">
        <img className="frugal-logo" src={frugalLogo} alt="frugal foods logo" />
      </div>
      <Link to="/search" className="search">
        Search
      </Link>
      <Link to="/cart">
        <div className="header-openBasket">
          <BsCart4 size={25} />
          <span className="header-basketCount">5</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
