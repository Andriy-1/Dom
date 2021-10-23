import React from 'react';
import Aside from './components/constructor/Aside/Aside';
import Header from './components/constructor/Header/Header';
import Profile from './components/Profile/Profile';
import Content from './components/Messages/content';
import Music from './components/Music/music';
import News from './components/News/news';
import Settings from './components/Settings/setting';
import './css/App.css';
import { Route } from 'react-router-dom';

function App(props) {

	return (
		<div className="wrapper">
			<Header />
			<Aside />
			<Route path='/profile' render={() => <Profile
				
				newPostText={props.state.ProfilePage.newPostText}
				post={props.state.ProfilePage.post}
				dispatch={props.dispatch} />} />

			<Route path='/messages' render={() => <Content
				
				dispatch={props.dispatch}
				newMessageText ={props.state.MessagePage.newMessageText}
				users={props.state.MessagePage.users}
				messages={props.state.MessagePage.messages} />} />
			<Route path='/news' render={() => <News />} />
			<Route path='/music' render={() => <Music />} />
			<Route path='/settings' render={() => <Settings />} />
		</div>

	);
}

export default App;
