import { AsyncStorage } from 'react-native';

const sortOrderStorageKey = 'SORT_ORDER';

export default class SettingsStorage {
  static setSortOrder(sortOrder) {
    return AsyncStorage.setItem(sortOrderStorageKey, sortOrder);
  }

  static async getSortOrder() {
    return AsyncStorage.getItem(sortOrderStorageKey);
  }
}
