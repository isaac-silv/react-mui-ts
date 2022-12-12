import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppToolbar } from '../../shared/components';
import { useSnackBar } from '../../shared/contexts';
import { LayoutBase } from '../../shared/layouts';
import { AlunoService } from '../../shared/services/api/aluno/AlunoService';

export const Aluno = () => {
  const { showSnackBar } = useSnackBar();
  const navigate = useNavigate();

  const [ aluno, setAluno ] = useState();

  const { params = 'cadastro' } = useParams<'params'>();



  useEffect(() => {
    const getAluno = async () => {
      if(params !== 'cadastro') {
        const response = await AlunoService.getById(Number(params));

        if(response.message) {
          showSnackBar(response.message, 'error');
          navigate('/alunos');
        }
      }
    };
    getAluno();
  }, []);

  return (
    <LayoutBase AppToolbar={(<AppToolbar />)}>
      Aluno
    </LayoutBase>
  );
};
