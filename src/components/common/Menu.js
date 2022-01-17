import React from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

const Menu = () => {
  return (
    //  <!-- MENU START-->
    <div className="main-nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light">
          <Link to="/" className="navbar-brand">
            <img src="assets/images/logo.png" alt="logo" />
          </Link>

          <div
            className="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- USER MENU START --> */}
          <UserMenu />
          {/* <!-- USER MENU END --> */}
        </nav>
      </div>
    </div>
    //  <!-- MENU END-->
  );
};

export default Menu;
