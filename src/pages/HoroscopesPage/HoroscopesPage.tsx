import { useParams } from 'react-router-dom';

import type { HoroscopeType } from '@models/horoscope.model';
import HoroscopeBanner from '@components/HoroscopeBanner/HoroscopeBanner';
import HoroscopeDashboard from '@components/HoroscopeDashboard/HoroscopeDashboard';

const Horoscopes = () => {
  const { type } = useParams<{ type: HoroscopeType }>();

  return (
    <div>
      <HoroscopeBanner type={type!} />
      <HoroscopeDashboard />
    </div>
  );
};

export default Horoscopes;
