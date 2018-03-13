export const SETTINGS_ACTION = {
  SET_SORT_ORDER: '[Settings] Set sort order',
};

export function setSortOrder(sortOrder) {
  return {
    type: SETTINGS_ACTION.SET_SORT_ORDER,
    sortOrder,
  };
}
