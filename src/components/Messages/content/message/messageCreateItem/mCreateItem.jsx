import React from "react";
import { addUserMessageActionCreate, onMessageChangeActionCreate } from "../../../../../redux/messageReducer";
import "./mCreateItem.css";


const MCreateItem = (props) => {
  const newMessage = React.createRef();
console.log(newMessage);

  const addUserMessage = () => {
    props.dispatch(addUserMessageActionCreate());
  };

  const onMessageChange = () => {
    const text = newMessage.current.value;
    props.dispatch(onMessageChangeActionCreate(text));
  };

  return (
    <div className="message__create">
      <div className="message__form form">
        <textarea
          value={props.newMessageText}
          onChange={onMessageChange}
          ref={newMessage}
          type="text"
          autoComplete="off"
          className="form__textarea"
        ></textarea>
        <button onClick={addUserMessage} className="form__btn btn">
          Send
        </button>
      </div>
    </div>
  );
};

export default MCreateItem;
