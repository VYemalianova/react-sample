import { Button } from '@mui/material';
import FlareIcon from '@mui/icons-material/Flare';

import { useIsMobile } from '@hooks/useIsMobile';

import styles from './Header.module.scss';
import NavBurgerMenu from '../NavBurgerMenu/NavBurgerMenu';
import Logo from '../common/Logo/Logo';
import { useContext } from 'react';
import { GlobalContext } from '../../store/globalContext';

const Header = ({ onSignUp }: { onSignUp: () => void }) => {
  const isMobile = useIsMobile();
  const { user } = useContext(GlobalContext);

  return (
    <header className={`${styles.header} gradient--moonraker-remy`}>
      <div className={styles['header-content']}>
        {isMobile && <NavBurgerMenu />}

        {!isMobile && <Logo />}

        <div className={styles['btns-wrapper']}>
          {!user && (
            <Button variant="dark" onClick={onSignUp}>
              Sign In
            </Button>
          )}
          <Button variant="gradient" endIcon={<FlareIcon />}>
            Live Psychics
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
