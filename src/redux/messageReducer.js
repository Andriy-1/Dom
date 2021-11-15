const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


const initialState = {
	messages: [

		{
			id: 1,
			name: "Andriy",
			message: "Hello.How are you?",
			avatar:
				"https://scontent.fifo3-1.fna.fbcdn.net/v/t1.6435-9/41980759_105690230398190_6468212999654998016_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7eNhNWXf8Y8AX_fOOXX&_nc_ht=scontent.fifo3-1.fna&oh=a19492b75617bfd8a139723fa58893e9&oe=61883A34",
		},
		{
			id: 2,
			name: "Kolya",
			message: "Good",
			avatar:
				"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
		},


		{
			id: 3,
			name: "Andriy",
			message: "Hello.How are you?",
			avatar:
				"https://scontent.fifo3-1.fna.fbcdn.net/v/t1.6435-9/41980759_105690230398190_6468212999654998016_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7eNhNWXf8Y8AX_fOOXX&_nc_ht=scontent.fifo3-1.fna&oh=a19492b75617bfd8a139723fa58893e9&oe=61883A34",
		},
	],
	newMessageText: '',
	users: [
		{ id: 1, name: "Andriy" },
		{ id: 2, name: "Ivan" },
		{ id: 3, name: "Vika" },
		{ id: 4, name: "Kolya" },
		{ id: 5, name: "Vasya" },
		{ id: 6, name: "Nastya" },
	],
}

const messageReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 4,
				name: "Kolya",
				message: state.newMessageText,
				avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
			};
			state.messages.push(newMessage);;
			state.newMessageText = '';
			return state;

		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newTextMessage;
			return state;

		default:
			return state;
	}
}

export const addUserMessageActionCreate = () => ({ type: ADD_MESSAGE, });
export const onMessageChangeActionCreate = text =>
	({ type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text, });

export default messageReducer;