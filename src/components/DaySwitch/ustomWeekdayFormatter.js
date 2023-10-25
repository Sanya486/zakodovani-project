const customWeekdayFormatter = (locale, date) => {
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return weekdays[date.getDay()];
};

export default customWeekdayFormatter;
