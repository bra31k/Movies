import { combineReducers } from 'redux'
import { filmReducer } from './film'
import { sideNavReducer } from './genres'

export const rootReducer = combineReducers({
  film: filmReducer,
  sidenav: sideNavReducer,
});