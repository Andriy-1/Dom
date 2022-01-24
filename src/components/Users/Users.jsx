import React from "react";
import { NavLink } from "react-router-dom";
import { userAPI } from "../../api/api";
import "./Users.css";
const Users = (props) => {
  const pages = [];
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  for (let i = 1; i <= pagesCount; i++) {
    if (i <= 5) {
      pages.push(i);
    }
    if (i > 150) {
      pages.push(i);
    }
  }
	const followUser = (id) => {
    userAPI.postUsers(id).then((data) => {
      if (data.resultCode === 0) {
        props.follow(id);
      }
    });
  };
  const unfollowUser = (id) => {
    userAPI.deleteUsers(id).then((data) => {
      if (data.resultCode === 0) {
        props.unfollow(id);
      }
    });
  };
  return (
    <div>
      <h3 className="find-user">Users</h3>
      <div className="listNumber">
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={`${
                props.currentPage === p && "selectedPage"
              } selectedStyle `}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div>
        {props.users.map((u) => (
          <div key={u.id} className="blockUser">
            <NavLink to={"/profile/" + u.id}>
              <div className="blockUser__box-img">
                <img
                  className="blockUser__img"
                  src={
                    u.photos.small != null
                      ? u.photos.large
                      : "https://www.drhair.in/wp-content/uploads/2016/09/user-icon-6.png"
                  }
                  alt="avatar"
                />
              </div>
            </NavLink>
            <div className="blockUser__content content">
              <div className="content__column">
                <div>
                  <h4 className="content__fullName">{u.name}</h4>
                  <p className="content__status">
                    {u.status != null ? u.status : "I am a boss"}
                  </p>
                </div>
                <div>
                  <h5 className="content__country">
                    {"props.locationCountry"}
                  </h5>
                  <h5 className="content__city">{"props.locationCity"}</h5>
                </div>
              </div>
            </div>
            <div className="blockUser__box-btn">
              {u.followed ? (
                <button
                  className="btn blockUser__btn"
                  onClick={() => unfollowUser(u.id)}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className="btn blockUser__btn"
                  onClick={() => followUser(u.id)}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
