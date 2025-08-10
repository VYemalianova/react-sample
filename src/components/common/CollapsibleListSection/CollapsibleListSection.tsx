import { useEffect, useState, type ReactNode } from 'react';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface IProps {
  label: string;
  isListCollapse: boolean;
  children: ReactNode;
}

const CollapsibleListSection = ({ label, isListCollapse, children }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isListCollapse) {
      setIsOpen(false);
    }
  }, [isListCollapse]);

  const handleToggleList = () => setIsOpen(!isOpen);

  return (
    <>
      <ListItemButton onClick={handleToggleList}>
        <ListItemText primary={label} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  );
};

export default CollapsibleListSection;
