import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';

const initialState = {
	userId: null,
	email: null,
	password: null,
	login: null,
	isAuth: false,
	isFetching: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
			}
		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const authData = () => {
	return async (dispatch) => {
		const dataResponse = await authAPI.me();
		if (dataResponse.resultCode === 0) {
			let { id, email, login } = dataResponse.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
	}
}
export const login = (email, password, rememberMe) => {
	return async (dispatch) => {
		const response = await authAPI.login(email, password, rememberMe);
		if (response.data.resultCode === 0) {
			dispatch(authData());
		} else {
			let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
			dispatch(stopSubmit('login', { _error: message }));
		}
	}
}

export const logout = () => {
	return async (dispatch) => {
		const response = await authAPI.logout();
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		};
	}
}

export default authReducer;