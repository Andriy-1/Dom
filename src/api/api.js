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
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append('image', photoFile)
		return instance.put('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},
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
	me() {
		return instance.get(`auth/me`).then(response => response.data);
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha });
	},
	logout() {
		return instance.delete(`auth/login`);
	}
}

export const securityAPI = {
	getCaptcha() {
		return instance.get(`security/get-captcha-url`);
	}
}