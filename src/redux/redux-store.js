import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
	ProfilePage: profileReducer,
	MessagePage: messageReducer,
	SidebarPage: sidebarReducer,
	UsersPage: usersReducer,
	auth: authReducer
})

const store = createStore(reducers);
window.store = store;
export default store;