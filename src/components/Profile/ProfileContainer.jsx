import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  addPost,
  onPostChange,
  setUserProfile,
} from "../../redux/profileReducer";
import * as axios from "axios";
import { withRouter } from "react-router-dom";


class ProfileContainer extends React.Component {
	componentDidMount() {
		const userId = this.props.match.params.userId;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
		
      .then((response) => {
        this.props.setUserProfile(response.data);
		});
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.ProfilePage.post,
    newPostText: state.ProfilePage.newPostText,
    profile: state.ProfilePage.profile,
  };
};

const WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  addPost,
  onPostChange,
  setUserProfile,
})(WithRouterProfileContainer);

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
