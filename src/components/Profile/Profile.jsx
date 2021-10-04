import React from "react";
import StyleContentUser from './Profile.module.css';
import Post from "./Post/Posts";
import Comment from "./Post/Comment/Comment";


const Profile = (props) => {
  return (
    <section className={StyleContentUser.content}>
      <div className={StyleContentUser.content__img}></div>
      <div className={StyleContentUser.content__admin}>
        <div className={StyleContentUser.content__user}>
          <img
            className={StyleContentUser.img1}
            src="https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
            alt="avatar"
          />
          <div className={StyleContentUser.content__info}>
            <h2 className={StyleContentUser.content__title}>Andriy .H</h2>
            <p className={StyleContentUser.content__subtitle}>
              Date of Birth: 2 january
              <br />
              City: Minsk
              <br />
              Education: BSU '11
              <br />
              Web Site: https://it-proger.com
            </p>
          </div>
			  </div>
			  <Post/>
			  <Comment massage='Hi,what your name!' like='11'/>
			  <Comment massage='My first post' like='22'/>
			  <Comment  like='25'/>
			  <Comment massage='I have an apple' like='45'/>
      </div>
    </section>
  );
};

export default Profile;
