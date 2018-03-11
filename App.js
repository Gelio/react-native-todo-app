import React from 'react';
import { ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { Text, Container, Header, Button, Content, Footer, Spinner, SwipeRow, Body, Title, FooterTab, List, ListItem, Right } from 'native-base';

import Item from './src/Item';
import CreateTodo from './src/CreateTodo';

export default class App extends React.Component {
  state = {
    items: [
      new Item('Complete initial Android project', Date.now()),
      new Item('Remove items', Date.now()),
      new Item('Edit items', Date.now()),
      new Item('Add new items', Date.now()),
      new Item('Add new it2ems', Date.now()),
      new Item('Add new ite3ms', Date.now()),
      new Item('Add new item4s', Date.now()),
      new Item('Add new item2s', Date.now()),
      new Item('Add new item5s', Date.now()),
      new Item('Add new item6s', Date.now()),
      new Item('Add new ite1212ms', Date.now()),
      new Item('Add new ite7s', Date.now()),
      new Item('Add new item7s', Date.now()),
      new Item('Add new item8s', Date.now()),
      new Item('Add new item9s', Date.now()),
      new Item('Add new itms', Date.now()),
      new Item('Add new tems', Date.now()),
      new Item('Add ne items', Date.now()),
      new Item('Add ew items', Date.now()),
      new Item('Ad new items', Date.now()),
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
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ appLoaded: true });
  }

  addTodo(text) {
    this.setState({
      items: [...this.state.items, new Item(text, Date.now())],
    });
  }

  removeTodo(item) {
    const items = this.state.items;
    const index = items.indexOf(item);

    const previous = items.slice(0, index);
    const next = items.slice(index + 1);

    this.setState({
      items: [...previous, ...next],
    });
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
