import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  addPost,
  onPostChange,
  profileUser,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { Redirect, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
    }
    this.props.profileUser(userId);
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to="/login" />;
    } else {
      return (
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          getStatus={this.props.getStatus}
        />
      );
    }
  }
}
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
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    addPost,
    profileUser,
    getStatus,
    updateStatus,
  })
)(ProfileContainer);
// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// const WithRouterProfileContainer = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {
//   addPost,
//   onPostChange,
//   profileUser,
// })(WithRouterProfileContainer);

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 	  addPost: () => {
// 		 dispatch(addUserPostActionCreate());
// 	  },
// 	  onPostChange: (text) => {
// 		 const action = onPostChangeActionCreate(text);
// 		 dispatch(action);
// 	  },
// 	};
//  };
