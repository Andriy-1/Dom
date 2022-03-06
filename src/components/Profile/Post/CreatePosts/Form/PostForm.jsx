import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  CreateField,
  Textarea,
} from "../../../../common/FormControls/FormControls";
import {
  maxLengthCreator,
  required,
} from "../../../../common/ValidatorsForm/validators";
import StyleCreatePosts from ".././CreatePosts.module.css";
let maxLength = maxLengthCreator(10);
const PostFormTextarea = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={StyleCreatePosts.content__form}>
        {CreateField(
          Field,
          StyleCreatePosts.content__input,
          "your news...",
          "addNewPost",
          [required, maxLength],
          Textarea
        )}
        <button className={StyleCreatePosts.content__btn}>Send</button>
      </div>
    </form>
  );
};
export const PostForm = reduxForm({
  form: "post",
})(PostFormTextarea);
