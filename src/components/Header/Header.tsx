import { Button } from '@mui/material';
import FlareIcon from '@mui/icons-material/Flare';

import styles from './Header.module.scss';

import NavBurgerMenu from '../NavBurgerMenu/NavBurgerMenu';
import Logo from '../common/Logo/Logo';
import { useIsMobile } from '../../hooks/useIsMobile';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className={`${styles.header} gradient--moonraker-remy`}>
      <div className={styles['header-content']}>
        {isMobile && <NavBurgerMenu />}

        {!isMobile && <Logo />}

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
