import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../../../common/FormControls/FormControls";
// import { Textarea } from "../../../../common/FormControls/FormControls";
import {
  maxLengthCreator,
  required,
} from "../../../../../common/ValidatorsForm/validators";
let maxLenght = maxLengthCreator(50);
const AddForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="message__form form">
        <Field
          name="newMessageText"
          component={Textarea}
          type="text"
          autoComplete="off"
          className="form__textarea"
          placeholder="go..."
          validate={[required, maxLenght]}
        />
        <button className="form__btn btn">Send</button>
      </div>
    </form>
  );
};
export const AddMessageForm = reduxForm({
  form: "message",
})(AddForm);
