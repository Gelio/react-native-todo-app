import React from 'react';
import { ListView } from 'react-native';
import { List, Text, View, Button, Icon } from 'native-base';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';

function EmptyTodoList() {
  return (
    <View style={{ marginTop: 15, alignItems: 'center', flex: 1 }}>
      <Text style={{ fontSize: 18, textAlign: 'center' }}>
        There are no items in your todo list!
      </Text>
    </View>
  );
}

function removeTodoWithRowMap(removeTodo, todoItem, secId, rowId, rowMap) {
  rowMap[`${secId}${rowId}`].props.closeRow();
  removeTodo(todoItem);
}

export default function TodoList({ todoList, removeTodo, editTodo }) {
  const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  return todoList.length === 0 ? (
    <EmptyTodoList />
  ) : (
    <List
      renderLeftHiddenRow={(todoItem, secId, rowId, rowMap) => (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button light full onPress={() => editTodo(todoItem)} style={{ flex: 1 }}>
            <Icon active ios="ios-create" android="md-create" />
          </Button>
          <Button
            success
            full
            onPress={() => removeTodoWithRowMap(removeTodo, todoItem, secId, rowId, rowMap)}
            style={{ flex: 1 }}
          >
            <Icon active ios="ios-checkmark" android="md-checkmark" />
          </Button>
        </View>
      )}
      leftOpenValue={150}
      dataSource={dataSource.cloneWithRows(todoList)}
      renderRow={todoItem => <TodoListItem todoItem={todoItem} />}
    />
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
