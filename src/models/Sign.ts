export interface ISign {
  id: string;
  signType: SignType;
  startDate: Date;
  endDate: Date;
  icon: string;
  img: string;
}

export enum SignType {
  aries = 1,
  taurus,
  gemini,
  cancer,
  leo,
  virgo,
  libra,
  scorpio,
  sagittarius,
  capricorn,
  aquarius,
  pisces,
}

export const SIGN_TYPE_TO_NAME: Record<SignType, string> = {
  [SignType.aries]: 'aries',
  [SignType.taurus]: 'taurus',
  [SignType.gemini]: 'gemini',
  [SignType.cancer]: 'cancer',
  [SignType.leo]: 'leo',
  [SignType.virgo]: 'virgo',
  [SignType.libra]: 'libra',
  [SignType.scorpio]: 'scorpio',
  [SignType.sagittarius]: 'sagittarius',
  [SignType.capricorn]: 'capricorn',
  [SignType.aquarius]: 'aquarius',
  [SignType.pisces]: 'pisces',
};
