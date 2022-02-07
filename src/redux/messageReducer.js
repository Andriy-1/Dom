const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


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
				"https://cdn2.iconfinder.com/data/icons/jetflat-faces/90/005_015_guy_avatar_man_human_office_clerk-512.png",
		},
		{
			id: 2,
			name: "",
			message: "Good",
			avatar:
				"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
		},


		{
			id: 3,
			name: "",
			message: "Hello.How are you?",
			avatar:
				"https://cdn2.iconfinder.com/data/icons/jetflat-faces/90/005_015_guy_avatar_man_human_office_clerk-512.png",
		},
	],
}

const messageReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = {
				id: 4,
				message: action.message,
				avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
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