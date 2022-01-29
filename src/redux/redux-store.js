import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
	ProfilePage: profileReducer,
	MessagePage: messageReducer,
	SidebarPage: sidebarReducer,
	UsersPage: usersReducer,
	auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;