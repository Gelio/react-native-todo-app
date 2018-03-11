import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  ScrollView,
  Button,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { Item } from './src/Item';

export default class App extends React.Component {
  state = {
    items: [
      new Item('Complete initial Android project', Date.now()),
      new Item('Remove items', Date.now()),
      new Item('Edit items', Date.now()),
      new Item('Add new items', Date.now())
    ],
    newTodo: ''
  };

  constructor() {
    super();

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo() {
    this.setState({
      items: [...this.state.items, new Item(this.state.newTodo, Date.now())],
      newTodo: ''
    });
  }

  removeTodo(item) {
    const items = this.state.items;
    const index = items.indexOf(item);

    const previous = items.slice(0, index);
    const next = items.slice(index + 1);

    this.setState({
      items: [...previous, ...next]
    });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ToolbarAndroid
          title="SomeApp"
          actions={[
            {
              title: 'Hello'
            }
          ]}
          titleColor="black"
          style={styles.toolbar}
        />
        <View style={styles.todoList}>
          <Text style={{ fontSize: 24 }}>Todo list</Text>
          <ScrollView style={{ flex: 1 }}>
            {this.state.items.map(item => (
              <Text
                style={{ fontSize: 18, paddingTop: 10 }}
                key={item.title}
                onPress={() => this.removeTodo(item)}
              >
                {item.title}
              </Text>
            ))}
          </ScrollView>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
              style={{ flex: 1 }}
              value={this.state.newTodo}
              onChangeText={text => this.setState({ newTodo: text })}
            />
            <Button title="Add" onPress={this.addTodo} />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  toolbar: {
    height: 56
  },
  todoList: {
    justifyContent: 'center',
    flex: 1
  }
});
