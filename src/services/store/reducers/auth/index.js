import { SET_TOKEN, SET_TIMER_RUNNING } from './actions';

export function auth(state = null, action) {
	switch (action.type) {
		case SET_TOKEN:
      return action.token;
		default:
			return state;
	}
}

export function authRefreshSet(state = null, action) {
	switch (action.type) {
		case SET_TIMER_RUNNING:
      return action.running;
		default:
			return state;
	}
}
