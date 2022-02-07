import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessage, onMessageChange } from "../../redux/messageReducer";
import MessageContent from "./MessageContent";

const mapStateToProps = (state) => {
  return {
    messages: state.MessagePage.messages,
    users: state.MessagePage.users,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { addMessage})
)(MessageContent);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addMessage: () => {
//       dispatch(addUserMessageActionCreate());
//     },
//     onMessageChange: (text) => {
//       const action = onMessageChangeActionCreate(text);
//       dispatch(action);
//     },
//   };
// };
// const AuthRedirectComponent = withAuthRedirect(MessageContent);
// const MessageContentContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);
