import type { IHoroscope } from '../models/horoscope.model';
import type { IResponse } from '../models/response';
import { buildQueryString } from '../utils/utils';
import { apiFetch } from './api.service';

export const fetchHoroscope = async (
  type: string,
  sign: string,
  startDate?: string,
  endDate?: string
) => {
  const query = buildQueryString({
    horoscopeType: type,
    signType: sign,
    ...(startDate && { startDate }),
    ...(endDate && { endDate }),
  });

  const response = (await apiFetch(`horoscope?${query}`)) as IResponse<IHoroscope>;

  if (!response.success) {
    throw new Error('An unknown error occurred.');
  }

  return response.data;
};
