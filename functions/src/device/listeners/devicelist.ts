import * as functions from 'firebase-functions';
import {firestore} from 'firebase-admin';

// Minimize Firestore reads by caching device IDs and metadata.

type DeviceCacheData = {
  owner: string
};

export const devices: {[key: string]: DeviceCacheData} = {};

// Get initial set of registered devices
firestore().collection('devices').get().then((docs)=>{
  docs.docs.forEach((doc)=>{
    devices[doc.id] = {...doc.data} as {owner: string};
  });
});

export const deviceCreationListener = functions.firestore.document('devices/{deviceID}').onCreate((doc)=>{
  devices[doc.id] = {...doc.data} as {owner: string};
});

export const deviceDeletionListener = functions.firestore.document('devices/{deviceID}').onDelete((doc)=>{
  delete devices[doc.id];
});
