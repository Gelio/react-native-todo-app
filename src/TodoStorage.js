import { AsyncStorage } from 'react-native';

const todoListStorageKey = 'TODO_LIST';

export default class TodoStorage {
  /**
   *
   * @param {TodoItem[]} todoList
   */
  static async save(todoList) {
    const serializedList = JSON.stringify(todoList);
    await AsyncStorage.setItem(todoListStorageKey, serializedList);
  }

  static async load() {
    const serializedList = await AsyncStorage.getItem(todoListStorageKey);
    if (!serializedList) {
      return [];
    }

    return JSON.parse(serializedList);
  }
}
