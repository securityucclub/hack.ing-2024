import { type AxiosResponse } from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from './axiosHelper';

interface AuthContextType {
  isAuthed: boolean | null;
  setIsAuthed: React.Dispatch<React.SetStateAction<boolean | null>>;
  login: (accessToken: string, refreshToken?: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface IsAuthedProps {
  authenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchAuthStatus = async () => {


      try {
        const response: AxiosResponse<IsAuthedProps> = await axiosInstance.get(
          `/user/is_authed/`,
        );

        setIsAuthed(response.data.authenticated);
      } catch (error) {
        console.log('Error fetching user information:', error);
      }
    };

    void fetchAuthStatus();
  }, []);

  const login = (accessToken: string, refreshToken?: string) => {
    localStorage.setItem('access_token', accessToken);
    if (refreshToken !== undefined) {
      localStorage.setItem('refresh_token', refreshToken);
    }

    setIsAuthed(true);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    setIsAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthed, setIsAuthed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
