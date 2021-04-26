import {combineReducers} from 'redux';
import user from './user';
import admin from './admin';
import settings from './settings';
// import other reducers here

export default combineReducers({
  userData: user,
  admin: admin,
  settings: settings,
  // other reducers will come here
});
