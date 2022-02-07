import React from "react";
import { Field, reduxForm } from "redux-form";
import "./mCreateItem.css";

const MCreateItem = (props) => {
  const onSubmit = (value) => {
    props.addMessage(value.newMessageText);
  };
  return (
    <div className="message__create">
      <AddMessageFormRedux onSubmit={onSubmit} />
    </div>
  );
};


const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="message__form form">
        <Field
          name="newMessageText"
          component={"textarea"}
          type="text"
          autoComplete="off"
          className="form__textarea"
          placeholder="go..."
        />
        <button className="form__btn btn">Send</button>
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({
	form: "message",
 })(AddMessageForm);
 
export default MCreateItem;
