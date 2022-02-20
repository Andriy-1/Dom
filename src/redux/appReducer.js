import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { authData } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


const initialState = {
	initialized: false,
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			}
		default:
			return state;
	}
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
// export const authData = () => {
// 	return (dispatch) => {
// 		authAPI.me().then(dataResponse => {
// 			if (dataResponse.resultCode === 0) {
// 				let { id, email, login } = dataResponse.data;
// 				dispatch(setAuthUserData(id, email, login, true));

// 			}
// 		})
// 	}
// }
export const initializeApp = () => dispatch => {
	let promise = dispatch(authData());
	promise.then(() => {
		dispatch(initializedSuccess());
	})
}


export default appReducer;