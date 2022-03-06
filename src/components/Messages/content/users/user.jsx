import React from "react";
import "./user.css";
import UserItem from "./userItem/userItem";

const Users = ({ users }) => {
  const userElements = users.map((user) => (
    <UserItem key={user.id} id={user.id} name={user.name} />
  ));

  return (
    <div className="user">
      <div className="user__block">
        <ul className="user__items">{userElements}</ul>
      </div>
    </div>
  );
};

export default React.memo(Users);
