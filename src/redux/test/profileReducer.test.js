import React from 'react'
import profileReducer, { addPost } from '../profileReducer';
const state = {
	post: [
		{ id: 1, message: "Hi,what your name!", like: 25 },
		{ id: 2, message: "My first post", like: 11 },
		{ id: 3, message: "like programmer", like: 33 },
		{ id: 4, message: "I have an apple", like: 99 },
	],
}

it('length of posts should be incrementen', () => {
	//1. test data
	let action = addPost('hello');
	
	// 2. action 
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.post.length).toBe(5);
	
});

// it('length of posts should be incrementen', () => {
// 	//1. test data
// 	let action = addPost('hello');
	
// 	// 2. action 
// 	let newState = profileReducer(state, action);

// 	// 3. expectation
// 	expect(newState.post[4].like).toBe(0);
// });
