import { Link, type LinkProps } from 'react-router';
import { Avatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import type { IDropdownOption } from '../../../models/dropdownOption.model';

import styles from './NavListItem.module.scss';

interface IProps extends LinkProps {
  item: IDropdownOption;
  onClick: () => void;
}

const NavListItem = ({ item, ...rest }: IProps) => {
  return (
    <ListItemButton sx={{ pl: 4 }} component={Link} {...rest}>
      {item.icon && (
        <ListItemIcon>
          <Avatar
            alt={item.value}
            src={item.icon}
            sx={{
              background: 'linear-gradient(to right, #630cd2, #f95f86)',
            }}
          />
        </ListItemIcon>
      )}
      <ListItemText>
        <div className={styles['menu-item__content']}>
          <span className={styles['menu-item__value']}>{item.value}</span>
          {item.info && <span className={styles['menu-item__info']}>{item.info}</span>}
        </div>
      </ListItemText>
    </ListItemButton>
  );
};

export default NavListItem;
