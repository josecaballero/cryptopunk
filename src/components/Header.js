import React from "react";
import "./Header.css";
import punkLogo from "./../assets/header/cryptopunk-logo.png";
import searchIcon from "./../assets/header/search.png";
import themeSwitch from "./../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="Punk Logo Image"></img>
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} className="searchIcon" alt="Search Icon" />
        </div>
        <input
          className="searchInput"
          type="text"
          placeholder="Collection, item, user ..."
        />
      </div>

      <div className="headerItemsContainer">
        <p className="headerItem">Drops</p>
        <p className="headerItem">Marketplace</p>
        <p className="headerItem">Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img
            src={themeSwitch}
            className="themeSwitch"
            alt="Theme Switch Icon"
          ></img>
        </div>
      </div>

      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
