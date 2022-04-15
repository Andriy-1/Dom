import React from "react";
import { NavLink } from "react-router-dom";
import "./Users.css";
import avatar from '../../Images/avatar.png'
// const basePhoto = "https://www.drhair.in/wp-content/uploads/2016/09/user-icon-6.png";
const User = ({ user, followingInProgress, follow, unfollow }) => {

  return (
    <div className="blockUser">
      <NavLink to={"/profile/" + user.id}>
        <div className="blockUser__box-img">
          <img
            className="blockUser__img"
            src={
              user.photos.small != null
                ? user.photos.large
                : avatar
            }
            alt="avatar"
          />
        </div>
      </NavLink>
      <div className="blockUser__content content">
        <div className="content__column">
          <div>
            <h4 className="content__fullName">{user.name}</h4>
            <p className="content__status">
              {user.status != null ? "Status: " + user.status : "Status:----- "}
            </p>
          </div>
          <div>
            <h5 className="content__country">Country:-----</h5>
            <h5 className="content__city">City:-----</h5>
          </div>
        </div>
      </div>
      <div className="blockUser__box-btn">
        {user.followed ? (
          <button
            className="btn blockUser__btn"
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            className="btn blockUser__btn"
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
