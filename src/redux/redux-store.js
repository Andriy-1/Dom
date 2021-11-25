import { combineReducers, createStore } from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
	ProfilePage: profileReducer,
	MessagePage: messageReducer,
	SidebarPage: sidebarReducer,
})

const store = createStore(reducers);
window.store = store;
export default store;