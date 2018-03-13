import TodoStorage from './TodoStorage';
import { todoListLoaded } from './actions/todoListActions';
import { setSortOrder } from './actions/settingsActions';
import SettingsStorage from './SettingsStorage';

async function loadTodoList(store) {
  const todoList = await TodoStorage.load();

  store.dispatch(todoListLoaded(todoList));
}

async function loadSettings(store) {
  const sortOrder = await SettingsStorage.getSortOrder();
  console.log('sort order', sortOrder);
  if (!sortOrder) {
    return;
  }

  const action = setSortOrder(sortOrder);
  store.dispatch(action);
}

/**
 * @param {Store} store
 */
export default function loadAppData(store) {
  return Promise.all([loadTodoList(store), loadSettings(store)]);
}
