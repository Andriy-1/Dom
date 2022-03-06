import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/logo/home.svg";
import StyleHeader from "./Header.module.css";

const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={StyleHeader.header}>
      <div className={StyleHeader.blockLogo}>
        <NavLink to="/">
          <img src={Logo} className={StyleHeader.img} alt="logo" />
          <span className={StyleHeader.logo}>Dom</span>
        </NavLink>
      </div>
      <div className={StyleHeader.login}>
        {isAuth ? (
          <div className={StyleHeader.login}>
            {login}
            <div className={StyleHeader.block}>
              <NavLink to={"/login"} onClick={logout} className={StyleHeader.loginBtn}>
                Log out
              </NavLink>
            </div>
          </div>
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
