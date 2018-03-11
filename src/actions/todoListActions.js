export const TODO_LIST_ACTION = {
  ADD: '[TodoList] Add',
  REMOVE: '[TodoList] Remove',
  EDIT: '[TodoList] Edit',
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

export function editTodo(todoItem, newTitle) {
  return {
    type: TODO_LIST_ACTION.EDIT,
    todoItem,
    newTitle,
  };
}

export function todoListLoaded(todoList) {
  return {
    type: TODO_LIST_ACTION.LOADED,
    todoList,
  };
}
