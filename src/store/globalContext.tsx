import { createContext, useEffect, useState, type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

import signsData from '@data/signs.json';
import { SignType, type ISign } from '@models/sign.model';
import { DateFormat } from '@models/date.types';
import { loadIconsFromFolder } from '@utils/loadIcons';
import { buildDateFromParts } from '@utils/dateUtils';
import type { IUser } from '../models/user.model';
import { localStorageKeys } from '../models/localStorageKeys';

interface IGlobalContext {
  signs: ISign[];
  user: IUser | null;
  setAuthData: (user: IUser, token: string) => void;
  clearAuthData: () => void;
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
  user: null,
  setAuthData: () => {},
  clearAuthData: () => {},
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(localStorageKeys.USER_KEY);

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('auth:logout', clearAuthData);

    return () => window.removeEventListener('auth:logout', clearAuthData);
  }, []);

  const setAuthData = (user: IUser, token: string) => {
    localStorage.setItem(localStorageKeys.USER_KEY, JSON.stringify(user));
    localStorage.setItem(localStorageKeys.TOKEN_KEY, token);

    setUser(user);
  };

  const clearAuthData = () => {
    localStorage.removeItem(localStorageKeys.USER_KEY);
    localStorage.removeItem(localStorageKeys.TOKEN_KEY);

    setUser(null);
  };

  const contextValue = {
    signs,
    user,
    setAuthData,
    clearAuthData,
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};
