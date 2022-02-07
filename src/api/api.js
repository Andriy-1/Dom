import axios from "axios"

export const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "2b64a6f5-6c4f-4a74-8087-a1a6428f282d",
	},
})


export const userAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`).then(response => response.data)
	},
	follow(id) {
		return instance.post(`follow/${id}`).then(response => response.data)
	}
}
export const profileAPI = {
	getUserProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data)
	},
	setStatus(userId) {
		return instance.get(`profile/status/${userId}`).then(response => response.data)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status }).then(response => response.data)
	}
}


export const authAPI = {
	getLogin() {
		return instance.get(`auth/me`).then(response => response.data);
	},
	// getSingIn() {
	// 	return instance.post(`auth/login`).then(response => {
	// 		debugger
	// 	})
	// }
}