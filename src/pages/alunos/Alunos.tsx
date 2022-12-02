import { Avatar, Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow } from '@mui/material';
import { AppToolbar } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';


export const Alunos = () => {

  return (
    <LayoutBase
      AppToolbar={(
        <AppToolbar />
      )}
    >
      <Grid container >
        <TableContainer component={Paper}>
          <Table >
            <TableBody>
              <TableRow>
                <TableCell>
                  Aluno(a)
                </TableCell>
                <TableCell align='right'>
                  Turma
                </TableCell>
                <TableCell align='right'>
                  Turno
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box display='flex' alignItems='center' gap={2}>
                    <Avatar />
                    Isaac Silva
                  </Box>
                </TableCell>
                <TableCell align='right'>
                  2º ano
                </TableCell>
                <TableCell align='right'>
                  Tarde
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </LayoutBase>
  );
};
