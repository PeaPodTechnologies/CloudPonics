import { FC, PropsWithChildren } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const SuccessAlert: FC<
  PropsWithChildren<{ openState: boolean; onClose: () => void }>
> = (props) => {
  return (
    <Snackbar
      open={props.openState}
      autoHideDuration={6000}
      onClose={props.onClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={props.onClose}
        severity="success"
      >
        {props.children}
      </MuiAlert>
    </Snackbar>
  );
};

export default SuccessAlert;
