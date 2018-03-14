import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Input, View, Button, Icon } from 'native-base';

import TodoItem from '../../TodoItem';
import getCurrentDayDate from './getCurrentDayDate';

const createTodoStyle = StyleSheet.create({
  view: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingTop: 2,
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
});

export default class CreateTodoRow extends React.Component {
  constructor(props) {
    super(props);

    this.createTodo = props.createTodo;

    this.onAddTodoClick = this.onAddTodoClick.bind(this);
  }

  state = {
    text: '',
  };

  onAddTodoClick() {
    if (!this.state.text) {
      return;
    }

    const todoItem = new TodoItem(this.state.text, getCurrentDayDate());

    this.createTodo(todoItem);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <View style={createTodoStyle.view}>
        <Input
          placeholder="What is your next task?"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          style={{ borderColor: 'gray' }}
        />

        <Button success onPress={this.onAddTodoClick}>
          <Icon ios="ios-add" android="md-add" />
        </Button>
      </View>
    );
  }
}

CreateTodoRow.propTypes = {
  createTodo: PropTypes.func.isRequired,
};
