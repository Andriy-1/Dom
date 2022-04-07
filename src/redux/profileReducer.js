import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
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
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: { ...state.profile, photos: action.photos }
				
			};
		}
		default:
			return state;
	}
}

export const addPost = (post) => ({ type: ADD_POST, post });
const setUserProfile = data => ({ type: SET_USER_PROFILE, data, });
const setStatus = status => ({ type: SET_STATUS, status, });
const savePhotoSuccess = photos => ({ type: SAVE_PHOTO_SUCCESS, photos });

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

export const savePhoto = (file) => {
	return async (dispatch) => {
		const response = await profileAPI.savePhoto(file);
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}

export default profileReducer;