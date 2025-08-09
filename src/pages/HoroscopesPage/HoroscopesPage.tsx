import { useParams } from 'react-router-dom';

import type { HoroscopeType } from '@models/horoscope.model';
import SignsBanner from '@components/SignsBanner/SignsBanner';
import HoroscopeDashboard from '@components/HoroscopeDashboard/HoroscopeDashboard';

const Horoscopes = () => {
  const { type } = useParams<{ type: HoroscopeType }>();

  return (
    <div>
      <SignsBanner type={type!} />
      <HoroscopeDashboard />
    </div>
  );
};

export default Horoscopes;
