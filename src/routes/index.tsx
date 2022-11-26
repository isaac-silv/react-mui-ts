import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Alunos } from '../pages';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
      },
      {
        label: 'Alunos',
        path: '/alunos',
        icon: 'perm_contact_calendar',
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
      <Route
        path="/alunos"
        element={<Alunos />}
      />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};
