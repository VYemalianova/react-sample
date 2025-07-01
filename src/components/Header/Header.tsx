import { Button } from '@mui/material';
import FlareIcon from '@mui/icons-material/Flare';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={`${styles.header} gradient--moonraker-remy`}>
      <div className={styles['header-content']}>
        <div className={styles['logo-wrapper']}>
          <img src="./src/assets/lock.svg" />
          <span className="gradient--text">AstroYod</span>
        </div>

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
