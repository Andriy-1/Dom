// import messageReducer from "./messageReducer";
// import profileReducer from "./profileReducer";
// import sidebarReducer from "./sidebarReducer";

// const store = {
// 	_state: {
// 		ProfilePage: {
// 			post: [
// 				{ id: 1, message: "Hi,what your name!", like: 25 },
// 				{ id: 2, message: "My first post", like: 11 },
// 				{ id: 3, message: "like programmer", like: 33 },
// 				{ id: 4, message: "I have an apple", like: 99 },
// 			],
// 			newPostText: '',
// 		},
// 		MessagePage: {
// 			messages: [

// 				{
// 					id: 1,
// 					name: "Andriy",
// 					message: "Hello.How are you?",
// 					avatar:
// 						"https://scontent.fifo3-1.fna.fbcdn.net/v/t1.6435-9/41980759_105690230398190_6468212999654998016_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7eNhNWXf8Y8AX_fOOXX&_nc_ht=scontent.fifo3-1.fna&oh=a19492b75617bfd8a139723fa58893e9&oe=61883A34",
// 				},
// 				{
// 					id: 2,
// 					name: "Kolya",
// 					message: "Good",
// 					avatar:
// 						"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
// 				},


// 				{
// 					id: 3,
// 					name: "Andriy",
// 					message: "Hello.How are you?",
// 					avatar:
// 						"https://scontent.fifo3-1.fna.fbcdn.net/v/t1.6435-9/41980759_105690230398190_6468212999654998016_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7eNhNWXf8Y8AX_fOOXX&_nc_ht=scontent.fifo3-1.fna&oh=a19492b75617bfd8a139723fa58893e9&oe=61883A34",
// 				},
// 			],
// 			newMessageText: '',
// 			users: [
// 				{ id: 1, name: "Andriy" },
// 				{ id: 2, name: "Ivan" },
// 				{ id: 3, name: "Vika" },
// 				{ id: 4, name: "Kolya" },
// 				{ id: 5, name: "Vasya" },
// 				{ id: 6, name: "Nastya" },
// 			],
// 		},
// 		SidebarPage:{},

// 	},
// 	_callSubscriber() {
// 		console.log('State changed');
// 	},

// 	getState() {
// 		return this._state;
// 	},
// 	subscribe(abserver) {
// 		this._callSubscriber = abserver;
// 	},

// 	dispatch(action) { // {type: 'ADD-POST'}

// 		this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
// 		this._state.MessagePage = messageReducer(this._state.MessagePage, action);
// 		this._state.SidebarPage = sidebarReducer(this._state.SidebarPage, action);
// 		this._callSubscriber(this._state);		
// 	}
// };



// export default store;
// window.store = store;

























	// //Profile Post
	// _addPost() {
	// 	let newPost = {
	// 		id: 6,
	// 		message: this._state.ProfilePage.newPostText,
	// 		like: 2,
	// 	}
	// 	this._state.ProfilePage.post.push(newPost);
	// 	this._callSubscriber(this._state);
	// 	this._state.ProfilePage.newPostText = '';
	// },
	// _updateNewPostText(newText) {
	// 	this._state.ProfilePage.newPostText = newText;
	// 	this._callSubscriber(this._state);
	// },

	// //Message
	// _addMessage() {
	// 	let newMessage = {
	// 		id: 4,
	// 		name: "Kolya",
	// 		message: this._state.MessagePage.newMessageText,
	// 		avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
	// 	};
	// 	this._state.MessagePage.messages.push(newMessage);
	// 	this._callSubscriber(this._state);
	// },
	// _updateNewMessageText(newMText) {
	// 	this._state.MessagePage.newMessageText = newMText;
	// 	this._callSubscriber(this._state);
	// },
