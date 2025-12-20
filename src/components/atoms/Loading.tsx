import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { FC } from 'react';

const AuthLoading: FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        p: 2,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default AuthLoading;
