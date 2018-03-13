import { SETTINGS_ACTION } from '../actions/settingsActions';
import SettingsStorage from '../SettingsStorage';
import SORT_ORDER from '../SortOrder';

const defaultState = {
  sortOrder: SORT_ORDER.DATE_ASCENDING,
};

export default function settingsReducer(state = defaultState, action) {
  switch (action.type) {
    case SETTINGS_ACTION.SET_SORT_ORDER:
      SettingsStorage.setSortOrder(action.sortOrder);
      return { ...state, sortOrder: action.sortOrder };

    default:
      return state;
  }
}
