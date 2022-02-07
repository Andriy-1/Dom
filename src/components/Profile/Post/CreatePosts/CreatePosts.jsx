import React from "react";
import { Field, reduxForm } from "redux-form";
import StyleCreatePosts from "./CreatePosts.module.css";

const CreatePosts = (props) => {
	const onSubmit = (postData) => {
		props.addPost(postData.addNewPost);
	 };
  return (
    <div className={StyleCreatePosts.content__block}>
      <h3 className={StyleCreatePosts.content__posts}>My posts</h3>
      <PostReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={StyleCreatePosts.content__form}>
        <Field
          component={"textarea"}
          name="addNewPost"
          autoComplete="off"
          placeholder="your news..."
          type="text"
          className={StyleCreatePosts.content__input}
        />
        <button className={StyleCreatePosts.content__btn}>Send</button>
      </div>
    </form>
  );
};
const PostReduxForm = reduxForm({
  form: "post",
})(PostForm);


export default CreatePosts;
