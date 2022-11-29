import { Box, Grid, Icon, IconButton, Paper, Typography, useTheme } from '@mui/material';
import { bgcolor } from '@mui/system';
import { AppToolbar } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';


export const Dashboard = () => {

  const theme = useTheme();

  return (
    <LayoutBase
      AppToolbar={(
        <AppToolbar />
      )}
    >
      <Grid container spacing={2}>
        <Grid item container spacing={2}>
          <Grid item xs={3}>
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
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    468
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 400 }}>
                    ALUNOS
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
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
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    26
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 400 }}>
                    PROFESSORES
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
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
                <Grid item container direction='column' justifyContent='center' ml={theme.spacing(1)}>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    16
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 400 }}>
                    COLABORADORES
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
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
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    18
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 400 }}>
                    TURMAS
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={6}>
            <Grid
              component={Paper}
              sx={{
                borderRadius: theme.spacing(1),
                height: theme.spacing(58)
              }}
              container
            >
              teste
            </Grid>
          </Grid>
          <Grid item container spacing={2} xs={6}>
            <Grid item container spacing={2} xs={12}>
              <Grid item xs={6}>
                <Grid
                  component={Paper}
                  sx={{
                    borderRadius: theme.spacing(1),
                    height: theme.spacing(40)
                  }}
                  container
                >
                  Teste
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid
                  component={Paper}
                  sx={{
                    borderRadius: theme.spacing(1),
                    height: theme.spacing(40)
                  }}
                  container
                >
                  Teste
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12}>
              <Grid
                component={Paper}
                sx={{
                  borderRadius: theme.spacing(1),
                  height: theme.spacing(16)
                }}
                container
              >
                Teste
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LayoutBase>
  );
};
