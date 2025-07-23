import { useContext } from 'react';
import { Avatar } from '@mui/material';
import dayjs from 'dayjs';

import { GlobalContext } from '@store/globalContext';
import { getFormattedDateRange } from '@utils/dateUtils';
import type { HoroscopeType } from '@models/horoscope.model';
import { DateFormat } from '@models/date.types';

import styles from './HoroscopeBanner.module.scss';

interface IProps {
  type: HoroscopeType;
  date?: Date;
}

const HoroscopeBanner = ({ type, date }: IProps) => {
  const { signs } = useContext(GlobalContext);

  return (
    <div className={`${styles['sign-banner']} gradient--selago-wisppink`}>
      <h1 className="gradient--text text-capitalize text-center mt-s">{type} Horoscopes</h1>
      {date && (
        <span className="text-caps color-gun-powder">
          {dayjs(date).format(DateFormat.MonthDayShort)}
        </span>
      )}
      <span className={`${styles.subtitle} color-gun-powder text-center`}>
        Choose your sign to read your horoscope
      </span>

      <div className={`${styles['signs-grid']}`}>
        {signs.map((sign) => (
          <div key={sign.id} className={styles['sign-item']}>
            <Avatar alt={sign.signType} src={sign.imageDir} sx={{ width: 67, height: 67 }} />
            <span className={styles['type']}>{sign.signType}</span>
            <span className={styles['date']}>
              {getFormattedDateRange(sign.startDate, sign.endDate)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HoroscopeBanner;
