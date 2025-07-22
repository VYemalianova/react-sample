import { createContext, type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

import signsData from '@data/signs.json';
import { SignType, type ISign } from '@models/sign';
import { loadIconsFromFolder } from '@utils/LoadIcons';

interface IGlobalContext {
  signs: ISign[];
}

const icons = loadIconsFromFolder('sign-icons');
const images = loadIconsFromFolder('sign-images');
const signs = signsData.map((sign) => ({
  id: uuidv4(),
  signType: sign.signType as SignType,
  startDate: new Date(sign.startDate),
  endDate: new Date(sign.endDate),
  icon: icons[sign.signType as SignType],
  img: images[sign.signType as SignType],
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
