import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import {
  Container,
  Header,
  Body,
  Title,
  Right,
  Button,
  Text,
  Content,
  List,
  ListItem,
  Spinner,
} from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CreateTodoRow from './CreateTodoRow';
import TodoStorage from '../../TodoStorage';
import { addTodo, removeTodo, loadTodoList } from '../../actions/todoListActions';
import TodoItem from '../../TodoItem';

class TodoListScreen extends React.Component {
  static navigationOptions = () => ({
    headerTitle: 'Todo List',
  });

  constructor(props) {
    super(props);

    this.openSettings = this.openSettings.bind(this);
  }

  async componentWillMount() {
    const todoList = await TodoStorage.load();

    this.props.loadTodoList(todoList);
  }

  openSettings() {
    this.props.navigation.navigate('Settings');
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} keyboardVerticalOffset={75}>
        <Container>
          <Header>
            <Body>
              <Title>Todo list</Title>
            </Body>
            <Right>
              <Button onPress={this.openSettings}>
                <Text>Settings</Text>
              </Button>
            </Right>
          </Header>
          <Content>
            {!this.props.isTodoListLoaded ? (
              <Spinner />
            ) : (
              <List
                dataArray={this.props.todoList}
                renderRow={todoItem => (
                  <ListItem onPress={() => this.props.removeTodo(todoItem)}>
                    <Text>{todoItem.title}</Text>
                  </ListItem>
                )}
              />
            )}
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
  sortAlphabetically: PropTypes.bool.isRequired,

  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  loadTodoList: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    todoList: state.todoList.todoList,
    isTodoListLoaded: state.todoList.isLoaded,
    sortAlphabetically: state.settings.sortAlphabetically,
  };
}

const mapDispatchToProps = {
  addTodo,
  removeTodo,
  loadTodoList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListScreen);
