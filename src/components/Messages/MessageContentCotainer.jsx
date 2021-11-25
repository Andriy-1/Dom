import React from "react";
import { connect } from "react-redux";
import {
  addUserMessageActionCreate,
  onMessageChangeActionCreate,
} from "../../redux/messageReducer";
import MessageContent from "./MessageContent";

// const MessageContentContainer = (props) => {
//   const newMessageText = props.store.getState().MessagePage.newMessageText;
//   const messages = props.store.getState().MessagePage.messages;
//   const users = props.store.getState().MessagePage.users;

//   const addMessage = () => {
//     props.store.dispatch(addUserMessageActionCreate());
//   };

//   const onMessageChange = (text) => {
//     const action = onMessageChangeActionCreate(text);
//     props.store.dispatch(action);
//   };
//   return (
//     <MessageContent
//       addMessage={addMessage}
//       onMessageChange={onMessageChange}
//       messages={messages}
// 		  users={users}
// 		  newMessageText = {newMessageText}
//     />
//   );
// };

const mapStateToProps = (state) => {
	return {
		newMessageText: state.MessagePage.newMessageText,
		messages: state.MessagePage.messages,
		users: state.MessagePage.users,
  };
};
const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(addUserMessageActionCreate());
		},
		onMessageChange: (text) => {
			const action = onMessageChangeActionCreate(text);
			dispatch(action);
		},
  };
};
const MessageContentContainer = connect(mapStateToProps, mapDispatchToProps)(MessageContent);

export default MessageContentContainer;
