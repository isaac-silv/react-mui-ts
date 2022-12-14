import { Delete, Edit, ReportProblem } from '@mui/icons-material';
import { Avatar, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import {  useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppToolbar } from '../../shared/components';
import { useSnackBar } from '../../shared/contexts';
import { LayoutBase } from '../../shared/layouts';
import { AlunoService } from '../../shared/services/api/aluno/AlunoService';

export const AlunoPage = () => {
  const { showSnackBar } = useSnackBar();
  const navigate = useNavigate();

  const [ nome, setNome ] = useState<string | null>(null);
  const [ sobrenome, setSobrenome ] = useState<string | null>(null);
  const [ email, setEmail ] = useState<string | null>(null);
  const [ idade, setIdade ] = useState<number | null>(null);
  const [ altura, setAltura ] = useState<number | null>(null);
  const [ peso, setPeso ] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const { params = 'cadastro' } = useParams<'params'>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    if(params !== 'cadastro') {
      const response = await AlunoService.edit(Number(params), {
        nome,
        sobrenome,
        email,
        idade,
        altura,
        peso
      });

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
        showSnackBar('Aluno editado com sucesso!', 'success');
      }
    } else {
      const response = await AlunoService.newAluno({
        nome,
        sobrenome,
        email,
        idade,
        altura,
        peso
      });

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
        showSnackBar('Aluno cadastrado com sucesso!', 'success');
        navigate(`/aluno/${response.id}`);
      }
    }
  };

  const handleDelete = async () => {
    const response = await AlunoService.deleteAluno(Number(params));
    if(response.message) {
      showSnackBar(response.message, 'error');
      navigate('/alunos');
    }
    showSnackBar('Aluno deletado!', 'error');
    navigate('/alunos');
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
      <Box display='flex' justifyContent='center' alignItems='center'>
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
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Sobrenome'
                  type='text'
                  value={sobrenome ? sobrenome : ''}
                  onChange={(e) => setSobrenome(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label='Email'
                  type='email'
                  value={email ? email : ''}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Idade'
                  type='number'
                  value={idade ? idade : ''}
                  onChange={(e) => setIdade(parseFloat(e.target.value))}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label='Altura'
                  type='number'
                  value={altura ? altura : ''}
                  onChange={(e) => setAltura(parseFloat(e.target.value))}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Peso'
                  type='number'
                  value={peso ? peso : ''}
                  onChange={(e) => setPeso(parseFloat(e.target.value))}
                />
              </Grid>
            </Grid>
            <Stack justifyContent='center' direction='row' spacing={2}>
              <Button variant='contained' color={params === 'cadastro' ? 'primary' : 'info'} endIcon={<Edit />} onClick={handleSubmit}>
                {params === 'cadastro' ? 'Cadatrar' : 'Editar'}
              </Button>
              {params !== 'cadastro' && (
                <Box>
                  <Button variant='contained' color='error' endIcon={<Delete />} onClick={handleClickOpen}>
                  Deletar
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="draggable-dialog-title"
                  >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                      Tem certeza que deseja apagar este aluno?
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        O aluno selecionado será apagado permanentemente da base de dados,
                        Não havendo qualquer chance de recuperação dos dados após essa ação!
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus color='info' onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button variant='contained' color='error' endIcon={<ReportProblem />} onClick={handleDelete}>DELETAR</Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              )}
            </Stack>
          </Card>
        </Box>
      </Box>
    </LayoutBase>
  );
};
