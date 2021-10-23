import React from "react";
import "./message.css";
import MCreateItem from "./messageCreateItem/mCreateItem";
import MessegaItem from "./messageItem/messageItem";
const Message = (props) => {
  const messageElements = props.messages.map((message) => (
    <MessegaItem
      name={message.name}
      message={message.message}
      avatar={message.avatar}
    />
  ));

  return (
    <div className="message">
      <div className="message__status">{messageElements}</div>
      <div>
			  <MCreateItem
				  dispatch={props.dispatch}
				 newMessageText={props.newMessageText} 
				  messages={props.messages} />
      </div>
    </div>
  );
};

export default Message;
