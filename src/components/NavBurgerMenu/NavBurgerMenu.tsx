import { Link, useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, List, ListItemButton, ListItemText } from '@mui/material';

import { GlobalContext } from '@store/context';
import { HoroscopeType } from '@models/horoscope.model';
import type { IDropdownOption } from '@models/dropdownOption.model';
import { SignType } from '@models/sign.model';
import { getFormattedDateRange } from '@utils/dateUtils';

import styles from './NavBurgerMenu.module.scss';
import ToggleListButton from '../common/ToggleListButton/ToggleListButton';
import Logo from '../common/Logo/Logo';

const NavBurgerMenu = () => {
  const navigate = useNavigate();

  const { signs } = useContext(GlobalContext);
  const signItems = signs.map((sign) => ({
    id: sign.id,
    value: sign.signType as SignType,
    icon: sign.iconDir,
    info: `(${getFormattedDateRange(sign.startDate, sign.endDate)})`,
  }));

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = (type: HoroscopeType, item: IDropdownOption): void => {
    navigate(`horoscope/${type}/${item.value}`, { state: { id: item.id, type } });
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <IconButton onClick={toggleMenu} className={styles['burger-button']}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
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
        className={`${styles.menu} ${isOpen ? styles.open : ''}`}
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton component={Link} to="/horoscope/daily" onClick={toggleMenu}>
          <ListItemText primary="Daily Horoscope" />
        </ListItemButton>

        <ListItemButton component={Link} to="/horoscope/love" onClick={toggleMenu}>
          <ListItemText primary="Love Horoscope" />
        </ListItemButton>

        <ToggleListButton
          label="Daily Sign Horoscope"
          menuItems={signItems}
          menuItemClick={(option) => handleMenuItemClick(HoroscopeType.daily, option)}
        />

        <ToggleListButton
          label="Daily Love Horoscope"
          menuItems={signItems}
          menuItemClick={(option) => handleMenuItemClick(HoroscopeType.love, option)}
        />

        <div className="mt-s ml-m">
          <Logo onClick={toggleMenu} />
        </div>
      </List>
    </>
  );
};

export default NavBurgerMenu;
