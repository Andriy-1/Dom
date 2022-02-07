import React from "react";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import StyleHeader from "../Header/Header.module.css";
let dataContainer;
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"email"} placeholder="Login" component={"input"} />
      </div>
      <div>
        <Field
         
          name={"password"}
          placeholder="Password"
          component={"input"}
        />
      </div>
      <div>
        <Field name={"rememberMe"} type="checkbox" component={"input"} />
        remember me
      </div>
      <br />
      <button className="btn">Login</button>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const onSubmit = (formData) => {
	console.log(formData);
	// dataContainer.authSingIn(formData.email, formData.password);
	
};

const Login = (props) => {
	dataContainer = props;
  return (
    <div>
      There is a problem &#128565;. Reload the page &#128259;
      <br />
      Login:
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;

{
  /* There is a problem &#128565;. Reload the page &#128259;
<br />
Login or register:
<br />
<br />
<NavLink to={'/login'} className={StyleHeader.loginBtn}>Login</NavLink>
<br />
<br />
<NavLink className={StyleHeader.loginBtn} to={'/login'}>Register </NavLink> */
}
