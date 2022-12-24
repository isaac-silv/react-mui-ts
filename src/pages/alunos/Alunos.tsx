import { Edit } from '@mui/icons-material';
import { Avatar, Badge, Box, Button, Card, Divider, Grid, Icon, IconButton, Paper, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppToolbar } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';
import { AlunoService } from '../../shared/services/api/aluno/AlunoService';
import { Aluno } from '../../shared/types/Aluno';


export const Alunos = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [ alunos, setAlunos ] = useState<Aluno[]>([]);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ page, setPage ] = useState(0);
  const [ alunosPerPage, setAlunosPerPage ] = useState(5);
  const [ areaLabel, setAreaLabel ] = useState<'primeira página' | 'última página' | 'página anterior' | 'próxima página'>();

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



  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlunosPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <LayoutBase
      AppToolbar={(
        <AppToolbar />
      )}
    >
      <Grid container spacing={2}>
        <Grid item container>
          <TableContainer component={Paper}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 4}}>
              <Typography variant='h3'>
                Alunos
              </Typography>
              <Button variant='contained' onClick={() => navigate('/alunos/cadastro')}>
                Novo Aluno
              </Button>
            </Box>
            <Divider />
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant='h4'>
                      Nome
                    </Typography>
                  </TableCell>

                  {smDown ? null :
                    <TableCell align='right'>
                      <Typography variant='h4'>
                        Idade
                      </Typography>
                    </TableCell>
                  }

                  {smDown ? null :
                    <TableCell align='right'>
                      <Typography variant='h4'>
                        Altura
                      </Typography>
                    </TableCell>
                  }
                  {smDown ? null :
                    <TableCell align='right'>
                      <Typography variant='h4'>
                        Peso
                      </Typography>
                    </TableCell>
                  }
                  <TableCell align='right'>
                    <Typography variant='h4'>
                      Editar
                    </Typography>
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

                {alunos.slice(page * alunosPerPage, page * alunosPerPage + alunosPerPage).map(alunos => (
                  <TableRow key={alunos.id}>
                    <TableCell>
                      <Box display='flex' alignItems='center' gap={2}>
                        <Avatar src={alunos.Fotos[0] ? alunos.Fotos[0].url : undefined } />
                        <Typography variant='h5'>
                          {alunos.nome}
                        </Typography>
                      </Box>
                    </TableCell>
                    {smDown ? null :
                      <TableCell align='right'>
                        {alunos.idade}
                      </TableCell>
                    }

                    {smDown ? null :
                      <TableCell align='right'>
                        {alunos.altura}
                      </TableCell>
                    }
                    {smDown ? null :
                      <TableCell align='right'>
                        {alunos.peso}
                      </TableCell>
                    }
                    <TableCell align='right'>
                      <IconButton onClick={() => navigate(`/alunos/${alunos.id}`)}>
                        <Icon>
                          manage_accounts
                        </Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
            <Box sx={{paddingRight: 2}}>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={alunos.length}
                rowsPerPage={alunosPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage={'Alunos por página:'}
                labelDisplayedRows={
                  ({ from, to, count }) => {return '' + from + '-' + to + ' de ' + count;}
                }
              />
            </Box>
          </TableContainer>
        </Grid>
      </Grid>
    </LayoutBase>
  );
};
