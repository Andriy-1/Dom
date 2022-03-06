import React from "react";
import "./mCreateItem.css";
import { AddMessageForm } from "./Form/messageForm";

const MCreateItem = ({addMessage}) => {
  const onSubmit = (value) => {
    addMessage(value.newMessageText);
	};
	
  return (
    <div className="message__create">
      <AddMessageForm onSubmit={onSubmit} />
    </div>
  );
};


export default MCreateItem;
