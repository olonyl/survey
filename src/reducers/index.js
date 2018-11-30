import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SurveyReducer from './SurveyReducer';
import DataReducer from './DataReducer';

export default combineReducers({
	auth: AuthReducer,
	survey: SurveyReducer,
	data: DataReducer
});
