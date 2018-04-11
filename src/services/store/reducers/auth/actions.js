export const SET_TOKEN = 'SET_TOKEN';
export const SET_TIMER_RUNNING = 'SET_TIMER_RUNNING';
export const LOGOUT = 'LOGOUT';

export function setToken(token) {
	return {
		type: SET_TOKEN,
		token,
	};
}

export function setTimerRunning(running) {
	return {
		type: SET_TIMER_RUNNING,
		running,
	};
}

export function logout() {
	return {
		type: LOGOUT,
	};
}