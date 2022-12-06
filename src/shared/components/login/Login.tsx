import { Box } from '@mui/material';
import { useAuthContext } from '../../contexts';

interface ILoginPageProps {
  children: React.ReactNode;
}

export const LoginPage: React.FC<ILoginPageProps> = ({children}) => {
  const { isAuthenticated } = useAuthContext();

  if(isAuthenticated) {
    return (
      <>
        {children}
      </>
    );
  }

  return (
    <Box>
      Login page
    </Box>
  );
};
