import { Edit } from '@mui/icons-material';
import { Avatar, Badge, Box, Button, Card, Divider, Grid, Icon, IconButton, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppToolbar } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';
import { AlunoService } from '../../shared/services/api/aluno/AlunoService';
import { Aluno } from '../../shared/types/Aluno';


export const Alunos = () => {

  const [ alunos, setAlunos ] = useState<Aluno[]>([]);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const getAlunos = async () => {
      const data = await AlunoService.getAll();
      console.log(data);
      setAlunos(data);
      setIsLoading(false);
    };
    getAlunos();
  }, []);

  return (
    <LayoutBase
      AppToolbar={(
        <AppToolbar />
      )}
    >
      <Grid container spacing={2}>
        <Grid item container xs={8}>
          <TableContainer component={Paper}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 4}}>
              <Typography variant='h5'>
                Alunos
              </Typography>
              <Button variant='contained' onClick={() => navigate('/aluno/cadastro')}>
                Novo Aluno
              </Button>
            </Box>
            <Divider />
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell>
                    Nome
                  </TableCell>
                  <TableCell align='right'>
                    Idade
                  </TableCell>
                  <TableCell align='right'>
                    Altura
                  </TableCell>
                  <TableCell align='right'>
                    Peso
                  </TableCell>
                  <TableCell align='right'>
                    Editar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading && (
                  <TableRow>
                    <TableCell>
                      <Box display='flex' alignItems='center' gap={2}>
                        <Skeleton variant='circular' width={40} height={40} />
                        <Skeleton width={120} height={30} />
                      </Box>
                    </TableCell>
                    <TableCell align='right'>
                      <Skeleton height={30} />
                    </TableCell>
                    <TableCell align='right'>
                      <Skeleton  height={30} />
                    </TableCell>
                    <TableCell align='right'>
                      <Skeleton height={30} />
                    </TableCell>
                    <TableCell align='right'>
                      <Skeleton height={30}/>
                    </TableCell>
                  </TableRow>
                )}

                {alunos.map(alunos => (
                  <TableRow key={alunos.id}>
                    <TableCell>
                      <Box display='flex' alignItems='center' gap={2}>
                        <Avatar src={alunos.Fotos[0] ? alunos.Fotos[0].url : undefined } />
                        {alunos.nome}
                      </Box>
                    </TableCell>
                    <TableCell align='right'>
                      {alunos.idade}
                    </TableCell>
                    <TableCell align='right'>
                      {alunos.altura}
                    </TableCell>
                    <TableCell align='right'>
                      {alunos.peso}
                    </TableCell>
                    <TableCell align='right'>
                      <IconButton onClick={() => navigate(`/aluno/${alunos.id}`)}>
                        <Icon>
                          manage_accounts
                        </Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            Ranking
          </Paper>
        </Grid>
      </Grid>
    </LayoutBase>
  );
};
