import React from "react";
import StyleCreatePosts from "./CreatePosts.module.css";

const CreatePosts = (props) => {
   const newPost = React.createRef();
  const onPostChange = () => {
    const text = newPost.current.value;
    props.onPostChange(text);
  };

  return (
    <div className={StyleCreatePosts.content__block}>
      <h3 className={StyleCreatePosts.content__posts}>My posts</h3>
      <div className={StyleCreatePosts.content__form}>
        <textarea
          value={props.newPostText}
          onChange={onPostChange}
          ref={newPost}
          autoComplete="off"
          placeholder="your news..."
          type="text"
          className={StyleCreatePosts.content__input}
        />
        <button onClick={props.addPost} className={StyleCreatePosts.content__btn}>
          Send
        </button>
      </div>
    </div>
  );
};

export default CreatePosts;
