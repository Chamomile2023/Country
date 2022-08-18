import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ dark, setDark }) => {
  return (
    <div className={`header ${dark ? "header_white" : "header_black"}`}>
      <div className="container">
        <div className="header__hero">
          <Link className="Link" to="/">
            <div
              className={`header__logo ${
                dark ? "header_white" : "header_black"
              }`}
            >
              Where in the world?
            </div>
          </Link>
          <div className={`header__buttons `} onClick={(e) => setDark(!dark)}>
            <i className="fa-solid fa-moon header--moon"></i>
            <h4 className="header--mode">Dark Mode</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
