import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Button } from '@mui/material';

import { GlobalContext } from '@store/globalContext';
import { getFormattedDateRange } from '@utils/dateUtils';
import { HoroscopeType } from '@models/horoscope.model';
import type { IDropdownOption } from '@models/dropdownOption.model';
import { SignType } from '@models/sign.model';

import styles from './NavMenu.module.scss';
import DropDownMenu from '../common/DropDownMenu/DropDownMenu';

const NavMenu = () => {
  const navigate = useNavigate();

  const { signs } = useContext(GlobalContext);
  const signItems = signs.map((sign) => ({
    id: sign.id,
    value: sign.signType as SignType,
    icon: sign.iconDir,
    info: `(${getFormattedDateRange(sign.startDate, sign.endDate)}})`,
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
