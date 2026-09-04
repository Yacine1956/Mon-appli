import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setLoading(false);
      return;
    }

    api.get('/api/me')
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        localStorage.removeItem('token');
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function login(email, password) {
    const res = await api.post('/api/login', {
      email,
      password,
    });

    localStorage.setItem('token', res.data.token);
    setUser(res.data.user);
  }

  async function logout() {
    try {
      await api.post('/api/logout');
    } finally {
      localStorage.removeItem('token');
      setUser(null);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}