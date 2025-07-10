import { createContext, type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

import signsData from '@data/signs.json';
import { SIGN_TYPE_TO_NAME, SignType, type ISign } from '@models/Sign';
import { loadIconsFromFolder } from '../utils/loadIcons';

interface IGlobalContext {
  signs: ISign[];
}

const icons = loadIconsFromFolder('sign-icons');
const images = loadIconsFromFolder('sign-images');
const signs = signsData.map((sign) => ({
  id: uuidv4(),
  signType: sign.signType,
  startDate: new Date(sign.startDate),
  endDate: new Date(sign.endDate),
  icon: icons[SIGN_TYPE_TO_NAME[sign.signType as SignType]],
  img: images[SIGN_TYPE_TO_NAME[sign.signType as SignType]],
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
