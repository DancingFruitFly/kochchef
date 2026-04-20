import { useAuthStore } from '@/stores/auth';

export async function apiFetch(
  input: RequestInfo | URL,
  init: RequestInit = {},
) {
  const auth = useAuthStore();

  const headers = new Headers(init.headers || {});

  if (auth.token) {
    headers.set('Authorization', `Bearer ${auth.token}`);
  }

  if (!headers.has('Content-Type') && !(init.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(input, {
    ...init,
    headers,
  });

  if (response.status === 401) {
    auth.logout();
  }

  return response;
}