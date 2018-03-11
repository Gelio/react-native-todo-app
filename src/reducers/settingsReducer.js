import { SETTINGS_ACTION } from '../actions/settingsActions';

const defaultState = {
  sortAlphabetically: false,
};

export default function settingsReducer(state = defaultState, action) {
  switch (action.type) {
    case SETTINGS_ACTION.SORT_ALPHABETICALLY_ON:
      return { ...state, sortAlphabetically: true };

    case SETTINGS_ACTION.SORT_ALPHABETICALLY_OFF:
      return { ...state, sortAlphabetically: false };

    default:
      return state;
  }
}
