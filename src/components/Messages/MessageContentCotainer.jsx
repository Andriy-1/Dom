// import React from "react";
import { connect } from "react-redux";
import {
  addUserMessageActionCreate,
  onMessageChangeActionCreate,
} from "../../redux/messageReducer";
import MessageContent from "./MessageContent";

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
const MessageContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageContent);

export default MessageContentContainer;
