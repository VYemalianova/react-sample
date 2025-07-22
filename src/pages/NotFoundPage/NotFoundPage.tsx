import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.scss';

import notFoundImg from '@assets/404.png';

const NotFoundPage = () => {
  return (
    <div className={`content-wrapper ${styles['content-wrapper']}`}>
      <div className={styles['content']}>
        <img src={notFoundImg} alt="Not Found" />

        <div className={styles['content-block']}>
          <div className="mb-l">
            <h2>OOPS! Page Not Found</h2>
            <span className="color-gun-powder">
              This page may have been moved, renamed, or it no longer exists.
            </span>
          </div>

          <div className={styles['first-list']}>
            <h4 className="text-caps">Try to do:</h4>
            <ul>
              <li>
                <span>Follow the menu links at the top of the page</span>
              </li>
              <li>
                <span>
                  Open the main page{' '}
                  <Link to="/" className="link__underline">
                    AstroYod
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className={styles['second-list']}>
            <h4 className="text-caps">You may also like:</h4>
            <ul>
              <li>
                <span>
                  To read{' '}
                  <Link to="/horoscope/daily" className="link__underline">
                    Daily Horoscope
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  To read{' '}
                  <Link to="/horoscope/love" className="link__underline">
                    Love Horoscope
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  To receive your Horoscopes by email for free!{' '}
                  <Link to="/" className="link__underline">
                    Sign up now
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
