import { createContext, type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

import signsData from '@data/signs.json';
import { SignType, type ISign } from '@models/sign.model';
import { loadIconsFromFolder } from '@utils/loadIcons';
import { DateFormat } from '@models/date.types';
import { buildDateFromParts } from '../utils/dateUtils';

interface IGlobalContext {
  signs: ISign[];
}

const LEAP_YEAR = 2024;

const icons = loadIconsFromFolder('sign-icons');
const images = loadIconsFromFolder('sign-images');
const signs: ISign[] = signsData.map((sign) => ({
  ...sign,
  id: uuidv4(),
  signType: sign.signType as SignType,
  startDate: buildDateFromParts(
    {
      month: sign.start.month,
      day: sign.start.day,
      year: LEAP_YEAR,
    },
    DateFormat.FullDate
  ),
  endDate: buildDateFromParts(
    {
      month: sign.end.month,
      day: sign.end.day,
      year: LEAP_YEAR,
    },
    DateFormat.FullDate
  ),
  iconDir: icons[sign.signType as SignType],
  imageDir: images[sign.signType as SignType],
}));

export const GlobalContext = createContext<IGlobalContext>({
  signs: [],
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const contextValue = {
    signs: signs,
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};
