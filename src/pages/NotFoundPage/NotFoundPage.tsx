import { Link } from 'react-router-dom';

import notFoundImg from '@assets/404.png';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={`content-wrapper ${styles['page-wrapper']}`}>
      <div className={styles['page-content']}>
        <img src={notFoundImg} alt="Not Found" className={styles['not-found-image']} />

        <div className={styles['content-block']}>
          <div className="mb-l">
            <h2>OOPS! Page Not Found</h2>
            <span className="color-gun-powder">
              This page may have been moved, renamed, or it no longer exists.
            </span>
          </div>

          <div className={styles['suggestions']}>
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

          <div className={styles['recommendations']}>
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
