import React from 'react';
import Aside from './components/constructor/Aside/Aside';
import Header from './components/constructor/Header/Header';
import Profile from './components/Profile/Profile';
import Content from './components/Messages/MessageContent';
import Music from './components/Music/music';
import News from './components/News/news';
import Settings from './components/Settings/setting';
import './css/App.css';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessageContentContainer from './components/Messages/MessageContentCotainer';

function App(props) {
	return (
		<div className="wrapper">
			<Header />
			<Aside />
			<Route path='/profile' render={() => <ProfileContainer/>} />
			<Route path='/messages' render={() => <MessageContentContainer/>} />
			<Route path='/news' render={() => <News />} />
			<Route path='/music' render={() => <Music />} />
			<Route path='/settings' render={() => <Settings />} />
		</div>

	);
}

export default App;
