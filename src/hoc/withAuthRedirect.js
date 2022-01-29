import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// Проблема з перезагрузкою - скидає авторизацію користувача 
const mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth,
})
export const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		
		render() {
			if (!this.props.isAuth) return <Redirect to='/login' />
			return (<Component {...this.props} />)
		}
	}
	return connect(mapStateToPropsForRedirect)(RedirectComponent);
}

