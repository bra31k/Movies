import { combineReducers } from 'redux'
import { filmReducer } from './film'

export const rootReducer = combineReducers({
  film: filmReducer,
});