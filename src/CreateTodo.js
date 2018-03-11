import React from 'react';
import { Input, View, Button, Text, Item, Container, Content } from 'native-base';

export default class CreateTodo extends React.Component {
  state = {
    text: '',
  };

  constructor(props) {
    super(props);

    this.createTodo = props.createTodo;

    this.onAddTodoClick = this.onAddTodoClick.bind(this);
  }

  onAddTodoClick() {
    if (!this.state.text) {
      return;
    }

    this.createTodo(this.state.text);

    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Input
          placeholder="Do great stuff!"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          style={{ borderColor: 'gray' }}
        />
        <Button success onPress={this.onAddTodoClick}>
          <Text>Add</Text>
        </Button>
      </View>
    );
  }
}
