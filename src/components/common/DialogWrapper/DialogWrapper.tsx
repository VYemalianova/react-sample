import type { ReactNode } from 'react';
import { Box, Modal } from '@mui/material';
import { useIsMobile } from '../../../hooks/useIsMobile';

interface IProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const DialogWrapper = ({ isOpen, children, onClose }: IProps) => {
  const isMobile = useIsMobile();

  const handleClose = (event: unknown, reason: 'backdropClick' | 'escapeKeyDown') => {
    if (reason === 'backdropClick') {
      return;
    }

    onClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          minWidth: 300,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: isMobile ? 0 : 2,

          ...(isMobile && {
            height: '100%',
            width: '100%',
          }),
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default DialogWrapper;
