'use client';

import { FC } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import DeviceGrid from '../components/organisms/DeviceGrid';
import theme from '@/theme';

const Dashboard: FC = () => {
  return (
    <div>
      <Box
        sx={{
          paddingTop: '2%',
          paddingBottom: '1%',
          display: 'flex',
          width: '100vw',
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4">Device Dashboard</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: (theme) => theme.spacing(3),
        }}
      >
        <DeviceGrid />
      </Box>
    </div>
  );
};

export default Dashboard;
