'use client';

import { FC } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '@/firebase';

import DeviceGrid from '../components/organisms/DeviceGrid';
import theme from '@/theme';

const DRAWER_WIDTH = '240px';

const Dashboard: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        // sx={{ width: `calc(100% - ${drawerWidth})`, ml: `${drawerWidth}` }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            PeaPod CloudPonics Dashboard
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            sx={{ marginLeft: 'auto' }}
            onClick={() => signOut(firebaseAuth)}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
      </Drawer>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: (theme) => theme.spacing(3),
        }}
      >
        <DeviceGrid />
      </Box>
    </Box>
  );
};

export default Dashboard;
