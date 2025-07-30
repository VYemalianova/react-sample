import type { IHoroscope } from '../models/horoscope.model';
import type { IResponse } from '../models/response';
import { buildQueryString } from '../utils/utils';

const host = 'http://localhost:3000';

export const fetchHoroscope = async (
  type: string,
  sign: string,
  startDate?: string,
  endDate?: string
) => {
  const query = buildQueryString({
    horoscope: type,
    signType: sign,
    ...(startDate && { startDate }),
    ...(endDate && { endDate }),
  });

  const response = await fetch(`${host}/horoscope?${query}`);
  const fetchedData = (await response.json()) as IResponse<IHoroscope>;

  if (!fetchedData.success) {
    throw new Error('An unknown error occurred.');
  }

  return fetchedData.data;
};
