import { SETTINGS_ACTION } from '../actions/settingsActions';
import SettingsStorage from '../SettingsStorage';

const defaultState = {
  sortAlphabetically: false,
};

export default function settingsReducer(state = defaultState, action) {
  switch (action.type) {
    case SETTINGS_ACTION.SORT_ALPHABETICALLY_ON:
      SettingsStorage.setSortAlphabetically(true);
      return { ...state, sortAlphabetically: true };

    case SETTINGS_ACTION.SORT_ALPHABETICALLY_OFF:
      SettingsStorage.setSortAlphabetically(false);
      return { ...state, sortAlphabetically: false };

    default:
      return state;
  }
}
