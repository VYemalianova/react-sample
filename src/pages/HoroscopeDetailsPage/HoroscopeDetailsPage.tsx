import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar } from '@mui/material';
import Lottie from 'lottie-react';
import dayjs from 'dayjs';

import dotsloader from '@assets/dotsloader.json';
import { fetchHoroscope } from '@services/horoscope.service';
import { useFetch } from '@hooks/useFetch';
import { DateFormat } from '@models/date.types';
import { HoroscopeType } from '@models/horoscope.model';
import { getFormattedDateRange } from '@utils/dateUtils';
import { GlobalContext } from '@store/globalContext';
import HoroscopeBanner from '@components/HoroscopeBanner/HoroscopeBanner';
import ErrorScreen from '@components/Error/Error';

import styles from './HoroscopeDetailsPage.module.scss';

const HoroscopeDetailsPage = () => {
  const params = useParams<{ type: string; sign: string }>();

  const { signs } = useContext(GlobalContext);

  const {
    fetchedData: horoscope,
    isLoading,
    error,
  } = useFetch(fetchHoroscope, params.type!, params.sign!);

  const sign = signs.find((sign) => sign.signType === horoscope?.signType)!;

  if (error) {
    return <ErrorScreen title="Error occurred" message={error} />;
  }

  if (isLoading) {
    return (
      <div className={`${styles['loading-wrapper']} content-wrapper `}>
        <span>Loading</span>
        <Lottie animationData={dotsloader} loop={true} />
      </div>
    );
  }

  return (
    horoscope && (
      <div className={styles['horoscope-page']}>
        <div className="gradient--selago-wisppink">
          <div className={`content-wrapper ${styles['horoscope-page-header']}`}>
            <div>
              <h1 className="gradient--text text-capitalize">
                {horoscope.signType} {horoscope.horoscopeType === HoroscopeType.love && 'Daily'}{' '}
                {horoscope.horoscopeType} Horoscopes
              </h1>

              <div className="text-caps mt-m">
                {horoscope.horoscopeType === HoroscopeType.daily && (
                  <span>Today: {dayjs(horoscope.startDate).format(DateFormat.FullDayDate)}</span>
                )}

                {horoscope.horoscopeType === HoroscopeType.love && (
                  <span>Today: {dayjs(horoscope.startDate).format(DateFormat.FullDayDate)}</span>
                )}

                {horoscope.horoscopeType !== HoroscopeType.daily &&
                  horoscope.horoscopeType !== HoroscopeType.love && (
                    <span>
                      {horoscope.horoscopeType}:{' '}
                      {getFormattedDateRange(
                        horoscope.startDate,
                        horoscope.endDate,
                        DateFormat.FullDayDate
                      )}
                    </span>
                  )}
              </div>
            </div>

            <Avatar alt={sign.signType} src={sign.imageDir} sx={{ width: 99, height: 99 }} />
          </div>
        </div>

        <div className={`content-wrapper ${styles['description']}`}>
          <p>{horoscope.description}</p>
        </div>

        <HoroscopeBanner type={params.type as HoroscopeType} isHeaderHidden />
      </div>
    )
  );
};

export default HoroscopeDetailsPage;
