import React from "react";
import { connect } from "react-redux";
//import { authSingIn, getAuthUserData } from "../../redux/authReducer";
import { compose } from "redux";
import Login from "./Login";

class LoginContainer extends React.Component {
	componentDidMount() {
   //  this.props.authSingIn();
  }

	render() {
    return <Login {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
	login: state.auth.login,
	email: state.auth.email,
	password: state.auth.password,
});

export default compose(
  connect(mapStateToProps, {
	//   authSingIn,
	//   getAuthUserData,
  })
)(LoginContainer);