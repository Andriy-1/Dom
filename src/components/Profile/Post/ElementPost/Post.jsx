import React from "react";
import StylePost from "./Post.module.css";
import avatar from "../../../../Images/avatar.png";
const Post = (props) => {
  return (
    <div className={StylePost.content__commant}>
      <img className={StylePost.img2} src={avatar} alt="avatar" />
      <span className={StylePost.content__text}>{props.massage} |</span>
      <span className={StylePost.content__text}>{props.like} like</span>
    </div>
  );
};

export default Post;
