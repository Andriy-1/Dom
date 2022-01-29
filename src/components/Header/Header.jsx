import React from "react";
import { NavLink } from "react-router-dom";

import StyleHeader from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={StyleHeader.header}>
      <div className={StyleHeader.blockLogo}>
        <a href="#">
          <img src="./home.svg" className={StyleHeader.img} alt="logo" />
          <span className={StyleHeader.logo}>Dom</span>
        </a>
      </div>
      <div className={StyleHeader.login}>
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink to={"/login"} className={StyleHeader.loginBtn}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
