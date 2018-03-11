import TodoStorage from './TodoStorage';
import { todoListLoaded } from './actions/todoListActions';
import { sortAlphabeticallyOff, sortAlphabeticallyOn } from './actions/settingsActions';
import SettingsStorage from './SettingsStorage';

async function loadTodoList(store) {
  const todoList = await TodoStorage.load();

  store.dispatch(todoListLoaded(todoList));
}

async function loadSettings(store) {
  const sortAlphabetically = await SettingsStorage.getSortAlphabetically();

  const action = sortAlphabetically ? sortAlphabeticallyOn() : sortAlphabeticallyOff();

  store.dispatch(action);
}

/**
 * @param {Store} store
 */
export default function loadAppData(store) {
  return Promise.all([loadTodoList(store), loadSettings(store)]);
}
