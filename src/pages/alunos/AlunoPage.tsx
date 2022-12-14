import { AutoAwesome, Delete, Edit, EditAttributes, ReportProblem } from '@mui/icons-material';
import { Avatar, Badge, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, Paper, Skeleton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import {  useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppToolbar } from '../../shared/components';
import { useSnackBar } from '../../shared/contexts';
import { LayoutBase } from '../../shared/layouts';
import { AlunoService } from '../../shared/services/api/aluno/AlunoService';
import { FotoService } from '../../shared/services/api/foto/FotoService';

export const AlunoPage = () => {
  const { showSnackBar } = useSnackBar();
  const navigate = useNavigate();

  const [ nome, setNome ] = useState<string | null>(null);
  const [ sobrenome, setSobrenome ] = useState<string | null>(null);
  const [ email, setEmail ] = useState<string | null>(null);
  const [ idade, setIdade ] = useState<number | null>(null);
  const [ altura, setAltura ] = useState<number | null>(null);
  const [ peso, setPeso ] = useState<number | null>(null);
  const [ foto, setFoto ] = useState<string | undefined>();
  const [ open, setOpen ] = useState<boolean>(false);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

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
        setFoto(response.Fotos[0].url);
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

  const handleChange = async (e: any) => {
    const file = e.target.files[0];
    const fotoURL = URL.createObjectURL(file);

    const formData = new FormData();
    formData.append('aluno_id', params);
    formData.append('foto', file);


    const response = await FotoService.newFoto(formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if(response.message) {
      showSnackBar(response.message, 'error');
      navigate('/alunos');
    } else {
      setFoto(fotoURL);
      showSnackBar('Foto alterada', 'success');
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
    setIsLoading(true);
    const getAluno = async () => {
      if(params !== 'cadastro') {
        const response = await AlunoService.getById(Number(params));

        if(response.message) {
          showSnackBar(response.message, 'error');
          navigate('/alunos');
          setIsLoading(false);
        } else {
          setNome(response.nome);
          setSobrenome(response.sobrenome);
          setEmail(response.email);
          setIdade(response.idade);
          setAltura(response.altura);
          setPeso(response.peso);
          setFoto(response.Fotos[0].url);
          setIsLoading(false);
        }
      }
      setIsLoading(false);
    };
    getAluno();
  }, []);

  return (
    <LayoutBase AppToolbar={(<AppToolbar />)}>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Box component={Paper}>
          {isLoading ?
            <Box>
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  paddingTop: 6,
                  paddingBottom: 1,
                  gap: '15px'
                }}
              >
                <Skeleton variant='circular' width={100} height={100} />
                <Skeleton width={200} height={50} />

              </Card>

              <Card sx={{padding: 2, display: 'flex', flexDirection: 'column' }}>
                <Divider />
                <Grid container>
                  <Grid item xs={6}>
                    <Skeleton width={205} height={80} />
                  </Grid>
                  <Grid item xs={6}>
                    <Skeleton width={205} height={80} />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Skeleton width={205} height={80} />
                  </Grid>
                  <Grid item xs={6}>
                    <Skeleton width={205} height={80} />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Skeleton width={205} height={80} />
                  </Grid>
                  <Grid item xs={6}>
                    <Skeleton width={205} height={80} />
                  </Grid>
                </Grid>

              </Card>
            </Box>
            :
            <Box>
              <Card sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                paddingTop: 6,
                paddingBottom: 1,
                gap: '15px'
              }}>
                {params !== 'cadastro' && (
                  <Tooltip title='Editar'>
                    <IconButton
                      component='label'
                      sx={{
                        p: 0,
                        backgroundColor: 'transparent',
                        '&:hover': {
                          backgroundColor: 'transparent'
                        }
                      }}
                    >
                      <input hidden accept="image/*" type="file" onChange={handleChange} />
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                          <Avatar sx={{width: 30, height: 30}}>
                            <AutoAwesome />
                          </Avatar>
                        }
                      >
                        <Avatar sx={{width: 100, height: 100}} src={foto} />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                )}
                <Typography variant='h5'>
                  {params !== 'cadastro' ? <>{nome} {sobrenome}</> : 'Cadastrar novo aluno'}
                </Typography>
              </Card>

              <Card sx={{padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Divider />
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
                <Stack justifyContent='center' direction='row' spacing={2} pt={2}>
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
          }

        </Box>
      </Box>
    </LayoutBase>
  );
};
