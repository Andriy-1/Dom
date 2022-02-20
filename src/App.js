import React from 'react';
import Aside from './components/Aside/Aside';
import Music from './components/Music/music';
import News from './components/News/news';
import Settings from './components/Settings/setting';
import './css/App.css';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessageContentContainer from './components/Messages/MessageContentCotainer';
import UserContainer from './components/Users/UserContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initializeApp } from "./redux/appReducer";
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { initialize } from 'redux-form';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}


	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className="wrapper" >
				<Route path='/login' render={() => <LoginContainer />} />
				<HeaderContainer />
				<Aside />
				<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
				<Route path='/messages' render={() => <MessageContentContainer />} />
				<Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/users' render={() => <UserContainer />} />
				<Route path='/settings' render={() => <Settings />} />
			</div>

		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});
export default
	compose(
		withRouter,
		connect(mapStateToProps, { initializeApp }))(App);
