import { Avatar, Box, Divider, Grid, Icon, IconButton, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { bgcolor } from '@mui/system';
import { AppToolbar } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';

import { Donutchart } from './charts/Doughnut';
import { ReceitaChart } from './charts/Receita';


export const Dashboard = () => {

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
        <Grid item container spacing={2}>
          <Grid item xs={smDown ? 12 : mdDown ? 6 : 3}>
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
                  bgcolor: theme.palette.secondary.main,
                  color: '#ffffff'
                }}>
                  <Icon fontSize='large'>
                    groups_2
                  </Icon>
                </Grid>
              </Grid>
              <Grid item xs={8} container>
                <Grid item container direction='column' justifyContent='center' ml={theme.spacing(1)}>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '1.3rem' : '1.5rem',
                      fontWeight: 700
                    }}>
                    468
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '0.7rem' : '0.9rem',
                      fontWeight: 400
                    }}>
                    ALUNOS
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={smDown ? 12 : mdDown ? 6 : 3}>
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
                  bgcolor: '#56CA00',
                  color: '#ffffff'
                }}>
                  <Icon fontSize='large'>
                    school
                  </Icon>
                </Grid>
              </Grid>
              <Grid item xs={8} container>
                <Grid item container direction='column' justifyContent='center' ml={theme.spacing(1)}>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '1.3rem' : '1.5rem',
                      fontWeight: 700
                    }}
                  >
                    26
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '0.7rem' : '0.9rem',
                      fontWeight: 400
                    }}
                  >
                    PROFESSORES
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={smDown ? 12 : mdDown ? 6 : 3}>
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
                  bgcolor: '#FFB400',
                  color: '#ffffff'
                }}>
                  <Icon fontSize='large'>
                    supervised_user_circle
                  </Icon>
                </Grid>
              </Grid>
              <Grid item xs={8} container>
                <Grid item container direction='column' justifyContent='center' ml={theme.spacing(1)} zeroMinWidth wrap='nowrap'>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '1.3rem' : '1.5rem',
                      fontWeight: 700
                    }}
                  >
                    16
                  </Typography>
                  <Typography
                    noWrap
                    sx={{
                      fontSize: lgDown ? '0.7rem' : '0.9rem',
                      fontWeight: 400
                    }}
                  >
                    COLABORADORES
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={smDown ? 12 : mdDown ? 6 : 3}>
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
                  bgcolor: '#16B1FF',
                  color: '#ffffff'
                }}>
                  <Icon fontSize='large'>
                    folder_shared
                  </Icon>
                </Grid>
              </Grid>
              <Grid item xs={8} container>
                <Grid item container direction='column' justifyContent='center' ml={theme.spacing(1)}>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '1.3rem' : '1.5rem',
                      fontWeight: 700
                    }}
                  >
                    18
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: lgDown ? '0.7rem' : '0.9rem',
                      fontWeight: 400
                    }}
                  >
                    TURMAS
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
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
                    bgcolor: '#EDE7F6',
                    color: theme.palette.primary.main
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
                    bgcolor: '#EDE7F6',
                    color: theme.palette.primary.main
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
