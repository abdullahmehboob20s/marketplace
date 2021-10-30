import React from "react";
import "./Navbar.css";
import monopetLogo from "assets/images/moonpet logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-black">
      <Link to="/">
        <img className="navbar-logo" src={monopetLogo} alt="" />
      </Link>
      <Link className="text-white weight-7 fs-16px uppercase">
        Connect Wallet
      </Link>
    </div>
  );
}

export default Navbar;
