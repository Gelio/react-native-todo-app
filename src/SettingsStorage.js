import { AsyncStorage } from 'react-native';

const sortAlphabeticallyStorageKey = 'SORT_ALPHABETICALLY';

export default class SettingsStorage {
  static setSortAlphabetically(value) {
    return AsyncStorage.setItem(sortAlphabeticallyStorageKey, JSON.stringify(value));
  }

  static async getSortAlphabetically() {
    return JSON.parse(await AsyncStorage.getItem(sortAlphabeticallyStorageKey));
  }
}
