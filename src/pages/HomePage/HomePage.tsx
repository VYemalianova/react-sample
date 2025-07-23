import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import HoroscopeBanner from '@components/HoroscopeBanner/HoroscopeBanner';
import HoroscopeDashboard from '@components/HoroscopeDashboard/HoroscopeDashboard';
import { HoroscopeType } from '@models/horoscope.model';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const aboutUsSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (location.state?.scrollTo === 'about-us' && aboutUsSectionRef) {
      aboutUsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });

      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div>
      <HoroscopeBanner type={HoroscopeType.daily} />
      <HoroscopeDashboard />

      <div
        ref={aboutUsSectionRef}
        className={`content-wrapper color-gun-powder ${styles['about-us-section']}`}
      >
        <h2>About Horoscopes</h2>
        <p>
          Astrology.com is the leading astrology media brand. With personalized readings and a vast
          library of astrology information, our site has the most to offer for beginners, learners,
          and professionals alike.
        </p>

        <p>
          Astrology.com offers cutting edge content, fresh daily horoscopes, detailed astrology
          reports, and a hyper-personalized subscription service, Astrology+. Coming from a team who
          loves astrology as much as you do, Astrology+ is the first service to offer real-time
          transit notifications, birth chart analysis, live Q&As, and personalized moon reports —
          all in one place!
        </p>
      </div>
    </div>
  );
};
export default HomePage;
