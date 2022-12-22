import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';

import { Dashboard, Alunos, AlunoPage, Professores, Colaboradores, Turmas } from '../pages';

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
      },
      {
        label: 'Professores',
        path: '/professores',
        icon: 'school',
      },
      {
        label: 'Colaboradores',
        path: '/colaboradores',
        icon: 'supervised_user_circle',
      },
      {
        label: 'Turmas',
        path: '/turmas',
        icon: 'folder_shared',
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
      <Route
        path="/alunos/:params"
        element={<AlunoPage />}
      />
      <Route
        path="/professores"
        element={<Professores />}
      />
      <Route
        path="/colaboradores"
        element={<Colaboradores />}
      />
      <Route
        path="/turmas"
        element={<Turmas />}
      />

      <Route
        path="*"
        element={<Navigate to="/dashboard" />}
      />
    </Routes>
  );
};
