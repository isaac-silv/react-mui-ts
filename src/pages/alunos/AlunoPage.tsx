import { Delete, Edit } from '@mui/icons-material';
import { Avatar, Box, Button, Card, Divider, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import { FormEventHandler, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppToolbar } from '../../shared/components';
import { useSnackBar } from '../../shared/contexts';
import { LayoutBase } from '../../shared/layouts';
import { AlunoService } from '../../shared/services/api/aluno/AlunoService';
import { Aluno } from '../../shared/types/Aluno';

export const AlunoPage = () => {
  const { showSnackBar } = useSnackBar();
  const navigate = useNavigate();

  const [ nome, setNome ] = useState<string | null>(null);
  const [ sobrenome, setSobrenome ] = useState<string | null>(null);
  const [ email, setEmail ] = useState<string | null>(null);
  const [ idade, setIdade ] = useState<number | null>(null);
  const [ altura, setAltura ] = useState<number | null>(null);
  const [ peso, setPeso ] = useState<number | null>(null);

  const { params = 'cadastro' } = useParams<'params'>();

  const handleSubmit = async () => {
    console.log('handleSubmit');
    const response = await AlunoService.edit(Number(params), {
      nome,
      sobrenome,
      email,
      idade,
      altura,
      peso
    });
    console.log(response);

    if(response.message) {
      showSnackBar(response.message, 'error');
      navigate('/alunos');
      return;
    } else {
      console.log(response);
      setNome(response.nome);
      setSobrenome(response.sobrenome);
      setEmail(response.email);
      setIdade(response.idade);
      setAltura(response.altura);
      setPeso(response.peso);
      return;
    }
  };



  useEffect(() => {
    const getAluno = async () => {
      if(params !== 'cadastro') {
        const response = await AlunoService.getById(Number(params));

        if(response.message) {
          showSnackBar(response.message, 'error');
          navigate('/alunos');
        } else {
          setNome(response.nome);
          setSobrenome(response.sobrenome);
          setEmail(response.email);
          setIdade(response.idade);
          setAltura(response.altura);
          setPeso(response.peso);
        }
      }
    };
    getAluno();
  }, []);

  return (
    <LayoutBase AppToolbar={(<AppToolbar />)}>
      <Box display='flex' justifyContent='center'>
        <Box component={Paper}>
          <Card sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: 6,
            paddingBottom: 4,
            gap: '15px'
          }}>
            <Avatar sx={{width: 80, height: 80}} />
            <Typography variant='h5'>
              {nome} {sobrenome}
            </Typography>
          </Card>

          <Card sx={{padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label='Nome'
                  type='text'
                  value={nome ? nome : ''}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Sobrenome'
                  type='text'
                  value={sobrenome ? sobrenome : ''}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label='Email'
                  type='email'
                  value={email ? email : ''}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Idade'
                  type='number'
                  value={idade ? idade : ''}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label='Altura'
                  type='number'
                  value={altura ? altura : ''}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Peso'
                  type='number'
                  value={peso ? peso : ''}
                />
              </Grid>
            </Grid>
            <Stack justifyContent='center' direction='row' spacing={2}>
              <Button variant='contained' color='info' endIcon={<Edit />} onClick={handleSubmit}>
                Editar
              </Button>
              <Button disabled variant='contained' color='warning' endIcon={<Delete />}>
                Deletar
              </Button>
            </Stack>
          </Card>
        </Box>
      </Box>
    </LayoutBase>
  );
};
