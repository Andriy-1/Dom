import { userAPI } from "../api/api";
import { statusFollow } from "../utils/ObjHelper/objectHelper";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'users/SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOOGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';


const initialState = {
	users: [],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
}
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: statusFollow(state.users, action.userId, { followed: true })
			}
		case UNFOLLOW:
			return {
				...state,
				users: statusFollow(state.users, action.userId, { followed: false })
			}
		case SET_USERS: {
			return { ...state, users: action.users }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_USERS_TOTAL_COUNT: {
			return { ...state, totalUsersCount: action.count }
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
			}
		}
		default:
			return state;
	}
}
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowindProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (pageCurrent, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));

		const data = await userAPI.getUsers(pageCurrent, pageSize);
		dispatch(setUsers(data.items));
		dispatch(setCurrentPage(pageCurrent));
		dispatch(setUsersTotalCount(data.totalCount));
		dispatch(toggleIsFetching(false));
	}
}
export const follow = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess);
	}
}
export const unfollow = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess);
	}
}
const followUnfollowFlow = async (dispatch, userId, apiMetod, objSuccess) => {
	dispatch(toggleIsFollowindProgress(true, userId));
	const data = await apiMetod(userId);
	if (data.resultCode === 0) {
		dispatch(objSuccess(userId));
	}
	dispatch(toggleIsFollowindProgress(false, userId));
}
export default usersReducer;