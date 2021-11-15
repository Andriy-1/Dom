import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';
 
let renderEntreTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<Aspp
					store = {store}
					dispatch={store.dispatch.bind(store)}
					state={state}/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

renderEntreTree(store.getState());
store.subscribe( () => {
	let state = store.getState();
	renderEntreTree(state)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
