import { Avatar, Box, Divider, Grid, Icon, IconButton, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';

import { AppToolbar } from '../../shared/components';
import { useAuthContext } from '../../shared/contexts';
import { LayoutBase } from '../../shared/layouts';

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
      <Box>
        <Typography>
          Olá {user?.nome}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item container spacing={2} xs={mdDown ? 12 : 6}>
          <Grid item xs={smDown ? 12 : mdDown ? 6 : 6}>
            <Grid
              component={Paper}
              sx={{
                borderRadius: theme.spacing(1)
              }}
              container
            >
              <Grid item xs={4}>
                <Grid item sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 3,
                  borderTopLeftRadius: theme.spacing(1),
                  borderBottomLeftRadius: theme.spacing(1),
                }}>
                  <Avatar sx={{
                    bgcolor: theme.palette.primary.light
                  }}>
                    <Icon fontSize='medium'>
                      groups_2
                    </Icon>
                  </Avatar>
                </Grid>
              </Grid>
              <Grid item xs={8} display='flex'>
                <Grid>
                  <Divider orientation='vertical' />
                </Grid>
                <Grid item container direction='column' justifyContent='center' ml={theme.spacing(3)}>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '1.3rem' : '1.8rem',
                      fontWeight: 700
                    }}>
                    468
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '0.7rem' : '1rem',
                      fontWeight: 300
                    }}>
                    Alunos
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={smDown ? 12 : mdDown ? 6 : 6}>
            <Grid
              component={Paper}
              sx={{
                borderRadius: theme.spacing(1)
              }}
              container
            >
              <Grid item xs={4}>
                <Grid item sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 3,
                  borderTopLeftRadius: theme.spacing(1),
                  borderBottomLeftRadius: theme.spacing(1),
                }}>
                  <Avatar sx={{
                    bgcolor: theme.palette.secondary.light
                  }}>
                    <Icon fontSize='medium'>
                      school
                    </Icon>
                  </Avatar>
                </Grid>
              </Grid>
              <Grid item xs={8} display='flex'>
                <Grid>
                  <Divider orientation='vertical' />
                </Grid>
                <Grid item container direction='column' justifyContent='center' ml={theme.spacing(3)}>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '1.3rem' : '1.8rem',
                      fontWeight: 700
                    }}
                  >
                    26
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '0.7rem' : '1rem',
                      fontWeight: 300
                    }}
                  >
                    Professores
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={smDown ? 12 : mdDown ? 6 : 6}>
            <Grid
              component={Paper}
              sx={{
                borderRadius: theme.spacing(1)
              }}
              container
            >
              <Grid item xs={4}>
                <Grid item sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 3,
                  borderTopLeftRadius: theme.spacing(1),
                  borderBottomLeftRadius: theme.spacing(1),
                }}>
                  <Avatar sx={{
                    bgcolor: theme.palette.primary.light
                  }}>
                    <Icon fontSize='medium'>
                      supervised_user_circle
                    </Icon>
                  </Avatar>
                </Grid>
              </Grid>
              <Grid item xs={8} display='flex'>
                <Grid>
                  <Divider orientation='vertical' />
                </Grid>
                <Grid item container direction='column' justifyContent='center' ml={theme.spacing(3)} zeroMinWidth wrap='nowrap'>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '1.3rem' : '1.8rem',
                      fontWeight: 700
                    }}
                  >
                    16
                  </Typography>
                  <Typography
                    noWrap
                    sx={{
                      fontSize: lgDown ? '0.7rem' : '1rem',
                      fontWeight: 300
                    }}
                  >
                    Colaboradores
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={smDown ? 12 : mdDown ? 6 : 6}>
            <Grid
              component={Paper}
              sx={{
                borderRadius: theme.spacing(1)
              }}
              container
            >
              <Grid item xs={4}>
                <Grid item sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 3,
                  borderTopLeftRadius: theme.spacing(1),
                  borderBottomLeftRadius: theme.spacing(1),
                }}>
                  <Avatar sx={{
                    bgcolor: theme.palette.secondary.light
                  }}>
                    <Icon fontSize='medium'>
                      folder_shared
                    </Icon>
                  </Avatar>
                </Grid>
              </Grid>
              <Grid item xs={8} display='flex'>
                <Grid>
                  <Divider orientation='vertical' />
                </Grid>
                <Grid item container direction='column' justifyContent='center' ml={theme.spacing(3)}>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '1.3rem' : '1.8rem',
                      fontWeight: 700
                    }}
                  >
                    18
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '0.7rem' : '1rem',
                      fontWeight: 300
                    }}
                  >
                    Turmas
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={mdDown ? 12 : 6}>
          <Grid item container component={Paper}>

          </Grid>
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
