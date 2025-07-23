import { useParams } from 'react-router-dom';

import type { HoroscopeType } from '@models/horoscope.model';
import HoroscopeBanner from '@components/HoroscopeBanner/HoroscopeBanner';

const Horoscopes = () => {
  const { type } = useParams<{ type: HoroscopeType }>();

  return (
    <div>
      <HoroscopeBanner type={type!} />
    </div>
  );
};

export default Horoscopes;
