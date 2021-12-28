import React from 'react';
import Aside from './components/constructor/Aside/Aside';
import Header from './components/constructor/Header/Header';
import Music from './components/Music/music';
import News from './components/News/news';
import Settings from './components/Settings/setting';
import './css/App.css';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessageContentContainer from './components/Messages/MessageContentCotainer';
import UserContainer from './components/Users/UserContainer';


function App() {
	return (
		<div className="wrapper">
			<Header />
			<Aside />
			<Route path='/profile' render={() => <ProfileContainer/>} />
			<Route path='/messages' render={() => <MessageContentContainer/>} />
			<Route path='/news' render={() => <News />} />
			<Route path='/music' render={() => <Music />} />
			<Route path='/users' render={() => <UserContainer />} />
			<Route path='/settings' render={() => <Settings />} />
		</div>

	);
}

export default App;
