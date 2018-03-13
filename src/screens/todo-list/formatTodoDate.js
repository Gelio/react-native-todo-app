/**
 * @param {number} x
 */
function padTen(x) {
  if (x < 10) {
    return `0${x}`;
  }

  return x.toString();
}

/**
 * @param {Date} date
 */
export default function formatTodoDate(date) {
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()].map(padTen).join('-');
}
