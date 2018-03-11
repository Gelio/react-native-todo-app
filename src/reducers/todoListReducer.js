import { TODO_LIST_ACTION } from '../actions/todoListActions';
import TodoStorage from '../TodoStorage';

const initialState = {
  todoList: [],
  isLoaded: false,
};

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_LIST_ACTION.ADD: {
      const newTodoList = [...state.todoList, action.todoItem];
      TodoStorage.save(newTodoList);

      return {
        ...state,
        todoList: newTodoList,
      };
    }

    case TODO_LIST_ACTION.REMOVE: {
      const { todoList } = state;
      const index = todoList.indexOf(action.todoItem);

      const previousTodoItems = todoList.slice(0, index);
      const nextTodoItems = todoList.slice(index + 1);
      const newTodoList = [...previousTodoItems, ...nextTodoItems];
      TodoStorage.save(newTodoList);

      return { ...state, todoList: newTodoList };
    }

    case TODO_LIST_ACTION.LOADED:
      return {
        ...state,
        todoList: action.todoList,
        isLoaded: true,
      };

    default:
      return state;
  }
}
