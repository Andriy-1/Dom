import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const initialState = {
	post: [
		// { id: 1, message: "Hi,what your name!", like: 25 },
		// { id: 2, message: "My first post", like: 11 },
		// { id: 3, message: "like programmer", like: 33 },
		// { id: 4, message: "I have an apple", like: 99 },
	],
	newPostText: '',
	profile: null,
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 6,
				message: state.newPostText,
				like: 0,
			}
			return {
				...state,
				post: [...state.post, newPost],
				newPostText: '',
			};

		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newTextPost,
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.data,
			};
		}
		default:
			return state;
	}
}

export const addPost = () => ({ type: ADD_POST, });
export const onPostChange = text =>({ type: UPDATE_NEW_POST_TEXT, newTextPost: text, });
export const setUserProfile = data =>({ type: SET_USER_PROFILE, data, });

export const profileUser = (userId) => {
	return (dispatch) => {
		profileAPI.getUserProfile(userId).then(data => {
			dispatch(setUserProfile(data))
		})
	}
}


export default profileReducer;