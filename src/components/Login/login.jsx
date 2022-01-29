import React from "react";
import { NavLink } from "react-router-dom";
import StyleHeader from "../Header/Header.module.css";
const Login = () => {
  return (
	  <div>
		  There is a problem &#128565;. Reload the page &#128259;
		  <br />
		  Login or register:
		  <br />
		  <br />
		  <NavLink to={'/login'} className={StyleHeader.loginBtn}>Login</NavLink>
		  <br />
		  <br />
		  <NavLink className={StyleHeader.loginBtn} to={'/login'}>Register </NavLink>
    </div>
  );
};
export default Login;
