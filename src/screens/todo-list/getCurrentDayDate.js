export default function getCurrentDayDate() {
  const date = new Date();
  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(0);

  return date;
}
