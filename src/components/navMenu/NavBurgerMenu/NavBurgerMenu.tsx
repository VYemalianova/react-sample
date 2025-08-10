import { Link } from 'react-router';
import { useCallback, useContext, useMemo, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, List, ListItemButton, ListItemText } from '@mui/material';

import { GlobalContext } from '@store/globalContext';
import { HoroscopeType } from '@models/horoscope.model';
import { SignType } from '@models/sign.model';
import { getFormattedDateRange } from '@utils/dateUtils';

import styles from './NavBurgerMenu.module.scss';
import CollapsibleListSection from '../../common/CollapsibleListSection/CollapsibleListSection';
import Logo from '../../common/Logo/Logo';
import NavListItem from '../NavListItem/NavListItem';

const NavBurgerMenu = () => {
  const { signs, user } = useContext(GlobalContext);
  const signMenuOptions = useMemo(
    () =>
      signs.map((sign) => ({
        id: sign.id,
        value: sign.signType as SignType,
        icon: sign.iconDir,
        info: `(${getFormattedDateRange(sign.startDate, sign.endDate)})`,
      })),
    [signs]
  );
  const horoscopeTypeMenuOptions = useMemo(
    () =>
      Object.entries(HoroscopeType).map(([key, value]) => ({
        id: key,
        value,
      })),
    [HoroscopeType]
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [setIsMenuOpen]);

  return (
    <>
      <IconButton onClick={handleToggleMenu} className={styles['burger-button']}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      <List
        sx={{
          width: '100%',
          height: 'calc(100vh - 69px)',
          background: 'linear-gradient(to right, #e8dbf8, #fee7ed)',
          position: 'fixed',
          top: '69px',
          padding: '8px 0',
          overflow: 'auto',
        }}
        component="nav"
        className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}
        aria-labelledby="nested-list-subheader"
      >
        {!user && (
          <>
            <ListItemButton component={Link} to="/horoscope/daily" onClick={handleToggleMenu}>
              <ListItemText primary="Daily Horoscope" />
            </ListItemButton>

            <ListItemButton component={Link} to="/horoscope/love" onClick={handleToggleMenu}>
              <ListItemText primary="Love Horoscope" />
            </ListItemButton>
          </>
        )}

        {user && (
          <CollapsibleListSection label="Horoscope Type" isListCollapse={!isMenuOpen}>
            {horoscopeTypeMenuOptions.map((item) => (
              <NavListItem
                key={item.id}
                item={item}
                to={`horoscope/${item.value}`}
                onClick={handleToggleMenu}
              />
            ))}
          </CollapsibleListSection>
        )}

        <CollapsibleListSection label="Daily Sign Horoscope" isListCollapse={!isMenuOpen}>
          {signMenuOptions.map((item) => (
            <NavListItem
              key={item.id}
              item={item}
              to={`horoscope/${HoroscopeType.daily}/${item.value}`}
              state={{ id: item.id, type: HoroscopeType.daily }}
              onClick={handleToggleMenu}
            />
          ))}
        </CollapsibleListSection>

        <CollapsibleListSection label="Love Sign Horoscope" isListCollapse={!isMenuOpen}>
          {signMenuOptions.map((item) => (
            <NavListItem
              key={item.id}
              item={item}
              to={`horoscope/${HoroscopeType.love}/${item.value}`}
              state={{ id: item.id, type: HoroscopeType.daily }}
              onClick={handleToggleMenu}
            />
          ))}
        </CollapsibleListSection>

        <div className="mt-s ml-m">
          <Logo onClick={handleToggleMenu} />
        </div>
      </List>
    </>
  );
};

export default NavBurgerMenu;
