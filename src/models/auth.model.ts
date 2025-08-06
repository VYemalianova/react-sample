export type AuthMode = 'signup' | 'login';

export interface IAuthForm {
  email: string;
  password: string;
  confirmPassword?: string;
}
