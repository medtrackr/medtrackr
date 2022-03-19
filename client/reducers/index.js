import { combineReducers } from 'redux';

// import all reducers here
import medsReducer from './reducers';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  meds: medsReducer,
});

// make the combined reducers available for import
export default reducers;
