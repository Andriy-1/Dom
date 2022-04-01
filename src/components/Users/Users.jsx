import React from "react";
import Preloader from "../common/Preloader/Preloader";
import PageUsers from "./PageUsers/PageUsers";
import User from "./User";
import "./Users.css";

const Users = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
  users,
  followingInProgress,
  follow,
  unfollow,
  isFetching,
}) => {
  return (
    <div>
      <h3 className="find-user">Users</h3>
      <PageUsers
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />
		  {isFetching ? (
        <Preloader />
      ) : (
        users.map((u) => (
          <User
            user={u}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
            key={u.id}
          />
        ))
      )}
    </div>
  );
};

export default Users;
