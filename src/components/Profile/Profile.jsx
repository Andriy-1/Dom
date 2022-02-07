import React from "react";
import StyleContentUser from "./DataProfile/dataProfile.module.css";
import CreatePosts from "./Post/CreatePosts/CreatePosts";
import Post from "./Post/ElementPost/Post";
import DataProfile from "./DataProfile/dataProfile";

const Profile = (props) => {
  const posts = props.post.map((e) => (
    <Post massage={e.message} like={e.like} key={e.id} />
  ));

  return (
    <section className={StyleContentUser.content}>
		  <DataProfile
			  getStatus ={props.getStatus}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <CreatePosts
        addPost={props.addPost}
      />
      {posts}
    </section>
  );
};

export default Profile;
