import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, FormControl, TextField } from '@mui/material';

import type { AuthMode, IAuthForm } from '@models/auth.model';
import { loginUser } from '@services/auth.service';
import { GlobalContext } from '@store/globalContext';

import styles from './SignInForm.module.scss';

interface IProps {
  onSwitchMode: (mode: AuthMode) => void;
  onClose: () => void;
}

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Min 6 characters').required('Required'),
});

const SignInForm = ({ onSwitchMode, onClose }: IProps) => {
  const { setAuthData } = useContext(GlobalContext);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => handleSubmit(values),
    validationSchema: SignInValidationSchema,
  });

  const handleSubmit = async (values: IAuthForm) => {
    try {
      const data = await loginUser({ email: values.email, password: values.password });

      if (data) {
        setAuthData(data.user, data.token);
      }

      onClose();
    } catch (error: unknown) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong! Please try again.'
      );
    }
  };

  return (
    <div>
      <div className={`${styles['mode-switcher-wrapper']} mt-m mb-m`}>
        Don't have an account?{' '}
        <Button onClick={() => onSwitchMode('signup')} variant="text">
          <span className="text-caps">Sign up</span>
        </Button>
      </div>

      {errorMessage && <div className="mt-m mb-m color-red">{errorMessage}</div>}

      <form className={styles['form-wrapper']} onSubmit={formik.handleSubmit}>
        <FormControl fullWidth size="small" error={Boolean(formik.errors.email)}>
          <TextField
            type="email"
            name="email"
            value={formik.values.email}
            label="Email"
            onChange={formik.handleChange}
            error={Boolean(formik.errors.email)}
            helperText={formik.errors?.email ? formik.errors.email : ' '}
          />
        </FormControl>

        <FormControl fullWidth size="small" error={Boolean(formik.errors.password)}>
          <TextField
            type="password"
            name="password"
            value={formik.values.password}
            label="Password"
            onChange={formik.handleChange}
            error={Boolean(formik.errors.password)}
            helperText={formik.errors.password ? formik.errors.password : ' '}
          />
        </FormControl>

        <div className="btn-actions">
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit" variant="light" disabled={formik.isSubmitting || !formik.isValid}>
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
