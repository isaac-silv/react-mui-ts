import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { LoginPage, SideBar } from './shared/components';
import { AppThemeProvider, AuthProvider, DrawerProvider } from './shared/contexts';


export const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <LoginPage>
          <DrawerProvider>
            <BrowserRouter>

              <SideBar>
                <AppRoutes />
              </SideBar>

            </BrowserRouter>
          </DrawerProvider>
        </LoginPage>
      </AppThemeProvider>
    </AuthProvider>
  );
};
