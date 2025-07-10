export enum DateFormat {
  short = 'short',
  long = 'long',
}

export const formatDate = (date: Date, format = DateFormat.short): string => {
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };

  if (format === DateFormat.long) {
    options.year = 'numeric';
  }

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const getWeekday = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
};
