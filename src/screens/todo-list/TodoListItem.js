import React from 'react';
import { ListItem, Text } from 'native-base';
import PropTypes from 'prop-types';

import formatTodoDate from './formatTodoDate';

export default function TodoListItem({ todoItem }) {
  const date = new Date(todoItem.date);

  return (
    <ListItem style={{ paddingLeft: 5, justifyContent: 'space-between' }}>
      <Text style={{ flexShrink: 1 }}>{todoItem.title}</Text>
      <Text style={{ color: '#777' }}>{formatTodoDate(date)}</Text>
    </ListItem>
  );
}

TodoListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todoItem: PropTypes.object.isRequired,
};
