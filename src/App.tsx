import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { LoginPage, SideBar } from './shared/components';
import { AppThemeProvider, AuthProvider, DrawerProvider, SnackBarProvider } from './shared/contexts';


export const App = () => {
  return (
    <SnackBarProvider>

      <AppThemeProvider>
        <AuthProvider>
          <LoginPage>
            <DrawerProvider>
              <BrowserRouter>

                <SideBar>
                  <AppRoutes />
                </SideBar>

              </BrowserRouter>
            </DrawerProvider>
          </LoginPage>
        </AuthProvider>

      </AppThemeProvider>

    </SnackBarProvider>
  );
};
