'use client';

// React engine
import { useEffect, useState, FC } from 'react';

// MUI Core
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// Auth, Firebase
import { useAuth } from '@/contexts/AuthContext';
import {
  collection,
  query,
  where,
  onSnapshot,
  getFirestore,
} from '@firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';

// My Components, Types
import DeviceCard, { DeviceCardProps } from '@/components/molecules/DeviceCard';
import SuccessAlert from '@/components/atoms/SuccessAlert';
import Loading from '@/components/atoms/Loading';

// Main Component
const DeviceGrid: FC = () => {
  const { user } = useAuth();

  // Delete success snackbar
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [devicesFetched, setDevicesFetched] = useState(false);
  const handleDeleteAlertOpen = () => {
    setDeleteAlert(true);
  };
  const handleDeleteAlertClose = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setDeleteAlert(false);
  };

  const deleteDevice = httpsCallable<{ deviceid: string }, void>(
    getFunctions(),
    'unregisterDevice'
  );

  // Grid data state
  const [gridData, setGridData] = useState<DeviceCardProps[]>([]);
  // useEffect(() => {
  //   return onSnapshot(
  //     query(
  //       collection(getFirestore(), 'devices'),
  //       where('owner', '==', user?.uid)
  //     ),
  //     (snapshot) => {
  //       const data = snapshot.docs.map((doc) => {
  //         return {
  //           device: doc.data(),
  //           docRef: doc.ref,
  //         } as DeviceCardProps;
  //       });
  //       setGridData(data);
  //       setDevicesFetched(true);
  //     }
  //   );
  // }, [user]);

  return devicesFetched ? (
    <>
      {gridData.length === 0 ? (
        <Box
          sx={{
            padding: '2%',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">
            No devices found for {user?.displayName ?? user?.email}!
          </Typography>
        </Box>
      ) : (
        <></>
      )}
      <Grid
        container
        spacing={3}
        sx={{
          width: '100vw',
          paddingLeft: '10%',
          paddingRight: '10%',
          justifyContent: 'center',
        }}
      >
        {gridData.map((item, index) => {
          return (
            <DeviceCard
              key={'devicecard-' + index}
              {...item}
              deleteDevice={() => {
                deleteDevice({ deviceid: item.docRef.id }).then(
                  handleDeleteAlertOpen
                );
              }}
            />
          );
        })}
        <SuccessAlert openState={deleteAlert} onClose={handleDeleteAlertClose}>
          Device deleted!
        </SuccessAlert>
      </Grid>
    </>
  ) : (
    <Loading />
  );
};

export default DeviceGrid;
