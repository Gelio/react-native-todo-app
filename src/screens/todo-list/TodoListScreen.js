import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Container, Button, Text, Content, Spinner } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CreateTodoRow from './CreateTodoRow';
import { addTodo, removeTodo } from '../../actions/todoListActions';
import TodoList from './TodoList';

class TodoListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'Todo List',
      headerRight: (
        <Button onPress={params.openSettings}>
          <Text>Settings</Text>
        </Button>
      ),
    };
  };

  constructor(props) {
    super(props);

    this.openSettings = this.openSettings.bind(this);
  }

  async componentWillMount() {
    this.props.navigation.setParams({ openSettings: this.openSettings });
  }

  openSettings() {
    this.props.navigation.navigate('Settings');
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} keyboardVerticalOffset={75}>
        <Container>
          <Content>
            {!this.props.isTodoListLoaded ? <Spinner /> : <TodoList {...this.props} />}
          </Content>
        </Container>
        <CreateTodoRow createTodo={this.props.addTodo} />
      </KeyboardAvoidingView>
    );
  }
}

TodoListScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
  isTodoListLoaded: PropTypes.bool.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,

  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

function sortTodoListAlphabetically(todoList) {
  const sortedTodoList = todoList.slice(0);

  sortedTodoList.sort((a, b) => {
    const aLower = a.title.toLowerCase();
    const bLower = b.title.toLowerCase();

    if (aLower > bLower) {
      return 1;
    } else if (aLower < bLower) {
      return -1;
    }

    return 0;
  });

  return sortedTodoList;
}

function mapStateToProps(state) {
  const { sortAlphabetically } = state.settings;
  const todoList = sortAlphabetically
    ? sortTodoListAlphabetically(state.todoList.todoList)
    : state.todoList.todoList;

  return {
    todoList,
    isTodoListLoaded: state.todoList.isLoaded,
    sortAlphabetically,
  };
}

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListScreen);
