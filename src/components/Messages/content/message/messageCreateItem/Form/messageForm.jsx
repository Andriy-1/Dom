import React from "react";
import { Field, reduxForm } from "redux-form";
import { CreateField, Textarea } from "../../../../../common/FormControls/FormControls";
import {
  maxLengthCreator,
  required,
} from "../../../../../common/ValidatorsForm/validators";
let maxLenght = maxLengthCreator(50);
const AddForm = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
		  <div className="message__form form">
			  {CreateField(Field,"form__textarea",'go...',"newMessageText",[required, maxLenght],Textarea)}
        <button className="form__btn btn">Send</button>
      </div>
    </form>
  );
};
export const AddMessageForm = reduxForm({
  form: "message",
})(AddForm);
