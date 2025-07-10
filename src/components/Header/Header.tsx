import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import FlareIcon from '@mui/icons-material/Flare';

import styles from './Header.module.scss';
import lockImg from '@assets/lock.svg';
import BurgerMenu from '../common/BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <header className={`${styles.header} gradient--moonraker-remy`}>
      <div className={styles['header-content']}>
        <div className={styles['burger-menu']}>
          <BurgerMenu />
        </div>

        <Link to="/" className={`${styles['logo-wrapper']} link`}>
          <img src={lockImg} />
          <span className="gradient--text uppercase">AstroYod</span>
        </Link>

        <div className={styles['btns-wrapper']}>
          <Button variant="dark">Sign Up</Button>
          <Button variant="gradient" endIcon={<FlareIcon />}>
            Live Psychics
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
