import React from "react";
import StyleContentUser from "./Profile.module.css";
import CreatePosts from "./Post/CreatePosts/CreatePosts";
import Post from "./Post/ElementPost/Post";
import CreatePostsContainer from "./Post/CreatePosts/CreatePostsContainer";
import Profile from "./Profile";

const ProfileContainer = (props) => {
  const posts = props.post.map((e) => (
    <Post massage={e.message} like={e.like} />
  ));
  return (<Profile/>

  );
};

export default ProfileContainer;
