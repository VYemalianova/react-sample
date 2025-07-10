import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

import lockImg from '@assets/lock.svg';
import emailHoroscopesImg from '@assets/email_horoscopes.svg';
import reportsReadingsImg from '@assets/free_reports_readings.svg';
import { loadIconsFromFolder } from '@utils/loadIcons';

const SOCIAL_NETWORK_LIST = ['facebook', 'instagram', 'pinterest', 'reddit', 'twitter'];

const Footer = () => {
  const icons = loadIconsFromFolder('social-icons');

  return (
    <>
      <footer className={`${styles.footer} gradient--selago-wisppink`}>
        <div className={styles['footer-content']}>
          <div className={styles['footer-left-content']}>
            <div className={styles['social-media-wrapper']}>
              <div className={styles['logo-wrapper']}>
                <img src={lockImg} />
                <span className="gradient--text uppercase">AstroYod</span>
              </div>

              <h4 className="text-caps mt-m">follow us:</h4>
              <div className={styles['social-media-icons']}>
                {SOCIAL_NETWORK_LIST.map((network, index) => (
                  <img key={index} src={icons[network]} className="cursor-pointer" />
                ))}
              </div>
            </div>

            <div className={styles['more-links-wrapper']}>
              <Link to="/about-us" className="link">
                About us
              </Link>
              <Link to="/contact-us" className="link">
                Contact us
              </Link>
              <Link to="/" className="link">
                Privacy Policy{' '}
              </Link>
              <Link to="/" className="link">
                Terms of Service{' '}
              </Link>
            </div>
          </div>

          <div className={styles['footer-right-content']}>
            <div className={styles['useful-link-wrapper']}>
              <img src={emailHoroscopesImg} />
              <a className="link">Email Horoscope</a>
            </div>
            <div className="vertical-divider"></div>
            <div className={styles['useful-link-wrapper']}>
              <img src={reportsReadingsImg} />
              <a className="link">Free Reports Readings</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
