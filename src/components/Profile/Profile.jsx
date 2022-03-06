import React from "react";
import StyleContentUser from "./DataProfile/dataProfile.module.css";
import CreatePosts from "./Post/CreatePosts/CreatePosts";
import Post from "./Post/ElementPost/Post";
import DataProfile from "./DataProfile/dataProfile";

const Profile = ({getStatus,post,profile,status,updateStatus,addPost}) => {
  const posts = post.map((e) => (
    <Post massage={e.message} like={e.like} key={e.id} />
  ));

  return (
    <section className={StyleContentUser.content}>
		  <DataProfile
			  getStatus ={getStatus}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <CreatePosts
        addPost={addPost}
      />
      {posts}
    </section>
  );
};

export default Profile;
