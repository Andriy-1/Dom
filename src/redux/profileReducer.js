const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
	post: [
		{ id: 1, message: "Hi,what your name!", like: 25 },
		{ id: 2, message: "My first post", like: 11 },
		{ id: 3, message: "like programmer", like: 33 },
		{ id: 4, message: "I have an apple", like: 99 },
	],
	newPostText: '',
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 6,
				message: state.newPostText,
				like: 2,
			}
			state.post.push(newPost);
			state.newPostText = '';
			return state;
		
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newTextPost;
			return state;
		
		default:
			return state;
	}
}

export const addUserPostActionCreate = () => ({ type: ADD_POST, });
export const onPostChangeActionCreate = text =>
	({ type: UPDATE_NEW_POST_TEXT, newTextPost: text, });

export default profileReducer;