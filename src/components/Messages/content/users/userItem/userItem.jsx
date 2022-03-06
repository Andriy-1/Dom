import React from "react";
import { NavLink } from "react-router-dom";
import "./userItem.css";

const UserItem = ({ id, name }) => {
  console.log("UserItem");
  let path = "/messages/" + id;
  return (
    <li>
      <NavLink className="user__item" to={path}>
        {name}
      </NavLink>
    </li>
  );
};

export default UserItem;
