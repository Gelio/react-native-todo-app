import React from 'react';
import { List, ListItem, Text, View } from 'native-base';
import PropTypes from 'prop-types';

function EmptyTodoList() {
  return (
    <View style={{ marginTop: 15, alignItems: 'center', flex: 1 }}>
      <Text style={{ fontSize: 18, textAlign: 'center' }}>
        There are no items in your todo list!
      </Text>
    </View>
  );
}

export default function TodoList({ todoList, removeTodo }) {
  return todoList.length === 0 ? (
    <EmptyTodoList />
  ) : (
    <List
      dataArray={todoList}
      renderRow={todoItem => (
        <ListItem onPress={() => removeTodo(todoItem)}>
          <Text>{todoItem.title}</Text>
        </ListItem>
      )}
    />
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired,
};
