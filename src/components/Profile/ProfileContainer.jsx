import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  addUserPostActionCreate,
  onPostChangeActionCreate,
} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users`
      )

      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
