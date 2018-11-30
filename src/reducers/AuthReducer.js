import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGGED_STATUS_CHANGED
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', loggedIn: false };
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload }
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload }
		case LOGGED_STATUS_CHANGED:
			return { ...state, loggedIn: action.payload }
		default:
			return state;
	}
};
