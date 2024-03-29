import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import settings from './settings';

const rootReducer = combineReducers({
  player, token, settings });

export default rootReducer;
