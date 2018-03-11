export const TODO_LIST_ACTION = {
  ADD: '[TodoList] Add',
  REMOVE: '[TodoList] Remove',
  LOAD: '[TodoList] Load',
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

export function loadTodoList(todoList) {
  return {
    type: TODO_LIST_ACTION.LOAD,
    todoList,
  };
}
