import { FolderShared, Groups2, School, SupervisedUserCircle } from '@mui/icons-material';
import { Avatar, Box, Divider, Grid, Icon, IconButton, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';

import { AppToolbar } from '../../shared/components';
import { useAuthContext } from '../../shared/contexts';
import { LayoutBase } from '../../shared/layouts';
import { AlunosAreaChart } from './charts/AlunosAreaChart';

import { Donutchart } from './charts/Doughnut';
import { ReceitaChart } from './charts/Receita';


export const Dashboard = () => {

  const { user } = useAuthContext();

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <LayoutBase
      AppToolbar={(
        <AppToolbar />
      )}
    >
      <Grid container spacing={2}>
        <Grid item container spacing={2} xs={mdDown ? 12 : 4}>
          <Grid item xs={smDown ? 12 : mdDown ? 6 : 6}>
            <Box component={Paper}>
              <List
                subheader={
                  <ListSubheader
                    component="div"
                    color='inherit'
                    sx={{
                      fontSize: lgDown ? '1.3rem' : '1.3rem',
                      fontWeight: 500
                    }}
                  >
                    Alunos
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar variant='rounded' sx={{
                      bgcolor: theme.palette.primary.main,
                      width: 60,
                      height: 60
                    }}>
                      <Groups2 />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        sx={{
                          fontSize: lgDown ? '1.3rem' : '1.8rem',
                          fontWeight: 700,
                          pl: 2
                        }}
                      >
                        460
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item xs={smDown ? 12 : mdDown ? 6 : 6}>
            <Box component={Paper}>
              <List
                subheader={
                  <ListSubheader
                    component="div"
                    color='inherit'
                    sx={{
                      fontSize: lgDown ? '1.3rem' : '1.3rem',
                      fontWeight: 500
                    }}
                  >
                    Professores
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar variant='rounded' sx={{
                      bgcolor: theme.palette.secondary.main,
                      width: 60,
                      height: 60
                    }}>
                      <School />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        sx={{
                          fontSize: lgDown ? '1.3rem' : '1.8rem',
                          fontWeight: 700,
                          pl: 2
                        }}
                      >
                        30
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item xs={smDown ? 12 : mdDown ? 6 : 6}>
            <Box component={Paper}>
              <List
                subheader={
                  <ListSubheader
                    component="div"
                    color='inherit'
                    sx={{
                      fontSize: lgDown ? '1.3rem' : '1.3rem',
                      fontWeight: 500
                    }}
                  >
                    Colaboradores
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar variant='rounded' sx={{
                      bgcolor: '#f44336',
                      width: 60,
                      height: 60
                    }}>
                      <SupervisedUserCircle />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        sx={{
                          fontSize: lgDown ? '1.3rem' : '1.8rem',
                          fontWeight: 700,
                          pl: 2
                        }}
                      >
                        20
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item xs={smDown ? 12 : mdDown ? 6 : 6}>
            <Box component={Paper}>
              <List
                subheader={
                  <ListSubheader
                    component="div"
                    color='inherit'
                    sx={{
                      fontSize: lgDown ? '1.3rem' : '1.3rem',
                      fontWeight: 500
                    }}
                  >
                    Turmas
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar variant='rounded' sx={{
                      bgcolor: '#57CA22',
                      width: 60,
                      height: 60
                    }}>
                      <FolderShared />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        sx={{
                          fontSize: lgDown ? '1.3rem' : '1.8rem',
                          fontWeight: 700,
                          pl: 2
                        }}
                      >
                        20
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>

        </Grid>
        <Grid item container xs={mdDown ? 12 : 8}>
          <Box component={Paper} width='100%'>
            <AlunosAreaChart />
          </Box>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={mdDown ? 12 : 6}>
            <Grid
              component={Paper}
              sx={{
                borderRadius: theme.spacing(1),
              }}
              container
              direction='column'
            >
              <Grid sx={{ display: 'flex', padding: theme.spacing(2) }}>
                <Typography
                  sx={{
                    flexGrow: 1,
                    fontSize: lgDown ? '1.2rem' : '1.3rem',
                    fontWeight: 400
                  }}
                >
                  Receita
                </Typography>

                <Avatar
                  sx={{
                    flexGrow: 0,
                    bgcolor: theme.palette.primary.main,
                    color: '#ffffff'
                  }}
                  variant='rounded'
                >
                  <Icon>
                    trending_up
                  </Icon>
                </Avatar>

              </Grid>
              <Divider />
              <Grid item container sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                padding: theme.spacing(2)
              }}>
                <ReceitaChart />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={mdDown ? 12 : 6}>
            <Grid
              component={Paper}
              sx={{
                borderRadius: theme.spacing(1),
              }}
              container
              direction='column'
            >
              <Grid sx={{ display: 'flex', padding: theme.spacing(2) }}>
                <Typography
                  sx={{
                    flexGrow: 1,
                    fontSize: lgDown ? '1.2rem' : '1.3rem',
                    fontWeight: 400
                  }}
                >
                  Despesas
                </Typography>

                <Avatar
                  sx={{
                    flexGrow: 0,
                    bgcolor: theme.palette.primary.main,
                    color: '#ffffff'
                  }}
                  variant='rounded'
                >
                  <Icon>
                    trending_down
                  </Icon>
                </Avatar>

              </Grid>
              <Divider />
              <Grid item container sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                padding: theme.spacing(2)
              }}>
                <Donutchart />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LayoutBase>
  );
};
