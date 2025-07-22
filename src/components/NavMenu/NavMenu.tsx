import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Button } from '@mui/material';

import styles from './NavMenu.module.scss';

import { GlobalContext } from '@store/globalContext';
import { formatDateRangeFromParts } from '@utils/dateUtils';
import { HoroscopeType } from '@models/horoscope';
import type { IDropdownOption } from '@models/dropdownOption';
import { SignType } from '@models/sign';

import DropDownMenu from '../common/DropDownMenu/DropDownMenu';

const NavMenu = () => {
  const navigate = useNavigate();

  const { signs } = useContext(GlobalContext);
  const signItems = signs.map((sign) => ({
    id: sign.id,
    value: sign.signType as SignType,
    icon: sign.iconDir,
    info: `(${formatDateRangeFromParts(sign.start, sign.end)}})`,
  }));

  const handleHoroscopeNavigation = (type: HoroscopeType, item: IDropdownOption): void => {
    navigate(`horoscope/${type}/${item.value}`, { state: { id: item.id, type } });
  };

  return (
    <div className={`${styles['horoscope-nav-wrapper']} gradient--selago-wisppink`}>
      <nav className={styles['horoscope-nav']}>
        <Button component={Link} to="/horoscope/daily" sx={{ fontWeight: 700 }} variant="text">
          Daily Horoscope
        </Button>

        <Button component={Link} to="/horoscope/love" sx={{ fontWeight: 700 }} variant="text">
          Love Horoscope
        </Button>

        <DropDownMenu
          label="Daily Sign Horoscope"
          menuItems={signItems}
          menuItemClick={(item) => handleHoroscopeNavigation(HoroscopeType.daily, item)}
        />

        <DropDownMenu
          label="Love Sign Horoscope"
          menuItems={signItems}
          menuItemClick={(item) => handleHoroscopeNavigation(HoroscopeType.love, item)}
        />
      </nav>
    </div>
  );
};

export default NavMenu;
