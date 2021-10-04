import React from 'react';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Content from './components/Messages/content';
import Music from './components/Music/music';
import News from './components/News/news';
import Settings from './components/Settings/setting';
import './css/App.css';
import { BrowserRouter, Route} from 'react-router-dom';


function App() {
	return (
		<BrowserRouter>
		<div className="wrapper">
			<Header />
			<Aside />
			{/* <Message /> */}
			<Route path='/profile' component={Profile} />
				<Route path='/messages' component={Content} />
				<Route path='/news' component={News}  />
				<Route path='/music' component={Music} />
				<Route path='/settings' component={Settings} />
			{/* <Profile name='Andriy H.'/> */}
		</div>
		</BrowserRouter>
	);
}

export default App;
