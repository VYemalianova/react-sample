import { localStorageKeys } from '@models/localStorageKeys';

const host = 'http://localhost:3000';

export const apiFetch = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  const token = localStorage.getItem(localStorageKeys.TOKEN_KEY);

  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(`${host}/${url}`, { ...options, headers });

  if (response.status === 401) {
    window.dispatchEvent(new Event('auth:logout'));

    throw new Error('Unauthorized.');
  }

  if (!response.ok) {
    throw new Error('Something went wrong. Please try again later.');
  }

  return response.json();
};
