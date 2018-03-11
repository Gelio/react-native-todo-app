import { StackNavigator } from 'react-navigation';

import SettingsScreen from './src/screens/settings/SettingsScreen';
import TodoListScreen from './src/screens/todo-list/TodoListScreen';

export default StackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
    },
    TodoList: {
      screen: TodoListScreen,
    },
  },
  {
    initialRouteName: 'TodoList',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#AB47BC',
      },
      headerTintColor: '#F3E5F5',
    },
  },
);
