import { FC, PropsWithChildren } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';

const GridCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          padding: (theme) => theme.spacing(3),
          color: (theme) => theme.palette.text.secondary,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '20em',
        }}
        elevation={5}
      >
        {children}
      </Paper>
    </Grid>
  );
};

export default GridCard;
