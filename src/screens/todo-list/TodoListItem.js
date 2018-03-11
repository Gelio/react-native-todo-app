import React from 'react';
import { ListItem, Text } from 'native-base';
import PropTypes from 'prop-types';

import formatCreatedAtDate from './formatCreatedAtDate';

export default function TodoListItem({ todoItem }) {
  const createdAtDate = new Date(todoItem.createdAt);

  return (
    <ListItem style={{ paddingLeft: 5, justifyContent: 'space-between' }}>
      <Text style={{ flexShrink: 1 }}>{todoItem.title}</Text>
      <Text style={{ color: '#777' }}>{formatCreatedAtDate(createdAtDate)}</Text>
    </ListItem>
  );
}

TodoListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todoItem: PropTypes.object.isRequired,
};
