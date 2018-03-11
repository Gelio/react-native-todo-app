export const SETTINGS_ACTION = {
  SORT_ALPHABETICALLY_ON: '[Settings] Sort alphabetically: on',
  SORT_ALPHABETICALLY_OFF: '[Settings] Sort alphabetically: off',
};

export function sortAlphabeticallyOn() {
  return {
    type: SETTINGS_ACTION.SORT_ALPHABETICALLY_ON,
  };
}

export function sortAlphabeticallyOff() {
  return {
    type: SETTINGS_ACTION.SORT_ALPHABETICALLY_OFF,
  };
}
