import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

import styles from './DropDownMenu.module.scss';

import type { IDropdownOption } from '@models/dropdownOption.model';

interface IProps {
  label: string;
  menuItems: Array<IDropdownOption>;
  menuItemClick: (option: IDropdownOption) => void;
}

const DropDownMenu = ({ label, menuItems, menuItemClick }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuItemClick = (option: IDropdownOption) => {
    setAnchorEl(null);
    menuItemClick(option);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls={open ? 'grouped-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{ fontWeight: 700 }}
        variant="text"
      >
        {label}
      </Button>

      <Menu id="lock-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item) => (
          <MenuItem key={item.id} onClick={() => handleMenuItemClick(item)}>
            <div className={styles['menu-item']}>
              {item.icon && (
                <Avatar
                  alt={item.value}
                  src={item.icon}
                  sx={{
                    background: 'linear-gradient(to right, #630cd2, #f95f86)',
                  }}
                />
              )}

              <div className={styles['menu-item__content']}>
                <span className={styles['menu-item__value']}>{item.value}</span>
                {item.info && <span className={styles['menu-item__info']}>{item.info}</span>}
              </div>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropDownMenu;
