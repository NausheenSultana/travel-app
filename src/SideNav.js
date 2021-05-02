import React from "react";
import "./styles.scss";

const SideNav = ({ isMobile }) => {
  if (!isMobile) {
    return (
      <div className="sidenav">
        <a href="#section">
          <img src={"images/logo.svg"} alt="logo" />
        </a>
        <a href="#section">
          <img src={"images/home.svg"} alt="Navigate to home" />
        </a>
        <a href="#section">
          <img src={"images/briefcase.svg"} alt="Navigate to cart" />
        </a>
        <a href="#section">
          <img src={"images/compass.svg"} alt="Navigate to location" />
        </a>
        <a href="#section">
          <img src={"images/bell.svg"} alt="Navigate to notifications" />
        </a>
        <a href="#section">
          <img src={"images/gear.svg"} alt="Navigate to settings" />
        </a>

        <a href="#section">
          <img src={"images/log-out.svg"} alt="logout" />
        </a>
      </div>
    );
  } else {
    return (
      <div className="bottomNav">
        <a href="#section">
          <img src={"images/bell.svg"} alt="Navigate to notifications" />
        </a>
        <a href="#section">
          <img src={"images/briefcase.svg"} alt="Navigate to cart" />
        </a>

        <a href="#section">
          <img src={"images/home.svg"} alt="Navigate to home" />
        </a>

        <a href="#section">
          <img src={"images/compass.svg"} alt="Navigate to location" />
        </a>

        <a href="#section">
          <img src={"images/log-out.svg"} alt="logout" />
        </a>
      </div>
    );
  }
};

export default SideNav;
