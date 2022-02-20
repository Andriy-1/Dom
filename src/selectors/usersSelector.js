import { createSelector } from "reselect"
export const getUsers = (state) => {
	return state.UsersPage.users
}
// reselect зразок використання 
export const getUsersSelector = createSelector(getUsers, (users) => {
	return users.filter((u) => true)
})
export const getPageSize = (state) => {
	return state.UsersPage.pageSize
}
export const getTotalUsersCount = (state) => {
	return state.UsersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
	return state.UsersPage.currentPage
}
export const getIsFetching = (state) => {
	return state.UsersPage.isFetching
}
export const getFollowingInProgress = (state) => {
	return state.UsersPage.followingInProgress
}


// const mapStateToProps = (state) => {
// 	return {
// 		users: state.UsersPage.users,
// 		pageSize: state.UsersPage.pageSize,
// 		totalUsersCount: state.UsersPage.totalUsersCount,
// 		currentPage: state.UsersPage.currentPage,
// 		isFetching: state.UsersPage.isFetching,
// 		followingInProgress: state.UsersPage.followingInProgress,
// 	};
// };
