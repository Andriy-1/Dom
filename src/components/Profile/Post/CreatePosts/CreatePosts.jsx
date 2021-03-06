import React from "react";

import StyleCreatePosts from "./CreatePosts.module.css";
import { PostForm } from "./Form/PostForm";

const CreatePosts = ({addPost}) => {
	
  const onSubmit = (postData) => {
    addPost(postData.addNewPost);
  };
  return (
    <div className={StyleCreatePosts.content__block}>
      <h3 className={StyleCreatePosts.content__posts}>My posts</h3>
      <PostForm onSubmit={onSubmit} />
    </div>
  );
};

export default React.memo(CreatePosts);
