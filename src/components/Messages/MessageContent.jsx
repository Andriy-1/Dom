import React from "react";
import Message from "./content/message/message";
import Users from "./content/users/user";
import "./content.css";

const MessageContent = ({ users, messages, addMessage }) => {
  return (
    <div>
      <div className="block__col">
        <Users users={users} />
        <Message messages={messages} addMessage={addMessage} />
      </div>
    </div>
  );
};

export default MessageContent;
