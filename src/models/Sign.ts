import type { IDatePart } from './datePart';

export interface ISign {
  id: string;
  signType: SignType;
  planet: string;
  traits: string[];
  fact: string;
  start: IDatePart;
  end: IDatePart;
  iconDir: string;
  imageDir: string;
}

export enum SignType {
  aries = 'aries',
  taurus = 'taurus',
  gemini = 'gemini',
  cancer = 'cancer',
  leo = 'leo',
  virgo = 'virgo',
  libra = 'libra',
  scorpio = 'scorpio',
  sagittarius = 'sagittarius',
  capricorn = 'capricorn',
  aquarius = 'aquarius',
  pisces = 'pisces',
}
