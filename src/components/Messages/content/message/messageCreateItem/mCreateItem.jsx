import React from "react";
import "./mCreateItem.css";

const MCreateItem = (props) => {
	const newMessage= React.createRef();

	const onMessageChange = () => {
	  const text = newMessage.current.value;
	  props.onMessageChange(text);
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
        <button onClick={props.addMessage} className="form__btn btn">
          Send
        </button>
      </div>
    </div>
  );
};

export default MCreateItem;
