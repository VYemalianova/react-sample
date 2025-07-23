import { isRouteErrorResponse, Link, useRouteError } from 'react-router';

import errorImg from '@assets/error.png';

import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const error = useRouteError() as Error;

  let title = 'Something went wrong...';
  let message = 'An unexpected error occurred.';

  if (isRouteErrorResponse(error)) {
    title = `${error.status} — ${error.statusText}`;
    message = error.data?.message || "Sorry, we couldn't find that page.";
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className={`content-wrapper ${styles['content-wrapper']}`}>
      <div className={styles['content']}>
        <img src={errorImg} alt="error" />
        <div className={styles['content-block']}>
          <h2>OOPS! {title}</h2>
          <p className="color-manatee">{message}</p>

          <div>
            Please{' '}
            <Link to="/home" className="link__underline">
              go back to the homepage
            </Link>{' '}
            and try again.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
