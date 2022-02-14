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
				  <div className={StyleHeader.login}>
					 {props.login}
					  <div className={StyleHeader.block}>
             <button onClick={props.logout} className={StyleHeader.loginBtn}>
				Log out
            </button>		  
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
