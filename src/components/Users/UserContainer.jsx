import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, requestUsers } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
} from "../../selectors/usersSelector";
import { useEffect } from "react";

const UsersContainer = ({
  requestUsers,
  currentPage,
  pageSize,
  users,
  totalUsersCount,
  follow,
  unfollow,
  followingInProgress,
  isFetching,
}) => {
  useEffect(() => {
    requestUsers(currentPage, pageSize);
  }, []);
  const onPageChanged = (pageNumber) => {
    requestUsers(pageNumber, pageSize);
  };

  return (
    <Users
      isFetching={isFetching}
      totalUsersCount={totalUsersCount}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      users={users}
      follow={follow}
      unfollow={unfollow}
      followingInProgress={followingInProgress}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, { follow, unfollow, requestUsers })
)(UsersContainer);

//!------------------------DELETE
// import React from "react";
// import { connect } from "react-redux";
// import { follow, unfollow, requestUsers } from "../../redux/usersReducer";
// import Users from "./Users";
// import Preloader from "../common/Preloader/Preloader";
// import { compose } from "redux";
// import {
//   getUsers,
//   getCurrentPage,
//   getFollowingInProgress,
//   getIsFetching,
//   getPageSize,
//   getTotalUsersCount,
// } from "../../selectors/usersSelector";

// class UsersContainer extends React.Component {
//   componentDidMount() {
//     this.props.requestUsers(this.props.currentPage, this.props.pageSize);
//   }

//   onPageChanged = (pageNumber) => {
//     this.props.requestUsers(pageNumber, this.props.pageSize);
//   };

//   render() {
//     return (
//       <>
//         {this.props.isFetching ? <Preloader /> : null}
//         <Users
//           totalUsersCount={this.props.totalUsersCount}
//           pageSize={this.props.pageSize}
//           currentPage={this.props.currentPage}
//           onPageChanged={this.onPageChanged}
//           users={this.props.users}
//           follow={this.props.follow}
//           unfollow={this.props.unfollow}
//           followingInProgress={this.props.followingInProgress}
//         />
//       </>
//     );
//   }
// }
// // const mapStateToProps = (state) => {
// //   return {
// //     users: state.UsersPage.users,
// //     pageSize: state.UsersPage.pageSize,
// //     totalUsersCount: state.UsersPage.totalUsersCount,
// //     currentPage: state.UsersPage.currentPage,
// //     isFetching: state.UsersPage.isFetching,
// //     followingInProgress: state.UsersPage.followingInProgress,
// //   };
// // };

// const mapStateToProps = (state) => {
//   return {
//     users: getUsers(state),
//     pageSize: getPageSize(state),
//     totalUsersCount: getTotalUsersCount(state),
//     currentPage: getCurrentPage(state),
//     isFetching: getIsFetching(state),
//     followingInProgress: getFollowingInProgress(state),
//   };
// };

// export default React.memo(compose(
//   connect(mapStateToProps, { follow, unfollow, requestUsers })
// )(UsersContainer));

// // const mapDispatchToProps = (dispatch) => {
// // 	return {
// // 	  follow: (userId) => {
// // 		 dispatch(followAC(userId));
// // 	  },
// // 	  unfollow: (userId) => {
// // 		 dispatch(unfollowAC(userId));
// // 	  },
// // 	  setUsers: (users) => {
// // 		 dispatch(setUsersAC(users));
// // 	  },
// // 	  setCurrentPage: (pageNumber) => {
// // 		 dispatch(setCurrentPageAC(pageNumber));
// // 	  },
// // 	  setUsersTotalCount: (totalCount) => {
// // 		 dispatch(setUsersTotalCountAC(totalCount));
// // 		},
// // 		toggleIsFetching: (isFetching) => {
// // 		  dispatch(toggleIsFetchingAC(isFetching))
// // 	  }
// // 	};
// //};
