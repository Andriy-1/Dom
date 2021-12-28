const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
	users: [
		{
			id: 1, photoUrl: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80', followed: false, fullName: "Andriy", status: 'I am a boss',
			location: { city: 'Ivano-Frankivsk', country: 'Ukraina', }
		},
		{
			id: 2, photoUrl: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg', followed: true, fullName: "Kolya", status: 'I am a boss too',
			location: { city: 'Kiev', country: 'Ukraina', }
		},
		{
			id: 3, photoUrl: 'https://vjoy.cc/wp-content/uploads/2020/10/foto-dlya-avatarki-dlya-parnej-v-vk011.jpg', followed: false, fullName: "Katya", status: 'I am a boss too',
			location: { city: 'Praga', country: 'Poland', }
		},
		{
			id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXiLIwZ4MJ4wim5PJAEv-8pjZR6omqL6qFw&usqp=CAU', followed: true, fullName: "Bogdan", status: 'I am a boss too',
			location: { city: 'Minsk', country: 'Belarus', }
		},
	],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return user;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return user;
				})
			}
		case SET_USERS: {
			return { ...state, users: [...state.users, ...action.users] }
		}
		default:
			return state;
	}
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;