import React from "react";
import { Field, reduxForm } from "redux-form";
import { CreateField, Input } from "../common/FormControls/FormControls";
import {
  maxLengthCreator,
  required,
} from "../common/ValidatorsForm/validators";
import StyleLoginForm from "./LoginForm.module.css";

let maxLength = maxLengthCreator(50);
const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form className={StyleLoginForm.blockForm} onSubmit={handleSubmit}>
      <h3>Login:</h3>
      {CreateField(Field,"form__textarea","Email","email",[required, maxLength],Input,{ autoComplete: "username",})}
      {CreateField(
        Field,
        "form__textarea",
        "Password",
        "password",
        [required],
        Input,
        {
          type: "password",
          autoComplete: "current-password",
        }
      )}
      {CreateField(
        Field,
        StyleLoginForm.checkbox,
        null,
        "rememberMe",
        [],
        "input",
        { type: "checkbox" },
        "Remember me"
      )}
      {error && <div className={StyleLoginForm.formHasError}>{error}</div>}

      <button className={StyleLoginForm.btn}>Login</button>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
export default LoginReduxForm;
