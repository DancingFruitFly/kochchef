import { defineStore } from 'pinia';

type AuthUser = {
  id: string;
  email: string;
  username: string;
  role: 'admin' | 'standard'
};

type LoginResponse = {
  access_token: string;
  user: AuthUser;
};

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: null as AuthUser | null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === 'admin',
  },

  actions: {
    setAuth(data: LoginResponse) {
      this.token = data.access_token;
      this.user = data.user;
      localStorage.setItem('token', data.access_token);
    },

    logout() {
      this.token = '';
      this.user = null;
      localStorage.removeItem('token');
    },

    async login(email: string, password: string) {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data: LoginResponse = await response.json();
      this.setAuth(data);
      return data;
    },

    async register(username: string, email: string, password: string) {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error('Register failed');
      }

      const data: LoginResponse = await response.json();
      this.setAuth(data);
      return data;
    },

    async fetchMe() {
      if (!this.token) return null;

      const response = await fetch('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      if (!response.ok) {
        this.logout();
        return null;
      }

      const data = await response.json();
      this.user = {
        id: data.userId,
        email: data.email,
        username: data.username,
        role: data.role
      };

      return this.user;
    },
  },
});