// import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  addUserPostActionCreate,
  onPostChangeActionCreate,
} from "../../redux/profileReducer";

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
