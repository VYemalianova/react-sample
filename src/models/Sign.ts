export interface ISign {
  id: string;
  signType: SignType;
  startDate: Date;
  endDate: Date;
  icon: string;
  img: string;
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
