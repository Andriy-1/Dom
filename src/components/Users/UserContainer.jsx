import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
    followingInProgress: state.UsersPage.followingInProgress,
  };
};

export default compose(
	connect(mapStateToProps, { follow, unfollow, getUsers }),
 )(UsersContainer);
 
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 	  follow: (userId) => {
// 		 dispatch(followAC(userId));
// 	  },
// 	  unfollow: (userId) => {
// 		 dispatch(unfollowAC(userId));
// 	  },
// 	  setUsers: (users) => {
// 		 dispatch(setUsersAC(users));
// 	  },
// 	  setCurrentPage: (pageNumber) => {
// 		 dispatch(setCurrentPageAC(pageNumber));
// 	  },
// 	  setUsersTotalCount: (totalCount) => {
// 		 dispatch(setUsersTotalCountAC(totalCount));
// 		},
// 		toggleIsFetching: (isFetching) => {
// 		  dispatch(toggleIsFetchingAC(isFetching))
// 	  }
// 	};
//};
