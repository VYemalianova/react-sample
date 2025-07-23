import type { ReactNode } from 'react';
import { Box, Button, Modal } from '@mui/material';

import styles from './Popup.module.scss';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
}

const Popup = ({ isOpen, handleClose, children }: IProps) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          minWidth: 600,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {children}
        <div className={styles['btns-wrapper']}>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Popup;
