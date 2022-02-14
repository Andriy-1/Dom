import React from "react";

import "./mCreateItem.css";
import { AddMessageForm } from "./Form/messageForm";

const MCreateItem = (props) => {
  const onSubmit = (value) => {
    props.addMessage(value.newMessageText);
  };
  return (
    <div className="message__create">
      <AddMessageForm onSubmit={onSubmit} />
    </div>
  );
};


export default MCreateItem;
