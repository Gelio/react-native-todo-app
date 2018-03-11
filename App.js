import React from 'react';
import { Spinner } from 'native-base';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import RootNavigator from './RootNavigator';
import allReducers from './src/reducers';
import loadFonts from './src/loadFonts';
import loadAppData from './src/loadAppData';

const store = createStore(allReducers);

export default class App extends React.Component {
  state = {
    appLoaded: false,
  };

  async componentWillMount() {
    await Promise.all([loadFonts(), loadAppData(store)]);

    this.setState({ appLoaded: true });
  }

  render() {
    return this.state.appLoaded ? (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    ) : (
      <Spinner />
    );
  }
}
