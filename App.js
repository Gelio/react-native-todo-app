import React from 'react';
import { ScrollView, View, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { Text, Container, Header, Button, Content, Footer, Spinner, SwipeRow, Body, Title, FooterTab, List, ListItem, Right } from 'native-base';

import Item from './src/Item';
import CreateTodo from './src/CreateTodo';

export default class App extends React.Component {
  state = {
    items: [
      new Item('Complete initial Android project', Date.now()),
      new Item('Remove items', Date.now()),
      new Item('Edit items', Date.now()),
      new Item('Add new items', Date.now())
    ],
    appLoaded: false,
  };

  constructor() {
    super();

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.openSettings = this.openSettings.bind(this);
  }

  async componentWillMount() {
    const loadFontsPromise = Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });

    const loadTodosPromise = this.loadTodos();

    await Promise.all([loadFontsPromise, loadTodosPromise]);

    this.setState({ appLoaded: true });
  }

  addTodo(text) {
    const newItems = [...this.state.items, new Item(text, Date.now())];

    this.setState({
      items: newItems,
    });

    this.saveTodos(newItems);
  }

  removeTodo(item) {
    const items = this.state.items;
    const index = items.indexOf(item);

    const previous = items.slice(0, index);
    const next = items.slice(index + 1);

    const newItems = [...previous, ...next];

    this.setState({
      items: newItems,
    });

    this.saveTodos(newItems);
  }

  async saveTodos(list) {
    await AsyncStorage.setItem('todos', JSON.stringify(list));
    console.log('todos saved');
  }

  async loadTodos() {
    try {
      const serializedList = await AsyncStorage.getItem('todos');
      if (!serializedList) {
        console.log('no todos found');
        return;
      }

      this.setState({
        items: JSON.parse(serializedList)
      });
      console.log('loaded todos', serializedList);
    } catch (error) {
      console.error('error while loading todos', error);
    }
  }

  openSettings() {
    console.log('opening settings');
  }

  getLoadedAppContainer() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Container>
          <Header>
            <Body>
              <Title>Todo list</Title>
            </Body>
            <Right>
              <Button onPress={this.openSettings}><Text>Settings</Text></Button>
            </Right>
          </Header>
          <Content>
            <List dataArray={this.state.items} renderRow={item =>
              <ListItem onPress={() => this.removeTodo(item)}>
                <Text>{item.title}</Text>
              </ListItem>} />
          </Content>
        </Container>
        <CreateTodo createTodo={this.addTodo} />
      </KeyboardAvoidingView>
    );
  }

  getLoadingContainer() {
    return (
      <Container>
        <Header />
        <Content>
          <Spinner />
        </Content>
      </Container>
    );
  }

  render() {
    return this.state.appLoaded ? this.getLoadedAppContainer() : this.getLoadingContainer();
  }
}
