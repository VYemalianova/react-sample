import { useState } from 'react';
import { Avatar, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import type { IDropdownOption } from '@models/dropdownOption.model';

import styles from './ToggleListButton.module.scss';

const ToggleListButton = ({
  label,
  menuItems,
  menuItemClick,
}: {
  label: string;
  menuItems: Array<IDropdownOption>;
  menuItemClick: (option: IDropdownOption) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => setIsOpen((prev) => !prev);

  return (
    <>
      <ListItemButton onClick={toggleList}>
        <ListItemText primary={label} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {menuItems.map((item) => (
          <List component="div" disablePadding key={item.id}>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                toggleList();
                menuItemClick(item);
              }}
            >
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
          </List>
        ))}
      </Collapse>
    </>
  );
};

export default ToggleListButton;
