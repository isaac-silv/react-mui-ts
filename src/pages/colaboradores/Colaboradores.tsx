import { Typography } from '@mui/material';
import { AppToolbar } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';

export const Colaboradores = () => {

  return (
    <LayoutBase
      AppToolbar={(
        <AppToolbar />
      )}
    >
      <Typography variant='h3'>
        Em breve...
      </Typography>
    </LayoutBase>
  );
};
