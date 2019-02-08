import { combineReducers } from 'redux'
import { filmReducer } from './film'
import { sideNavReducer } from './sidenav'

export const rootReducer = combineReducers({
  film: filmReducer,
  sidenav: sideNavReducer,
});