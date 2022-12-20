import { Backdrop, Box, Button, Card, CardActions, CardContent, CircularProgress, Icon, IconButton, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useAuthContext, useSnackBar } from '../../contexts';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  password: yup.string().required().min(6),
  email: yup.string().email().required(),
});

interface ILoginPageProps {
  children: React.ReactNode;
}

export const LoginPage: React.FC<ILoginPageProps> = ({ children }) => {
  const { isAuthenticated, login } = useAuthContext();
  const { showSnackBar } = useSnackBar();

  const [ email, setEmail ] = useState('teste@email.com');
  const [ password, setPassword ] = useState('123456');
  const [ emailError, setEmailError ] = useState(false);
  const [ passwordError, setPasswordError ] = useState(false);

  const [ isLoading, setIsLoading ] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    loginSchema
      .validate({ email, password }, { abortEarly: false })
      .then(data => {
        login(data.email, data.password)
          .then(() => {
            setIsLoading(false);
          });
      })
      .catch((errors: yup.ValidationError) => {
        setIsLoading(false);

        errors.inner.forEach(error => {
          if (error.path === 'password') {
            setPasswordError(true);
            showSnackBar(error.message, 'error');
          }
          if(error.path === 'email') {
            setEmailError(true);
            showSnackBar(error.message, 'info');
          }
        });
      });
  };


  if(isAuthenticated) {
    return (
      <>
        {children}
      </>
    );
  }

  return (
    <Box
      width='100vw'
      height='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Card>
        <CardContent>
          <Box
            display='flex'
            flexDirection='column'
            gap={2}
            width={250}
          >
            <Typography
              variant='h6'
              align='center'
            >
              Digite suas credenciais
            </Typography>
            <TextField
              fullWidth
              label='Email'
              type='email'
              value={email}
              disabled={isLoading}
              error={emailError}
              onKeyDown={() => setEmailError(false)}
              onChange={e => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              label='password'
              type='password'
              value={password}
              disabled={isLoading}
              error={passwordError}
              onKeyDown={() => setPasswordError(false)}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Box
            width='100%'
            display='flex'
            justifyContent='center'
          >
            <Button
              disabled={isLoading}
              variant='contained'
              onClick={handleSubmit}
            >
              Entrar
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};
