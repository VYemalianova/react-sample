import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

import lockImg from '@assets/lock.svg';

const Logo = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link to="/" className={`${styles['logo']} link`} onClick={onClick}>
      <img src={lockImg} />
      <span className="gradient--text uppercase">AstroYod</span>
    </Link>
  );
};

export default Logo;
