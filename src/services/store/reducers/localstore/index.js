import { REHYDRATE } from 'redux-persist/constants'

export default function(state = null, action) {
	switch (action.type) {
		case REHYDRATE: {
      var incoming = action.payload.myReducer
  		if (incoming) return {
					...state, 
					...incoming,
					specialKey: incoming.specialKey
				}
		}
		// eslint-disable-next-line
		default:
			return state;
	}
}
