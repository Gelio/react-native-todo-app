import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Container, Button, Text, Content, Spinner } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CreateTodoRow from './CreateTodoRow';
import { addTodo, removeTodo, editTodo } from '../../actions/todoListActions';
import TodoList from './TodoList';
import EditTodoItemModal from './EditTodoItemModal';
import sortTodoList from '../../sortTodoList';

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
    this.openEditTodoModal = this.openEditTodoModal.bind(this);
    this.onCancelEditTodoItemModal = this.onCancelEditTodoItemModal.bind(this);
    this.onConfirmEditTodoItemModal = this.onConfirmEditTodoItemModal.bind(this);
  }

  state = {
    editedTodoItem: null,
  };

  async componentWillMount() {
    this.props.navigation.setParams({ openSettings: this.openSettings });
  }

  onCancelEditTodoItemModal() {
    this.setState({
      editedTodoItem: null,
    });
  }

  onConfirmEditTodoItemModal(newTitle, newDate) {
    const todoItem = this.state.editedTodoItem;

    this.setState({
      editedTodoItem: null,
    });

    this.props.editTodo(todoItem, newTitle, newDate);
  }

  openSettings() {
    this.props.navigation.navigate('Settings');
  }

  openEditTodoModal(todoItem) {
    this.setState({
      editedTodoItem: todoItem,
    });
  }

  render() {
    const { editedTodoItem } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} keyboardVerticalOffset={75}>
        <Container>
          <Content>
            {editedTodoItem && (
              <EditTodoItemModal
                onConfirm={this.onConfirmEditTodoItemModal}
                onCancel={this.onCancelEditTodoItemModal}
                todoItem={editedTodoItem}
                modalVisible
              />
            )}

            {!this.props.isTodoListLoaded ? (
              <Spinner />
            ) : (
              <TodoList {...this.props} editTodo={this.openEditTodoModal} />
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

  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { sortOrder } = state.settings;
  const todoList = sortTodoList(sortOrder, state.todoList.todoList);

  return {
    todoList,
    isTodoListLoaded: state.todoList.isLoaded,
  };
}

const mapDispatchToProps = {
  addTodo,
  removeTodo,
  editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListScreen);
