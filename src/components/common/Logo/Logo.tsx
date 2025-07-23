import { Link } from 'react-router-dom';

import lockImg from '@assets/lock.svg';

import styles from './Logo.module.scss';

const Logo = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link to="/" className={`${styles['logo']} link`} onClick={onClick}>
      <img src={lockImg} />
      <span className="gradient--text uppercase">AstroYod</span>
    </Link>
  );
};

export default Logo;
