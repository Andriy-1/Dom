import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../../common/FormControls/FormControls";
import {
  maxLengthCreator,
  required,
} from "../../../../common/ValidatorsForm/validators";
import StyleCreatePosts from ".././CreatePosts.module.css";
let maxLength = maxLengthCreator(10);
const PostFormTextarea = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={StyleCreatePosts.content__form}>
        <Field
          component={Textarea}
          name="addNewPost"
          placeholder="your news..."
          validate={[required, maxLength]}
          className={StyleCreatePosts.content__input}
        />
        <button className={StyleCreatePosts.content__btn}>Send</button>
      </div>
    </form>
  );
};
export const PostForm = reduxForm({
  form: "post",
})(PostFormTextarea);
