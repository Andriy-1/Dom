import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import {
  maxLengthCreator,
  required,
} from "../common/ValidatorsForm/validators";
import StyleLoginForm from "./LoginForm.module.css";

let maxLength = maxLengthCreator(50);
const LoginForm = (props) => {
  return (
    <form className={StyleLoginForm.blockForm} onSubmit={props.handleSubmit}>
      <h3>Login:</h3>
      <div className={StyleLoginForm.box}>
        <Field
          className="form__textarea"
          name={"email"}
          placeholder="Email"
          component={Input}
          validate={[required, maxLength]}
        />
      </div>
      <div className={StyleLoginForm.box}>
        <Field
          className="form__textarea"
          type="password"
          name={"password"}
          placeholder="Password"
          component={Input}
          validate={[required]}
        />
      </div>
      <div className={StyleLoginForm.box}>
        <Field
          className={StyleLoginForm.checkbox}
          name={"rememberMe"}
          type="checkbox"
          component={"input"}
        />
        Remember me
      </div>
      {props.error && (
        <div className={StyleLoginForm.formHasError}>{props.error}</div>
      )}

      <button className={StyleLoginForm.btn}>Login</button>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
export default LoginReduxForm;
