import React from 'react';
import { NavLink } from "react-router-dom";
import "./userItem.css";

const UserItem = (props) => {
	let path = "/messages/" + props.id;
	return (
	  <li>
		 <NavLink className="user__item" to={path}>
			{props.name}
		 </NavLink>
	  </li>
	);
};
 
export default UserItem;