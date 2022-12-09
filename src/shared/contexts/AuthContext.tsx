import { Backdrop, CircularProgress } from '@mui/material';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AuthService } from '../services/api/auth/AuthService';
import { useSnackBar } from './SnackBarContext';

interface IAuthContextData {
  isAuthenticated: boolean,
  login:  (email: string, password: string) => Promise<string | void>
  logout: () => void
}


const AuthContext = createContext({} as IAuthContextData);


export const AuthProvider = ({children}: {children: JSX.Element}) => {

  const { showSnackBar } = useSnackBar();

  const [acessToken, setAcessToken] = useState<string>();
  const [ backdrop, setBackdrop ] = useState(false);

  const isAuthenticated = useMemo(() => !!acessToken, [acessToken]);

  useEffect(() => {
    setBackdrop(true);
    const valideteToken = async () => {
      const acessToken = localStorage.getItem('KEY');

      if(acessToken) {
        const response = await AuthService.verifyToken();

        if(response.message) {
          setAcessToken(undefined);
          setBackdrop(false);
          localStorage.removeItem('KEY');
          showSnackBar('Sessão expirada, realize login novamente.', 'info');
        } else {
          setBackdrop(false);
          setAcessToken(acessToken);
        }

      } else {
        setBackdrop(false);
        setAcessToken(undefined);
      }
    };
    valideteToken();
  }, []);

  const handleLogin = useCallback(async (email: string, password: string) => {
    const data = await AuthService.auth(email, password);

    if(data instanceof Error){
      showSnackBar(data.message, 'error');
      return;
    } else {
      localStorage.setItem('KEY', data.token);
      setAcessToken(data.token);
      showSnackBar('Bem vindo!', 'success');
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('KEY');
    setAcessToken(undefined);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}>
      <Backdrop
        sx={{ color: (theme) => theme.palette.primary.dark, zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
