export const TODO_LIST_ACTION = {
  ADD: '[TodoList] Add',
  REMOVE: '[TodoList] Remove',
  LOADED: '[TodoList] Loaded',
};

export function addTodo(todoItem) {
  return {
    type: TODO_LIST_ACTION.ADD,
    todoItem,
  };
}

export function removeTodo(todoItem) {
  return {
    type: TODO_LIST_ACTION.REMOVE,
    todoItem,
  };
}

export function todoListLoaded(todoList) {
  return {
    type: TODO_LIST_ACTION.LOADED,
    todoList,
  };
}
