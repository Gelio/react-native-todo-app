import React from 'react';
import { Spinner } from 'native-base';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import RootNavigator from './RootNavigator';
import allReducers from './src/reducers';

const store = createStore(allReducers);

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async componentWillMount() {
    /* eslint-disable global-require */
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    /* eslint-enable global-require */

    this.setState({ fontsLoaded: true });
  }

  render() {
    return this.state.fontsLoaded ? (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    ) : (
      <Spinner />
    );
  }
}
