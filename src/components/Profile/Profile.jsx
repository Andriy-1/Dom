import React from "react";
import StyleContentUser from "./DataProfile/dataProfile.module.css";
import CreatePosts from "./Post/CreatePosts/CreatePosts";
import Post from "./Post/ElementPost/Post";
import DataProfile from "./DataProfile/dataProfile";

const Profile = (props) => {
  const posts = props.post.map((e) => (
    <Post massage={e.message} like={e.like} />
  ));
  return (
    <section className={StyleContentUser.content}>
      <DataProfile />
      <CreatePosts
        onPostChange={props.onPostChange}
        addPost={props.addPost}
        newPostText={props.newPostText}
      />
      {posts}
    </section>
  );
};

export default Profile;
