import { combineReducers } from 'redux';

// import all reducers here
import medsReducer from './reducers';

// combine reducers
const reducers = combineReducers({
  meds: medsReducer,
});

export default reducers;
