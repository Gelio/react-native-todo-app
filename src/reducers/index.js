import { combineReducers } from 'redux';

import settingsReducer from './settingsReducer';
import todoListReducer from './todoListReducer';

export default combineReducers({
  settings: settingsReducer,
  todoList: todoListReducer,
});
