import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_SECURITY_CAPTCHA = 'auth/GET_SECURITY_CAPTCHA';

const initialState = {
	userId: null,
	email: null,
	password: null,
	login: null,
	isAuth: false,
	isFetching: false,
	captchaUrl: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_SECURITY_CAPTCHA:
			return {
				...state,
				...action.payload,
			}
		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });
export const getSecurityCaptha = (captchaUrl) => ({ type: GET_SECURITY_CAPTCHA, payload: { captchaUrl } })


export const authData = () => {
	return async (dispatch) => {
		const dataResponse = await authAPI.me();
		if (dataResponse.resultCode === 0) {
			let { id, email, login } = dataResponse.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
	}
}
export const login = (email, password, rememberMe,captcha) => {
	return async (dispatch) => {
		const response = await authAPI.login(email, password, rememberMe,captcha);
		if (response.data.resultCode === 0) {
			dispatch(authData());
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaUrl());
			}
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
export const getCaptchaUrl = () => {
	return async (dispatch) => {
		const response = await securityAPI.getCaptcha();
		const captchaUrl = response.data.url;
		dispatch(getSecurityCaptha(captchaUrl));
	}
}
export default authReducer;