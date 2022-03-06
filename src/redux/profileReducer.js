import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const initialState = {
	post: [
		{ id: 1, message: "Hi,what your name!", like: 25 },
		{ id: 2, message: "My first post", like: 11 },
		{ id: 3, message: "like programmer", like: 33 },
		{ id: 4, message: "I have an apple", like: 99 },
	],
	profile: null,
	status: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: state.post.length + 1,
				message: action.post,
				like: 0,
			}
			return {
				...state,
				post: [...state.post, newPost],
			};

		}

		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.data,
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}
		default:
			return state;
	}
}

export const addPost = (post) => ({ type: ADD_POST, post });
export const setUserProfile = data => ({ type: SET_USER_PROFILE, data, });
export const setStatus = status => ({ type: SET_STATUS, status, })
export const profileUser = (userId) => {
	return async (dispatch) => {
		const data = await profileAPI.getUserProfile(userId);
		dispatch(setUserProfile(data))
	}
}
export const getStatus = (userId) => {
	return async (dispatch) => {
		const data = await profileAPI.setStatus(userId);
		dispatch(setStatus(data))
	}
}
export const updateStatus = (status) => {
	return async (dispatch) => {
		const data = await profileAPI.updateStatus(status);
		if (data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	}
}

export default profileReducer;