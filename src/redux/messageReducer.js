const ADD_MESSAGE = 'message/ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'message/UPDATE_NEW_MESSAGE_TEXT';
const usersPhotoDefault = "https://www.drhair.in/wp-content/uploads/2016/09/user-icon-6.png"; 

const initialState = {
	users: [
		{ id: 1, name: "Bogdan" },
		{ id: 2, name: "Ivan" },
		{ id: 3, name: "Vika" },
		{ id: 4, name: "Kolya" },
		{ id: 5, name: "Vasya" },
		{ id: 6, name: "Nastya" },
	],
	messages: [

		{
			id: 1,
			name: "",
			message: "Hello.How are you?",
			avatar:
			usersPhotoDefault,
		},
		{
			id: 2,
			name: "",
			message: "Good",
			avatar:
			usersPhotoDefault,
		},


		{
			id: 3,
			name: "",
			message: "Hello.How are you?",
			avatar:
			usersPhotoDefault,
		},
	],
}

const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = {
				id: state.messages.length + 1,
				message: action.message,
				avatar: usersPhotoDefault,
			};
			return {	
				...state,
				messages: [...state.messages, newMessage],
				newMessageText: '',
			};

		}
		case UPDATE_NEW_MESSAGE_TEXT: {
			return {
				...state,
				newMessageText: action.newTextMessage,
			};
		}
		default:
			return state;
	}
}
export const addMessage = (message) => ({ type: ADD_MESSAGE, message });
export default messageReducer;