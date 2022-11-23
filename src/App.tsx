import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { SideBar } from './shared/components';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';


export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <SideBar>
            <AppRoutes />
          </SideBar>

        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
