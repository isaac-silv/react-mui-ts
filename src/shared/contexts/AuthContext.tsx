import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AuthService } from '../services/api/auth/AuthService';
import { useSnackBar } from './SnackBarContext';

interface IAuthContextData {
  isAuthenticated: boolean,
  login:  (email: string, password: string) => Promise<string | void>
  logout: () => void
}

interface IAuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext({} as IAuthContextData);


export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {

  const { showSnackBar } = useSnackBar();

  const [acessToken, setAcessToken] = useState<string>();

  const isAuthenticated = useMemo(() => !!acessToken, [acessToken]);

  useEffect(() => {
    const acessToken = localStorage.getItem('KEY');

    if(acessToken) {
      setAcessToken(acessToken);
    } else {
      setAcessToken(undefined);
    }
  }, []);

  const handleLogin = useCallback(async (email: string, password: string) => {
    const data = await AuthService.auth(email, password);

    if(data instanceof Error){
      console.log(data.message);
      return data.message;
    } else {
      localStorage.setItem('KEY', JSON.stringify(data.token));
      setAcessToken(data.token);
      showSnackBar('Bem vindo', 'success');
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('KEY');
    setAcessToken(undefined);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
