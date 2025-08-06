import { useState } from 'react';

import type { AuthMode } from '@models/auth.model';

import DialogWrapper from '../../common/DialogWrapper/DialogWrapper';
import SignUpForm from '../SignUpForm/SignUpForm';
import SignInForm from '../SignInForm/SignInForm';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: IProps) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const isLogIn = mode === 'login';

  return (
    <DialogWrapper isOpen={isOpen} onClose={onClose}>
      <h2 className="text-center">{isLogIn ? 'Sign In' : 'Sign Up'}</h2>

      {isLogIn && <SignInForm onSwitchMode={setMode} onClose={onClose} />}
      {!isLogIn && <SignUpForm onSwitchMode={setMode} onClose={onClose} />}
    </DialogWrapper>
  );
};

export default AuthModal;
