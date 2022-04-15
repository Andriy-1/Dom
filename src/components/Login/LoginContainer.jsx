import React from "react";
import { connect } from "react-redux";
//import { authSingIn, getAuthUserData } from "../../redux/authReducer";
import { compose } from "redux";
import Login from "./Login";
import { login, logout } from "../../redux/authReducer";
class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
	login: state.auth.login,
	captchaUrl: state.auth.captchaUrl,
});

export default compose(
  connect(mapStateToProps, {
    login,
    logout,
  })
)(LoginContainer);
