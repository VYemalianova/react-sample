import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Button } from '@mui/material';

import styles from './NavMenu.module.scss';

import { GlobalContext } from '@store/GlobalContext';
import { formatDate } from '@utils/dateUtils';
import { HoroscopeType } from '@models/Horoscope';
import type { IDropdownOption } from '@models/DropdownOption';
import { SIGN_TYPE_TO_NAME, SignType } from '@models/Sign';

import DropDownMenu from '../common/DropDownMenu/DropDownMenu';

const NavMenu = () => {
  const navigate = useNavigate();

  const { signs } = useContext(GlobalContext);
  const signItems = signs.map((sign) => ({
    id: sign.id,
    value: SIGN_TYPE_TO_NAME[sign.signType as SignType],
    icon: sign.icon,
    info: `(${formatDate(sign.startDate)} - ${formatDate(sign.endDate)})`,
  }));

  const handleHoroscopeNavigation = (type: HoroscopeType, item: IDropdownOption): void => {
    navigate(`${type}-horoscope/${item.value}`, { state: { id: item.id, type } });
  };

  return (
    <div className={`${styles['horoscope-nav-wrapper']} gradient--selago-wisppink`}>
      <nav className={styles['horoscope-nav']}>
        <Button component={Link} to="/daily-horoscope" sx={{ fontWeight: 700 }} variant="text">
          Daily Horoscope
        </Button>

        <Button component={Link} to="/love-horoscope" sx={{ fontWeight: 700 }} variant="text">
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
