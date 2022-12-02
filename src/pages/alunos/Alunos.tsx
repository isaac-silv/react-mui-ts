import { Avatar, Box, Grid, Icon, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow } from '@mui/material';
import { AppToolbar } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';


export const Alunos = () => {

  return (
    <LayoutBase
      AppToolbar={(
        <AppToolbar />
      )}
    >
      <Grid container spacing={2}>
        <Grid item container xs={8}>
          <TableContainer component={Paper}>
            <Table >
              <TableBody>
                <TableRow>
                  <TableCell>
                    Aluno(a)
                  </TableCell>
                  <TableCell align='right'>
                    Contato
                  </TableCell>
                  <TableCell align='right'>
                    Turma
                  </TableCell>
                  <TableCell align='right'>
                    Turno
                  </TableCell>
                  <TableCell align='right'>
                    Editar
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Box display='flex' alignItems='center' gap={2}>
                      <Avatar src='https://www.svgrepo.com/show/8137/avatar.svg' />
                      Isaac Silva
                    </Box>
                  </TableCell>
                  <TableCell align='right'>
                    (99) 90000-0000
                  </TableCell>
                  <TableCell align='right'>
                    2º ano
                  </TableCell>
                  <TableCell align='right'>
                    Tarde
                  </TableCell>
                  <TableCell align='right'>
                    <IconButton>
                      <Icon>
                        manage_accounts
                      </Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
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
