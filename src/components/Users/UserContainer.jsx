import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
} from "../../redux/usersReducer";

import Users from "./Users";

import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    userAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    userAPI
      .getUsers(this.props.pageNumber, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
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
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
})(UsersContainer);

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
