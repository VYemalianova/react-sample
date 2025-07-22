import type { SignType } from './sign';

export enum HoroscopeType {
  daily = 'daily',
  weekly = 'weekly',
  monthly = 'monthly',
  yearly = 'yearly',
  love = 'love',
}

export interface IHoroscope {
  id: string;
  horoscopeType: HoroscopeType;
  signType: SignType;
  description: string;
}
