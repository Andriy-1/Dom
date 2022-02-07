import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_USER_DATA = 'GET_USER_DATA';


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
				isAuth: true,
			}
		// case GET_USER_DATA:
		// 	return {
		// 		...state,
		// 		...action.data,
		// 		isAuth: true,
		// 	}
		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });
// export const getAuthUserData = (email, password) => ({ type: GET_USER_DATA, data: { email, password } });

export const authData = () => {
	return (dispatch) => {
		authAPI.getLogin().then(dataResponse => {
			if (dataResponse.resultCode === 0) {
				let { id, email, login } = dataResponse.data;
				dispatch(setAuthUserData(id, email, login));

			}
		})
	}
}
// export const authSingIn = (email, password) => {
// 	return (dispatch) => {
// 		authAPI.getSingIn()
// 			// let {email, password } = dataResponse.data;
// 			dispatch(getAuthUserData(email, password));

// 	}
// }



export default authReducer;