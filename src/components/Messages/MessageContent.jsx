import React from "react";
import Message from "./content/message/message";
import Users from "./content/users/user";
import "./content.css";

const MessageContent = (props) => {
  return (
    <div>
      <div className="block__col">
        <Users users={props.users} />
        <Message
          messages={props.messages}
          addMessage={props.addMessage}
				 
        />
      </div>
    </div>
  );
};

export default MessageContent;
