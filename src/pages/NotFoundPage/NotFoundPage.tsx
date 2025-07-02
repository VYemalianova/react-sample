import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles['page-content-wrapper']}>
      <div>
        <img src="./src/assets/404.svg" />
      </div>

      <div className={styles['content-block']}>
        <div>
          <h2 className={styles['content-title']}>OOPS! Page Not Found</h2>
          <span className="color-gun-powder">
            This page may have been moved, renamed, or it no longer exists.
          </span>
        </div>

        <div className={styles['first-list']}>
          <h4 className="uppercase-title">Try to do:</h4>
          <ul>
            <li>
              <span>Follow the menu links at the top of the page</span>
            </li>
            <li>
              <span>
                Open the main page{' '}
                <Link to="/" className="link">
                  AstroYod
                </Link>
              </span>
            </li>
          </ul>
        </div>

        <div className={styles['second-list']}>
          <h4 className="uppercase-title">You may also like:</h4>
          <ul>
            <li>
              <span>
                To read{' '}
                <Link to="/daily-horoscope" className="link">
                  Daily Horoscope
                </Link>
              </span>
            </li>
            <li>
              <span>
                To read{' '}
                <Link to="/love-horoscope" className="link">
                  Love Horoscope
                </Link>
              </span>
            </li>
            <li>
              <span>
                To receive your Horoscopes by email for free!{' '}
                <Link to="/" className="link">
                  Sign up now
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
