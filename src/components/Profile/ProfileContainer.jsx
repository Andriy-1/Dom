import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  addPost,
  profileUser,
  getStatus,
  updateStatus,
  savePhoto,
} from "../../redux/profileReducer";
import { Redirect, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { useEffect } from "react";

const ProfileContainer = React.memo(
  ({ match, profileUser, isAuth, ...props }) => {
    let userId = match.params.userId || props.autorizedUserId;
    useEffect(() => {
      profileUser(userId);
    }, [userId]);

    if (!isAuth) {
      return <Redirect to="/login" />;
    } else {
      return <Profile {...props} />;
    }
  }
);

const mapStateToProps = (state) => {
  return {
    post: state.ProfilePage.post,
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};
export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, {
    addPost,
    profileUser,
    getStatus,
    updateStatus,
    savePhoto,
  })
)(ProfileContainer);
