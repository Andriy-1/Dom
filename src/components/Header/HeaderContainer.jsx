import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authData, logout } from "../../redux/authReducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(
  connect(mapStateToProps, {
	  authData,
	  logout,
  })
)(HeaderContainer);
