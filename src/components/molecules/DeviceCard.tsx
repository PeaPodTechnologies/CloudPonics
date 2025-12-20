// React engine
import { useState, FC } from 'react';
import { useHistory } from 'react-router-dom';

// MUI core
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// My Components, Types
import GridCard from '../atoms/GridCard';
import { DocumentReference } from '@firebase/firestore';

export type DeviceCardProps = {
  device: {
    owner: string;
    name: string;
    latest: {
      project: string;
      run: string;
    };
  };
  docRef: DocumentReference;
  deleteDevice: () => void;
};

const DeviceCard: FC<DeviceCardProps> = (props) => {
  // let history = useHistory();

  // const gotoDevice = () => {
  //   history.push(`/devices/${props.docRef.id}`);
  // };

  // Delete confirmation dialog
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };
  const handleCancelAndClose = () => {
    handleDeleteClose();
    props.deleteDevice();
  };

  return (
    <GridCard>
      <Typography variant="h6" className={classes.title}>
        <Box sx={{ fontWeight: 'bold' }}>{props.device.name}</Box>
      </Typography>
      <Box sx={{ padding: '.5em', flexGrow: 1, verticalAlign: 'top' }}>
        <Typography variant="body2">{props.docRef.id}</Typography>
        <Typography variant="body2">
          Project: {props.device.latest.project}
        </Typography>
      </Box>
      <Box sx={{ padding: (theme) => theme.spacing(1) }}>
        <Button variant="contained" color="primary" onClick={gotoDevice}>
          View
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteOpen}
        >
          Delete
        </Button>
      </Box>
      <Dialog
        open={deleteOpen}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Unregister device ${props.docRef.id}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This device will be unregistered immediately. It will no longer be
            able to publish data or be remotely monitored and configured, and
            any in-progress runs being done by the device will be stopped.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleCancelAndClose} color="secondary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </GridCard>
  );
};

export default DeviceCard;
