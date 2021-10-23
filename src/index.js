import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';
 
let renderEntreTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					dispatch={store.dispatch.bind(store)}
					state={state}/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

renderEntreTree(store.getState());
store.subscribe(renderEntreTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
