import React from "react";
import StyleContentUser from "./Profile.module.css";
import CreatePosts from "./Post/CreatePosts";
import Post from "./Post/ElementPost/Post";

const Profile = (props) => {
  const posts = props.post.map((e) => (
    <Post massage={e.message} like={e.like} />
  ));

  return (
    <section className={StyleContentUser.content}>
      <div className={StyleContentUser.content__img}></div>
      <div className={StyleContentUser.content__admin}>
        <div className={StyleContentUser.content__user}>
          <img
            className={StyleContentUser.img1}
            src="https://scontent.fifo3-1.fna.fbcdn.net/v/t1.6435-9/41980759_105690230398190_6468212999654998016_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7eNhNWXf8Y8AX_fOOXX&_nc_ht=scontent.fifo3-1.fna&oh=a19492b75617bfd8a139723fa58893e9&oe=61883A34"
            alt="avatar"
          />
          <div className={StyleContentUser.content__info}>
            <h2 className={StyleContentUser.content__title}>Andriy .H</h2>
            <p className={StyleContentUser.content__subtitle}>
              Date of Birth: 2 january
              <br />
              City: Ivano
              <br />
              Education: BSU '11
              <br />
              Web Site: https://it-proger.com
            </p>
          </div>
        </div>
			  <CreatePosts
				  newPostText={props.newPostText}
				  dispatch={props.dispatch}
        />
        {posts}
      </div>
    </section>
  );
};

export default Profile;
