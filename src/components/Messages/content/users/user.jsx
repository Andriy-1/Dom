import React from "react";
import "./user.css";
import UserItem from "./userItem/userItem";

const Users = (props) => {
  
  const userElements = props.users.map( user => (
    <UserItem id={user.id} name={user.name} />
  ));

  return (
    <div className="user">
      <div className="user__block">
        <ul className="user__items">{userElements}</ul>
      </div>
    </div>
  );
};

export default Users;
