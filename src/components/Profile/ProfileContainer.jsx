import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { addPost, onPostChange, profileUser } from "../../redux/profileReducer";
import { Redirect, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.profileUser(this.props.match.params.userId || "21992");
  }

  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
const mapStateToProps = (state) => {
  return {
    post: state.ProfilePage.post,
    newPostText: state.ProfilePage.newPostText,
    profile: state.ProfilePage.profile,
    userId: state.auth.id,
  };
};
export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    addPost,
    onPostChange,
    profileUser,
  }),
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
