import type { IAuthResponse, IResponse } from '../models/response';
import { apiFetch } from './api.service';

export const registerUser = async (data: { email: string; password: string }) => {
  const response = (await apiFetch('auth/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  })) as IResponse<IAuthResponse>;

  if (!response.success) {
    const { errors } = response;

    throw new Error(errors && typeof errors === 'string' ? errors : 'An unknown error occurred.');
  }

  return response.data;
};

export const loginUser = async (data: { email: string; password: string }) => {
  const response = (await apiFetch('auth/signin', {
    method: 'POST',
    body: JSON.stringify(data),
  })) as IResponse<IAuthResponse>;

  if (!response.success) {
    const { errors } = response;

    throw new Error(errors && typeof errors === 'string' ? errors : 'An unknown error occurred.');
  }

  return response.data;
};
