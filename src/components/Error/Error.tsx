import { Link } from 'react-router-dom';
import styles from './Error.module.scss';

interface IProps {
  title: string;
  message: string;
}

const ErrorScreen = ({ title, message }: IProps) => {
  return (
    <div className={styles['error']}>
      <h2>{title}</h2>
      <p>{message}</p>
      <div>
        Please{' '}
        <Link to="/home" className="link__underline">
          go back to the homepage
        </Link>{' '}
        and try again.
      </div>
    </div>
  );
};

export default ErrorScreen;
