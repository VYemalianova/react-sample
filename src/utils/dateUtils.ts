import dayjs from 'dayjs';
import type { IDatePart } from '../models/datePart';

export const getWeekday = (date: Date) => {
  return dayjs(date).format('dddd');
};

export const formatDate = (format = 'MMM D') => {
  return dayjs().format(format);
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
