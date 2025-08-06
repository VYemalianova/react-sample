import { Button, FormControl, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import type { AuthMode, IAuthForm } from '@models/auth.model';

import styles from './AuthForm.module.scss';

interface IProps {
  mode: AuthMode;
  handleSubmit: (values: IAuthForm) => void;
  onCancel: () => void;
}

const AuthForm = ({ mode, handleSubmit, onCancel }: IProps) => {
  const isSignup = mode === 'signup';

  const AuthValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Min 6 characters').required('Required'),
    ...(isSignup && {
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required('Required'),
    }),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      ...(isSignup && { confirmPassword: '' }),
    },
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
    validationSchema: AuthValidationSchema,
  });

  return (
    <div className="">
      <form className={styles['form-wrapper']} onSubmit={formik.submitForm}>
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

        {isSignup && (
          <FormControl fullWidth size="small" error={Boolean(formik.errors.confirmPassword)}>
            <TextField
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              label="Confirm Password"
              onChange={formik.handleChange}
              error={Boolean(formik.errors.confirmPassword)}
              helperText={formik.errors.confirmPassword ? formik.errors.confirmPassword : ' '}
            />
          </FormControl>
        )}

        <div className="btn-actions">
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>

          <Button type="submit" variant="light" disabled={formik.isSubmitting || !formik.isValid}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
