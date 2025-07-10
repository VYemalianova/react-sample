import { Link, useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, List, ListItemButton, ListItemText } from '@mui/material';
import { GlobalContext } from '@store/GlobalContext';
import { formatDate } from '@utils/dateUtils';
import { HoroscopeType } from '@models/Horoscope';
import type { IDropdownOption } from '@models/DropdownOption';
import { SIGN_TYPE_TO_NAME, SignType } from '@models/Sign';

import styles from './BurgerMenu.module.scss';
import ToggleListButton from '../ToggleListButton/ToggleListButton';

const BurgerMenu = () => {
  const navigate = useNavigate();

  const { signs } = useContext(GlobalContext);
  const signItems = signs.map((sign) => ({
    id: sign.id,
    value: SIGN_TYPE_TO_NAME[sign.signType as SignType],
    icon: sign.icon,
    info: `(${formatDate(sign.startDate)} - ${formatDate(sign.endDate)})`,
  }));

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = (type: HoroscopeType, item: IDropdownOption): void => {
    navigate(`${type}-horoscope/${item.value}`, { state: { id: item.id, type } });
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
          background: 'linear-gradient(to right, #e8dbf8, #fee7ed)',
          position: 'fixed',
          padding: '8px 0',
        }}
        component="nav"
        className={`${styles.menu} ${isOpen ? styles.open : ''}`}
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton component={Link} to="/daily-horoscope" onClick={toggleMenu}>
          <ListItemText primary="Daily Horoscope" />
        </ListItemButton>

        <ListItemButton component={Link} to="/love-horoscope" onClick={toggleMenu}>
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
      </List>
    </>
  );
};

export default BurgerMenu;
