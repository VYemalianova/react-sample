import dayjs from 'dayjs';
import type { IDatePart } from '../models/datePart';

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

export const formatDateFromParts = (dateParts: IDatePart, format = 'MMM D') => {
  const formattedDate = dayjs()
    .set('year', dateParts.year ?? dayjs().year())
    .set('month', dateParts.month - 1)
    .set('date', dateParts.day);

  return formattedDate.format(format);
};

export const formatDateRangeFromParts = (start: IDatePart, end: IDatePart) => {
  const startFormatted = formatDateFromParts(start);
  const endFormatted = formatDateFromParts(end);

  return `${startFormatted} - ${endFormatted}`;
};
