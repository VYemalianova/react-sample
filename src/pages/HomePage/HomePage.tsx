import HoroscopeBanner from '@components/HoroscopeBanner/HoroscopeBanner';
import { HoroscopeType } from '@models/horoscope.model';
import HoroscopeDashboard from '../../components/HoroscopeDashboard/HoroscopeDashboard';

const HomePage = () => {
  return (
    <div>
      <HoroscopeBanner type={HoroscopeType.daily} />
      <HoroscopeDashboard />
    </div>
  );
};
export default HomePage;
