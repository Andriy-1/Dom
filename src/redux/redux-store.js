import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

const reducers = combineReducers({
	ProfilePage: profileReducer,
	MessagePage: messageReducer,
	SidebarPage: sidebarReducer,
	UsersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;
export default store;