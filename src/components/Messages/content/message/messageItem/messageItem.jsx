import React from "react";
import "./messageItem.css";
const MessegaItem = ({avatar,name,message}) => {
  return (
    <div className="message__user">
      <div className="message__iconName">
        <img src={avatar} className="message__icon" alt="avatar" />
        <div className="message__name">{name}</div>
      </div>
      <div className="message__text">
       {message}
      </div>
    </div>
  );
};

export default MessegaItem;
