import SORT_ORDER from './SortOrder';

function alphabeticComparator(todoItem1, todoItem2) {
  const aLower = todoItem1.title.toLowerCase();
  const bLower = todoItem2.title.toLowerCase();

  if (aLower > bLower) {
    return 1;
  } else if (aLower < bLower) {
    return -1;
  }

  return 0;
}

function ascendingDateComparator(todoItem1, todoItem2) {
  const date1 = todoItem1.date;
  const date2 = todoItem2.date;

  if (date1 === date2) {
    return alphabeticComparator(todoItem1, todoItem2);
  }

  return date1 - date2;
}

function descendingDateComparator(todoItem1, todoItem2) {
  const date1 = todoItem1.date;
  const date2 = todoItem2.date;

  if (date1 === date2) {
    return alphabeticComparator(todoItem1, todoItem2);
  }

  return date2 - date1;
}

const sortOrderComparators = {
  [SORT_ORDER.ALPHABETIC]: alphabeticComparator,
  [SORT_ORDER.DATE_ASCENDING]: ascendingDateComparator,
  [SORT_ORDER.DATE_DESCENDING]: descendingDateComparator,
};

export default function sortTodoList(sortOrder, todoList) {
  const comparator = sortOrderComparators[sortOrder] || alphabeticComparator;
  const listClone = todoList.slice(0);

  listClone.sort(comparator);

  return listClone;
}
