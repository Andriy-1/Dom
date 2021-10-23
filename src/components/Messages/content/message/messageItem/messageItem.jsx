import React from "react";
import './messageItem.css';
const MessegaItem = (props) => {
	return (
	  <div className="message__user">
		 <div className="message__iconName">
			<img src={props.avatar} className="message__icon" />
			<div className="message__name">{props.name}</div>
		 </div>
		 <div className="message__text">{props.message}</div>
	  </div>
	);
 };

export default MessegaItem;