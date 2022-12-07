import { Box, Button, Card, CardActions, CardContent, Icon, IconButton, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useAuthContext } from '../../contexts';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

interface ILoginPageProps {
  children: React.ReactNode;
}

export const LoginPage: React.FC<ILoginPageProps> = ({ children }) => {
  const { isAuthenticated, login } = useAuthContext();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ emailError, setEmailError ] = useState('');
  const [ passwordError, setPasswordError ] = useState('');

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
          if(error.path === 'email') {
            setEmailError(error.message);
          } else if (error.path === 'password') {
            setPasswordError(error.message);
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
              error={!!emailError}
              helperText={emailError}
              onKeyDown={() => setEmailError('')}
              onChange={e => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              label='password'
              type='password'
              value={password}
              disabled={isLoading}
              error={!!passwordError}
              helperText={passwordError}
              onKeyDown={() => setPasswordError('')}
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
