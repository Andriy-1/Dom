import React from "react";
import StyleLoginForm from "./LoginForm.module.css";
import LoginReduxForm from "./LoginForm";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={StyleLoginForm.wrapper}>
      <div>
        There is a problem &#128565;. Reload the page &#128259;
        <br />
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
