import api from './';

export function login(username, password) {
	return api.post('/main/token/auth', { username, password })
}

export function verify(token) {
	return api.post('/main/token/verify', { token })
}

export function refresh(token) {
	return api.post('/main/token/refresh', { token })
}

export const forgetPassword = values => api.put(`/main/user/forgot_password/`, values);