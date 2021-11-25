import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  addUserPostActionCreate,
  onPostChangeActionCreate,
} from "../../redux/profileReducer";

// const ProfileContainer = (props) => {
//   const post = props.store.getState().ProfilePage.post;
//   const state = props.store.getState();

//   const addPost = () => {
//     props.store.dispatch(addUserPostActionCreate());
//   };

//   const onPostChange = (text) => {
//     const action = onPostChangeActionCreate(text);
//     props.store.dispatch(action);
//   };

//   return (
//     <Profile
//       onPostChange={onPostChange}
//       addPost={addPost}
//       newPostText={state.ProfilePage.newPostText}
//       post={post}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    post: state.ProfilePage.post,
    newPostText: state.ProfilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addUserPostActionCreate());
    },
    onPostChange: (text) => {
      const action = onPostChangeActionCreate(text);
      dispatch(action);
    },
  };
};
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
